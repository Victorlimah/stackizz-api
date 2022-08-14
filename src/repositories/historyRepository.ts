import { prisma } from "../data/db.js";

import { CreateHistory } from "../interfaces/createData";

export async function createHistory(data: CreateHistory) {
  return prisma.history.create({
    data: {
      ...data,
    },
  });
}

export async function getHistory(userId: number) {
  return await prisma.history.findMany({
    select: {
      id: true,
      score: true,
      topic: {
        select: {
          name: true,
        },
      },
      createdAt: true,
    },
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function searchHistory(userId: number, topicId: number) {
  return prisma.history.findFirst({
    where: {
      userId,
      topicId,
    },
  });
}
