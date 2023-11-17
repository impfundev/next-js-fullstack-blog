import { prisma } from "./prisma";

async function posts() {
  const posts = await prisma.posts.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return { posts };
}

export default posts;
