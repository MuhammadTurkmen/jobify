const { PrismaClient } = require("@prisma/client");
const data = require("./MOCK_DATA.json");
const prisma = new PrismaClient();

async function main() {
  const clerkId = "user_35lyqAzOxr1L3ZYu9RSYyBqYnuf";
  const jobs = data.map((job) => {
    return {
      ...job,
      clerkId,
    };
  });
  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
