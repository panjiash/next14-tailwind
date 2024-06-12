import { getAllData } from "@/lib/mysql/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const datas = await getAllData();
  return NextResponse.json(
    {
      msg: "sukses",
      data: datas,
    },
    {
      status: 200,
    }
  );
}
