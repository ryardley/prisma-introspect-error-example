import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const users = await prisma.user.findMany({
    include: { posts: { include: { tags: true } } },
  });
  const posts = await prisma.post.findMany();
  const tags = await prisma.tag.findMany();
  console.log(JSON.stringify(users, null, 2));
  console.log(JSON.stringify(posts, null, 2));
  console.log(JSON.stringify(tags, null, 2));
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
