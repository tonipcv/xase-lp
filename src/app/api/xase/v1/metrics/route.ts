import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const apiKey = req.headers.get("x-api-key");
  if (!apiKey) {
    return NextResponse.json({ error: { message: "Missing API key" } }, { status: 401 });
  }
  const url = new URL(req.url);
  const period = url.searchParams.get("period") ?? "week";
  return NextResponse.json({ ok: true, period });
}
