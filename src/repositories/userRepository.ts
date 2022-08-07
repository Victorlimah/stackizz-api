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
