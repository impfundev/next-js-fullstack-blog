import Card from "./components/Card.component";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import posts from "./lib/posts";
import slugify from "slugify";

export default async function Home() {
  const dataPosts = await posts();
  const session = await getServerSession(authOptions);
  const currentUser = session?.user!.name;
  return (
    <div className="w-[80vw] grid md:grid-cols-3 gap-6">
      {session
        ? dataPosts.posts
            .filter((post) => post.author?.name === currentUser)
            .map((post) => {
              const author = post.author!.name!;
              const image = post.image!;
              const { title, excerpt, id } = post;
              const slug = slugify(title).toLowerCase();
              return (
                <Card
                  key={id}
                  id={id}
                  author={author}
                  title={title}
                  excerpt={excerpt}
                  image={image}
                  slug={slug}
                />
              );
            })
        : dataPosts.posts.map((post) => {
            const author = post.author!.name!;
            const image = post.image!;
            const { title, excerpt, id } = post;
            const slug = slugify(title).toLowerCase();
            return (
              <Card
                key={id}
                id={id}
                author={author}
                title={title}
                excerpt={excerpt}
                image={image}
                slug={slug}
              />
            );
          })}
    </div>
  );
}
