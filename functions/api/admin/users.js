import { cors, hashPassword, json, requireUser } from "../../_shared/auth.js";

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method === "OPTIONS") return cors(new Response(null, { status: 204 }));
  const user = await requireUser(request, env);
  if (!user || user.role !== "admin") return cors(json({ error: "Unauthorized" }, 401));

  if (request.method === "GET") {
    const result = await env.DB.prepare(
      "SELECT id, email, name, role, active, created_at FROM users ORDER BY id DESC",
    ).all();
    return cors(json({ users: result.results || [] }));
  }

  if (request.method === "POST") {
    let payload;
    try {
      payload = await request.json();
    } catch {
      return cors(json({ error: "Invalid JSON" }, 400));
    }
    const email = String(payload.email || "").trim().toLowerCase();
    const name = String(payload.name || email).trim();
    const password = String(payload.password || "");
    const role = payload.role === "admin" ? "admin" : "user";
    if (!email || password.length < 6) return cors(json({ error: "用户名不能为空，密码至少 6 位" }, 400));
    const { salt, hash } = await hashPassword(password);
    await env.DB.prepare(
      `INSERT INTO users (email, name, role, password_hash, password_salt, active, created_at)
       VALUES (?, ?, ?, ?, ?, 1, datetime('now'))
       ON CONFLICT(email) DO UPDATE SET
         name = excluded.name,
         role = excluded.role,
         password_hash = excluded.password_hash,
         password_salt = excluded.password_salt,
         active = 1`,
    ).bind(email, name, role, hash, salt).run();
    return cors(json({ ok: true }));
  }

  return cors(json({ error: "Method not allowed" }, 405));
}
