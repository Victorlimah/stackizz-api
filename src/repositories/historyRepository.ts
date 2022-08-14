import { prisma } from "../data/db.js";

import { CreateHistory } from "../interfaces/createData";

export async function createHistory(data: CreateHistory) {
  return prisma.history.create({
    data: {
      ...data,
    },
  });
}

export async function updateHistory(historyId: number, score: number) {
  return prisma.history.update({
    where: {
      id: historyId,
    },
    data: {
      score,
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
