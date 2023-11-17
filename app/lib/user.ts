import { prisma } from "./prisma";

async function user() {
  const user = await prisma.user.findMany();
  return { user };
}

export default user;
