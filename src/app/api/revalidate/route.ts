import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_TOKEN)
    return NextResponse.json({ msg: "invalid secret" }, { status: 400 });
  if (!tag) return NextResponse.json({ msg: "tag not found" }, { status: 400 });
  revalidateTag(tag);
  return NextResponse.json({ revalidate: true, now: Date.now() });
}
