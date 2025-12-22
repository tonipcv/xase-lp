import { NextResponse } from "next/server";

// DEV stub: returns a static list of tenants for the current user/session
export async function GET() {
  return NextResponse.json({
    data: [
      { id: "tenant_default", name: "Default Tenant" },
      { id: "tenant_demo", name: "Demo Tenant" }
    ]
  });
}
