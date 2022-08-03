import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

import * as passUtils from "../utils/passUtils.js";
import * as userRepository from "../repositories/userRepository.js";

import { conflictError, unauthorizedError } from "../utils/errorUtils.js";

export type userData = Omit<User, "id" | "createdAt" | "score">;

export type userLoginData = {
  email: string;
  password: string;
};

export async function create(user: userData) {
  const userExists = await userRepository.search("email", user.email);
  if (userExists) throw conflictError("User already exists");

  const hashedPass = passUtils.encryptPassword(user.password);
  const newUser = await userRepository.create({
    ...user,
    password: hashedPass,
  });

  return newUser;
}

export async function login(user: userLoginData) {
  const searchedUser = await searchUserOrError("email", user.email);
  const { id, email, password } = searchedUser;

  const isValid = passUtils.decryptPassword(user.password, password);
  if (!isValid) throw unauthorizedError("User or password is incorrect");

  const data = { id, email };
  const token = jwt.sign(data, process.env.JWT_SECRET);

  return { token };
}

export async function searchUserOrError(param: string, value: string | number) {
  const user = await userRepository.search(param, value);
  if (!user) throw unauthorizedError("User not found");

  return user;
}
