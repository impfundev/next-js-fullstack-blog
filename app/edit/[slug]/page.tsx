import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";
import posts from "@/app/lib/posts";
import { FormPost } from "@/app/form/FormPost";

export default async function EditPost({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerSession(authOptions);
  const allPosts = await posts();
  const post = allPosts.posts.find((post) => post.id === params.slug);
  return (
    <>
      {session ? (
        <FormPost
          type="update"
          id={post!.id}
          title={post!.title}
          excerpt={post!.excerpt}
          content={post!.content}
          published={post!.published}
        />
      ) : (
        redirect("/api/auth/signin")
      )}
    </>
  );
}

export async function generateStaticParams() {
  const data = await posts();

  return data.posts.map((post) => ({
    slug: post.id,
  }));
}
