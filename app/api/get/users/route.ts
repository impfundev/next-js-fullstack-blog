import user from "../../../lib/user";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await user();

  return NextResponse.json({
    data,
  });
}
