import slugify from "slugify";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Card } from "@nextui-org/card";
import { authOptions } from "../../../lib/auth";
import posts from "../../../lib/posts";
import Update from "../../../components/Update.component";

export default async function EditPost({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerSession(authOptions);
  const allPosts = await posts();
  const post = allPosts.posts.find((post) => post.id === params.slug);
  return (
    <Card className="light">
      {session ? (
        <Update
          id={post!.id}
          title={post!.title}
          excerpt={post!.excerpt}
          content={post!.content}
          published={post!.published}
        />
      ) : (
        redirect("/api/auth/signin")
      )}
    </Card>
  );
}

export async function generateStaticParams() {
  const data = await posts();

  return data.posts.map((post) => ({
    slug: post.id,
  }));
}
