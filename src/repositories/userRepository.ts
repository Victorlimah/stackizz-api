import { prisma } from "../data/db.js";

import { CreateUser } from './../interfaces/createData.js';

export async function search(param: string, value: string | number) {
  return prisma.user.findFirst({
    where: {
      [param]: value,
    },
  });
}

export async function create(user: CreateUser) {
  return prisma.user.create({
    data: {
      ...user,
    },
  });
}

export async function update(userId: number, data: any) {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      ...data,
    },
  });
}

export async function getRanking() {
  return prisma.user.findMany({
    orderBy: {
      score: "desc",
    },
  });
}
