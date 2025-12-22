import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json().catch(() => ({} as any));
  if (!email || !password) {
    return NextResponse.json(
      { error: { message: "email and password are required" } },
      { status: 400 }
    );
  }

  // NOTE: Stub implementation for dev/testing. Replace with real auth.
  // You can verify email/password here and look up a real apiKey.
  const apiKey = "xase_pk_dev_example";

  return NextResponse.json({ apiKey }, { status: 200 });
}
