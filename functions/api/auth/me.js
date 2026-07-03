import { cors, json, requireUser } from "../../_shared/auth.js";

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method === "OPTIONS") return cors(new Response(null, { status: 204 }));
  if (request.method !== "GET") return cors(json({ error: "Method not allowed" }, 405));

  const user = await requireUser(request, env);
  if (!user) return cors(json({ error: "Unauthorized" }, 401));
  return cors(json({ user }));
}
