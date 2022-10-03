import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const { user } = require("./data");

const main = async () => {
  await prisma.user.upsert({
    where: { email: user.email },
    update: {},
    create: user,
  });
};

main()
  .then(async () => {
    console.log("Success!!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
