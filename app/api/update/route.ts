import { getServerSession } from "next-auth";
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  try {
    const { id, title, excerpt, content, published } = (await req.json()) as {
      id: string;
      title: string;
      excerpt: string;
      content: string;
      published: boolean;
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

    const posts = await prisma.posts.update({
      where: {
        id: id,
      },
      data: {
        id,
        title,
        excerpt,
        content,
        published,
        author: {
          connect: {
            email: session!.user!.email,
          },
        },
      },
    });

    return NextResponse.json({
      posts: {
        id: posts.id,
        title: posts.title,
        excerpt: posts.excerpt,
        content: posts.content,
        published: posts.published,
        author: session?.user?.name,
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
