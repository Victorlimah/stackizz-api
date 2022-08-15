import { prisma } from "../../src/data/db.js";

import { moduleFactory } from "./dataFactory.js";

export async function deleteAllData() {
  await prisma.$queryRaw`
  TRUNCATE TABLE
    users, histories,
    modules, topics,
    questions, answers
  RESTART IDENTITY CASCADE`;
}

export async function oneModule() {
  const modules = moduleFactory();
  await prisma.module.createMany({ data: modules });
}

export async function twoModules() {
  const modules = moduleFactory(2);
  await prisma.module.createMany({ data: modules });
}

export async function treeModules() {
  const modules = moduleFactory(3);
  await prisma.module.createMany({ data: modules });
}
