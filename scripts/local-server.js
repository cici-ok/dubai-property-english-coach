const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 8788);

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
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
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

http
  .createServer(async (req, res) => {
    try {
      if (req.method === "OPTIONS") {
        send(res, 204, "");
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
