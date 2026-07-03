const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 8788);
const localUsers = [
  {
    id: 1,
    email: process.env.LOCAL_LOGIN_EMAIL || "admin",
    name: process.env.LOCAL_LOGIN_NAME || "admin",
    role: "admin",
    password: process.env.LOCAL_LOGIN_PASSWORD || "admin123",
    created_at: new Date().toISOString(),
  },
];
let localState = null;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const [key, ...rest] = trimmed.split("=");
    if (!process.env[key]) {
      process.env[key] = rest.join("=").replace(/^["']|["']$/g, "");
    }
  }
}

function loadYamlModelConfig(filePath) {
  if (!fs.existsSync(filePath)) return;
  const values = {};
  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes(":")) continue;
    const [key, ...rest] = trimmed.split(":");
    values[key.trim()] = rest.join(":").trim().replace(/^["']|["']$/g, "");
  }
  process.env.OPENCODE_BASE_URL ||= values.base_url || "";
  process.env.OPENCODE_API_KEY ||= values.api_key || "";
  process.env.OPENCODE_FREE_MODEL ||= values.model || "";
}

function send(res, statusCode, body, contentType = "text/plain; charset=utf-8") {
  res.writeHead(statusCode, {
    "content-type": contentType,
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, OPTIONS",
    "access-control-allow-headers": "content-type, authorization",
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) req.destroy();
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function serveFile(req, res) {
  const urlPath = new URL(req.url, `http://localhost:${port}`).pathname;
  const safePath = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath === "/" ? "index.html" : safePath);
  if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    send(res, 404, "Not found");
    return;
  }
  const ext = path.extname(filePath);
  send(res, 200, fs.readFileSync(filePath), mimeTypes[ext] || "application/octet-stream");
}

loadEnvFile(path.join(root, ".env.local"));
loadYamlModelConfig("/Users/xinxin/property-admin/news_pipeline/config/api.yaml");
const { handler } = require("../netlify/functions/ai-teacher.js");

function localAuthResponse(user = localUsers[0]) {
  return JSON.stringify({
    token: "local-dev-token",
    expiresAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
  });
}

http
  .createServer(async (req, res) => {
    try {
      if (req.method === "OPTIONS") {
        send(res, 204, "");
        return;
      }
      if (req.url.startsWith("/api/auth/login")) {
        const payload = JSON.parse((await readBody(req)) || "{}");
        const user = localUsers.find((item) => item.email === String(payload.email || "").toLowerCase());
        if (user && payload.password === user.password) {
          send(res, 200, localAuthResponse(user), "application/json; charset=utf-8");
        } else {
          send(res, 401, JSON.stringify({ error: "账号或密码不正确" }), "application/json; charset=utf-8");
        }
        return;
      }
      if (req.url.startsWith("/api/auth/me")) {
        const user = localUsers[0];
        send(res, 200, JSON.stringify({ user: { id: user.id, email: user.email, name: user.name, role: user.role } }), "application/json; charset=utf-8");
        return;
      }
      if (req.url.startsWith("/api/state")) {
        if (req.method === "GET") {
          send(res, 200, JSON.stringify({ state: localState }), "application/json; charset=utf-8");
          return;
        }
        const payload = JSON.parse((await readBody(req)) || "{}");
        localState = payload.state || {};
        send(res, 200, JSON.stringify({ ok: true }), "application/json; charset=utf-8");
        return;
      }
      if (req.url.startsWith("/api/admin/users")) {
        if (req.method === "GET") {
          const users = localUsers.map(({ password, ...user }) => user);
          send(res, 200, JSON.stringify({ users }), "application/json; charset=utf-8");
          return;
        }
        const payload = JSON.parse((await readBody(req)) || "{}");
        const email = String(payload.email || "").trim().toLowerCase();
        const password = String(payload.password || "");
        if (!email || password.length < 6) {
          send(res, 400, JSON.stringify({ error: "用户名不能为空，密码至少 6 位" }), "application/json; charset=utf-8");
          return;
        }
        const existing = localUsers.find((item) => item.email === email);
        if (existing) {
          existing.password = password;
          existing.name = payload.name || email;
        } else {
          localUsers.push({
            id: localUsers.length + 1,
            email,
            name: payload.name || email,
            role: "user",
            password,
            created_at: new Date().toISOString(),
          });
        }
        send(res, 200, JSON.stringify({ ok: true }), "application/json; charset=utf-8");
        return;
      }
      if (req.url.startsWith("/api/ai-teacher")) {
        const result = await handler({
          httpMethod: req.method,
          body: await readBody(req),
        });
        send(res, result.statusCode || 200, result.body || "", result.headers?.["content-type"] || "application/json; charset=utf-8");
        return;
      }
      serveFile(req, res);
    } catch (error) {
      send(res, 500, JSON.stringify({ error: error.message }), "application/json; charset=utf-8");
    }
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Dubai Property English Coach local AI server: http://127.0.0.1:${port}`);
  });
