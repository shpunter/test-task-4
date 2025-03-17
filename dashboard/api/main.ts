import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import data from "./data.json" with { type: "json" };

const app = new Hono();

app.use(
  "/api/*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Origin", "Content-Type", "Authorization"],
    exposeHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    maxAge: 600,
  }),
);

app.get("/", (c) => {
  return c.text("Welcome!");
});

app.get("/api/items/", async (c) => {
  await new Promise(r => setTimeout(r, 1000));

  return c.json(data);
});

app.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});

Deno.serve(app.fetch);
