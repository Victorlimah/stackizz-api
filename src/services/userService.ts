import jwt from "jsonwebtoken";

import { CreateUser } from "../interfaces/createData.js";

import * as passUtils from "../utils/passUtils.js";
import * as userRepository from "../repositories/userRepository.js";

import { conflictError, unauthorizedError } from "../utils/errorUtils.js";


export type userLoginData = {
  email: string;
  password: string;
};

export async function create(user: CreateUser) {
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
  const { id, name, password } = searchedUser;

  const isValid = passUtils.decryptPassword(user.password, password);
  if (!isValid) throw unauthorizedError("User or password is incorrect");

  const data = { id, name };
  const token = jwt.sign(data, process.env.JWT_SECRET);

  return { token };
}

export async function searchUserOrError(param: string, value: string | number) {
  const user = await userRepository.search(param, value);
  if (!user) throw unauthorizedError("User not found");

  return user;
}

export async function updateScore(userId: number, score: number) {
  const user = await userRepository.search("id", userId);
  if (!user) throw unauthorizedError("User not found");

  const newScore = user.score + score;
  const updatedUser = await userRepository.update(userId, { score: newScore });

  return updatedUser;
}

