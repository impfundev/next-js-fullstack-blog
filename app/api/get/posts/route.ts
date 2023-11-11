import posts from "../../../../lib/posts";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await posts();

  return NextResponse.json({
    data,
  });
}
