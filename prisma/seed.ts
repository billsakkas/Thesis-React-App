const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { user } = require("./data");

const load = async () => {
  try {
    await prisma.user.create({
      data: user,
    });
    console.log("User created!");
  } catch (e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
};

export {};
