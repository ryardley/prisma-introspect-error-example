import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function seed() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
      id: "1",
      email: "hello@world.com",
      name: "Hello",
      posts: {
        create: {
          id: "1",
          title: "My FIrst post",
          content: "This is the post content",
          published: true,
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      id: "2",
      email: "goodbye@world.com",
      name: "Goodbye",
      posts: {
        create: {
          id: "2",
          title: "My Second Thing",
          content: "This is the post content",
          published: true,
        },
      },
    },
  });

  await prisma.post.update({
    where: { id: "1" },
    data: {
      tags: {
        create: [
          { id: "1", label: "React" },
          { id: "2", label: "TypeScript" },
        ],
      },
    },
  });
}

seed()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
