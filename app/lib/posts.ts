import { prisma } from "./prisma";

async function posts() {
  const posts = await prisma.posts.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return { posts };
}

export default posts;
