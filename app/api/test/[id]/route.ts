import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, context: any) {
  const { params } = context;
  // const data = await req.json();
  console.log(params);

  return NextResponse.json({ hello: "world" });
}
