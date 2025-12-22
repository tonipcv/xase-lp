import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json().catch(() => ({} as any));
  if (!email || !password) {
    return NextResponse.json(
      { error: { message: "email and password are required" } },
      { status: 400 }
    );
  }

  // Stub for CLI-only testing. Replace with real auth integration as needed.
  const apiKey = "xase_pk_dev_example";

  return NextResponse.json({ apiKey }, { status: 200 });
}
