import { prisma } from "../data/db.js";

export async function getAll() {
  const modules = await prisma.module.findMany();
  return modules;
}
