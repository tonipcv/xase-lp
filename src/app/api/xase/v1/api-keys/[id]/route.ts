import { NextRequest, NextResponse } from "next/server";
import { removeKey } from "../../_store/keys";

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  if (!id) {
    return NextResponse.json({ error: { message: "id is required" } }, { status: 400 });
  }
  const ok = removeKey(id);
  if (!ok) {
    return NextResponse.json({ error: { message: "Not found" } }, { status: 404 });
  }
  return NextResponse.json({ id, revoked: true });
}
