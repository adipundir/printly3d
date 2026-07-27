/**
 * Vercel Node-function adapter.
 *
 * We do NOT use @hono/node-server/vercel here: Vercel's Node runtime pre-parses the request
 * body and consumes the stream, so an adapter that re-reads the raw stream hangs (observed as
 * FUNCTION_INVOCATION_TIMEOUT on POST). Instead we read Vercel's already-parsed `req.body`,
 * rebuild a standard Request, and dispatch through Hono's `app.fetch`.
 */
import { app } from "./app.js";

export default async function handler(req: any, res: any) {
  try {
    const proto = (req.headers["x-forwarded-proto"] as string) || "https";
    const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
    const url = `${proto}://${host}${req.url}`;

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (typeof v === "string") headers.set(k, v);
      else if (Array.isArray(v)) headers.set(k, v.join(", "));
    }

    let body: string | undefined;
    if (req.method && req.method !== "GET" && req.method !== "HEAD") {
      if (req.body !== undefined && req.body !== null) {
        body = typeof req.body === "string" ? req.body : JSON.stringify(req.body);
        if (!headers.has("content-type")) headers.set("content-type", "application/json");
      }
    }

    const request = new Request(url, { method: req.method, headers, body });
    const response = await app.fetch(request);

    res.statusCode = response.status;
    response.headers.forEach((val: string, key: string) => res.setHeader(key, val));
    const ab = await response.arrayBuffer();
    res.end(Buffer.from(ab));
  } catch (err: any) {
    res.statusCode = 500;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ ok: false, error: `handler error: ${err?.message ?? err}` }));
  }
}
