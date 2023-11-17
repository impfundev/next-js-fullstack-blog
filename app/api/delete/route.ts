import { getServerSession } from "next-auth";
import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  try {
    const { id } = (await req.json()) as {
      id: string;
    };

    if (typeof session!.user!.email !== "string") {
      // Handle the case where email is not a string
      // This could be returning an error response or a default value
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: "Email is not a string",
        }),
        { status: 500 }
      );
    }

    const posts = await prisma.posts.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      posts: {
        id: posts.id,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
