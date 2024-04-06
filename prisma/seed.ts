import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "f3978067-77d8-433d-af70-f43c10eb539d",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento p/ devs apaixonados(as) por código!",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Seeding complete! 🌱");
  prisma.$disconnect();
});
