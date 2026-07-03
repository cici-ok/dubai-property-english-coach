const SESSION_TTL_SECONDS = 60 * 60 * 24 * 14;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function cors(response) {
  const next = new Response(response.body, response);
  next.headers.set("access-control-allow-origin", "*");
  next.headers.set("access-control-allow-methods", "GET, POST, OPTIONS");
  next.headers.set("access-control-allow-headers", "content-type, authorization");
  return next;
}

function toBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function randomToken() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return toBase64Url(bytes);
}

async function sha256(value) {
  const encoded = new TextEncoder().encode(value);
  return toBase64Url(await crypto.subtle.digest("SHA-256", encoded));
}

async function hashPassword(password, salt = randomToken()) {
  return {
    salt,
    hash: await sha256(`${salt}:${password}`),
  };
}

async function verifyPassword(password, salt, expectedHash) {
  const { hash } = await hashPassword(password, salt);
  return hash === expectedHash;
}

function getBearerToken(request) {
  const header = request.headers.get("authorization") || "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : "";
}

async function requireUser(request, env) {
  const token = getBearerToken(request);
  if (!token) return null;
  const tokenHash = await sha256(token);
  const row = await env.DB.prepare(
    `SELECT u.id, u.email, u.name, u.role
       FROM sessions s
       JOIN users u ON u.id = s.user_id
      WHERE s.token_hash = ? AND s.expires_at > datetime('now')`,
  ).bind(tokenHash).first();
  return row || null;
}

async function createSession(env, userId) {
  const token = randomToken();
  const tokenHash = await sha256(token);
  const expiresAt = new Date(Date.now() + SESSION_TTL_SECONDS * 1000).toISOString();
  await env.DB.prepare(
    "INSERT INTO sessions (token_hash, user_id, expires_at, created_at) VALUES (?, ?, ?, datetime('now'))",
  ).bind(tokenHash, userId, expiresAt).run();
  return { token, expiresAt };
}

export {
  SESSION_TTL_SECONDS,
  cors,
  createSession,
  hashPassword,
  json,
  requireUser,
  sha256,
  verifyPassword,
};
