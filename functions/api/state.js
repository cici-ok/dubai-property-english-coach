import { cors, json, requireUser } from "../_shared/auth.js";

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method === "OPTIONS") return cors(new Response(null, { status: 204 }));
  const user = await requireUser(request, env);
  if (!user) return cors(json({ error: "Unauthorized" }, 401));

  if (request.method === "GET") {
    const row = await env.DB.prepare("SELECT state_json FROM user_state WHERE user_id = ?").bind(user.id).first();
    return cors(json({ state: row ? JSON.parse(row.state_json) : null }));
  }

  if (request.method === "POST") {
    let payload;
    try {
      payload = await request.json();
    } catch {
      return cors(json({ error: "Invalid JSON" }, 400));
    }
    const stateJson = JSON.stringify(payload.state || {});
    await env.DB.prepare(
      `INSERT INTO user_state (user_id, state_json, updated_at)
       VALUES (?, ?, datetime('now'))
       ON CONFLICT(user_id) DO UPDATE SET
         state_json = excluded.state_json,
         updated_at = datetime('now')`,
    ).bind(user.id, stateJson).run();
    return cors(json({ ok: true }));
  }

  return cors(json({ error: "Method not allowed" }, 405));
}
