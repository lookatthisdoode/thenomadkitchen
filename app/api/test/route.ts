// import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(req: NextRequest) {
  return NextResponse.redirect(`http://${req.url.split("/")[2]}/menu`);
  // return NextResponse.json({ hello: "world" });
}

export async function POST(req: NextRequest, context: any) {
  const data = await req.json();
  console.log(data);
  const modifiedData = { ...data, name: "Andrei" };

  return NextResponse.json(modifiedData);
}
