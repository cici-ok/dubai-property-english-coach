const { handler } = require("../netlify/functions/ai-teacher.js");

module.exports = async function aiTeacher(req, res) {
  const event = {
    httpMethod: req.method,
    body: typeof req.body === "string" ? req.body : JSON.stringify(req.body || {}),
  };

  const result = await handler(event);
  Object.entries(result.headers || {}).forEach(([key, value]) => res.setHeader(key, value));
  res.status(result.statusCode || 200).send(result.body || "");
};
