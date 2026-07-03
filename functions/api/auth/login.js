import { cors, createSession, json, verifyPassword } from "../../_shared/auth.js";

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method === "OPTIONS") return cors(new Response(null, { status: 204 }));
  if (request.method !== "POST") return cors(json({ error: "Method not allowed" }, 405));

  let payload;
  try {
    payload = await request.json();
  } catch {
    return cors(json({ error: "Invalid JSON" }, 400));
  }

  const email = String(payload.email || "").trim().toLowerCase();
  const password = String(payload.password || "");
  if (!email || !password) return cors(json({ error: "请输入用户名和密码" }, 400));

  const user = await env.DB.prepare(
    "SELECT id, email, name, role, password_hash, password_salt, active FROM users WHERE email = ?",
  ).bind(email).first();
  if (!user || !user.active) return cors(json({ error: "账号或密码不正确" }, 401));

  const ok = await verifyPassword(password, user.password_salt, user.password_hash);
  if (!ok) return cors(json({ error: "账号或密码不正确" }, 401));

  const session = await createSession(env, user.id);
  return cors(json({
    token: session.token,
    expiresAt: session.expiresAt,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
  }));
}
