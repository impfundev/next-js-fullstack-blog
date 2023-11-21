import Card from "@/app/components/Card";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import posts from "@/app/lib/posts";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const dataPosts = await posts();
  const session = await getServerSession(authOptions);
  const currentUser = session?.user!.name;
  return (
    <div className="w-[80vw] flex flex-col gap-6 items-center">
      {session
        ? dataPosts.posts
            .filter((post) => post.author?.name === currentUser)
            .map((post) => {
              const author = post.author!.name!;
              const { title, excerpt, id, published } = post;
              return (
                <Card
                  key={id}
                  id={id}
                  author={author}
                  title={title}
                  excerpt={excerpt}
                  published={published}
                />
              );
            })
        : redirect("/auth")}
    </div>
  );
}
