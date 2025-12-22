import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const apiKey = req.headers.get("x-api-key");
  if (!apiKey) {
    return NextResponse.json({ error: { message: "Missing API key" } }, { status: 401 });
  }
  return NextResponse.json({ data: [], total: 0, hasMore: false });
}

export async function POST(req: Request) {
  const apiKey = req.headers.get("x-api-key");
  if (!apiKey) {
    return NextResponse.json({ error: { message: "Missing API key" } }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({ id: "rec_123", ...body }, { status: 201 });
}
