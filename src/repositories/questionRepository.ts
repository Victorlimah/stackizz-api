import { prisma } from "../data/db.js";

export async function getAll(id: number) {
  const questions = await prisma.question.findMany({
    select: {
      id: true,
      name: true,
      Answer: { select: { id: true, text: true } },
    },
    where: {
      topicId: id,
    },
  });
  return questions;
}

export async function check(answerId: number) {
  const result = await prisma.answer.findFirst({
    where: {
      id: answerId,
    },
  });
  return result;
}