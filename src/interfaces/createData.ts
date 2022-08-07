import { 
  User,
  Module,
  Topic,
  Question,
  Answer,
  History,
} from "@prisma/client";

export type CreateUser = Omit<User, "id" | "createdAt" | "score">;
export type CreateModule = Omit<Module, "id">;
export type CreateTopic = Omit<Topic, "id">;
export type CreateQuestion = Omit<Question, "id">;
export type CreateAnswer = Omit<Answer, "id">;
export type CreateHistory = Omit<History, "id" | "createdAt">;
