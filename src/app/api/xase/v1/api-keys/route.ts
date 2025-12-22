import { NextResponse } from "next/server";
import { addKey, listKeys } from "../_store/keys";

// List API keys
export async function GET() {
  return NextResponse.json({ data: listKeys() });
}

// DEV stub for creating API keys scoped to a tenant/project/env with optional scopes and ttl
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({} as any));
  const { tenant, project, environment, scopes, ttl } = body || {};

  if (!tenant) {
    return NextResponse.json(
      { error: { message: "tenant is required" } },
      { status: 400 }
    );
  }

  // Generate a fake key; replace with real key minting in production
  const apiKey = `xase_pk_${Math.random().toString(36).slice(2, 10)}_${Date.now()}`;

  const item = {
    id: `key_${Math.random().toString(36).slice(2, 8)}`,
    apiKey,
    tenant,
    project: project || null,
    environment: environment || null,
    scopes: Array.isArray(scopes) ? scopes : [],
    ttl: ttl || null,
    createdAt: new Date().toISOString(),
  };

  addKey(item);
  return NextResponse.json(item);
}
