import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import posts from "@/app/lib/posts";

import CardPost from "@/app/components/Card";
import Button from "@mui/joy/Button";

export default async function Posts() {
  const data = await posts();
  const session = await getServerSession(authOptions);
  const currentUser = session!.user!.name;
  return (
    <div className="flex flex-col gap-10 p-10">
      <h1 className="text-3xl font-bold">Posts</h1>
      <div>
        <Button size="sm">Create Post</Button>
      </div>
      <div className="w-full h-[50vh] grid grid-cols-3 gap-5">
        {data.posts
          .filter((post) => post.author!.name! === currentUser)
          .map((post) => {
            return (
              <CardPost
                key={post.id}
                id={post.id}
                author={post.author!.name!}
                title={post.title}
                excerpt={post.excerpt}
                published={post.published}
              />
            );
          })}
      </div>
    </div>
  );
}
