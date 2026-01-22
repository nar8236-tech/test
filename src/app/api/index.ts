// src/app/api/index.ts
export default function handler(req: Request) {
  return new Response(JSON.stringify({ message: "API placeholder" }), {
    headers: { "Content-Type": "application/json" },
  });
}
