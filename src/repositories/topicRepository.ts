import { prisma } from "../data/db.js";

export async function getAll(id: number) {
  const module = await prisma.module.findFirst({
    where: { id },
    include: {
      Topic: true,
    },
  });

  return module
}
