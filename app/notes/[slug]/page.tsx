import slugify from "slugify";
import posts from "../../lib/posts";

export default async function Notes({ params }: { params: { slug: string } }) {
  const allPosts = await posts();
  const post = allPosts.posts.find(
    (post) => slugify(post.title).toLowerCase() === params.slug
  );
  return (
    <article className="prose xl:prose-lg">
      <h1>{post?.title}</h1>
      <p>{post?.excerpt}</p>
      <div dangerouslySetInnerHTML={{ __html: post!.content }} />
    </article>
  );
}

export async function generateStaticParams() {
  const data = await posts();

  return data.posts.map((post) => ({
    slug: slugify(post.title).toLowerCase(),
  }));
}
