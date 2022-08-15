import { jest } from "@jest/globals";

import app from "../src/index.js";
import supertest from "supertest";

import { prisma } from "../src/data/db.js";

import * as dataFactory from "./factories/dataFactory.js";
import * as scenario from "./factories/scenarioFactory.js";

beforeEach(async () => {
  await scenario.deleteAllData();
});

const agent = supertest.agent(app);

describe("🌱 ~ POST /signup", () => {
  it("✨ 201 ~ Sucess create a new account - CREATED", async () => {});

  it("✨ 409 ~ Fail create a new account - CONFLICT", async () => {});

  it("✨ 422 ~ Fail create a new account - UNPROCESSABLE", async () => {});
});

describe("🌱 ~ POST /signin", () => {
  it("✨ 201 ~ Sucess login - OK", async () => {});

  it("✨ 401 ~ Fail login account unexist - UNAUTHORIZED", async () => {});

  it("✨ 401 ~ Fail login invalid credentials - UNAUTHORIZED", async () => {});
});

describe("🌱 ~ GET ALL DATA", () => {
  describe("🌱 ~ GET /modules", () => {
    it("✨ 200 ~ Sucess getAll modules with 0 modules - OK", async () => {});

    it("✨ 200 ~ Sucess getAll modules with 3 modules - OK", async () => {});
  });

  describe("🌱 ~ GET /topics", () => {
    it("✨ 200 ~ Sucess getAll topics with 0 topics - OK", async () => {});

    it("✨ 200 ~ Sucess getAll topics with 3 topics - OK", async () => {});
  });

  describe("🌱 ~ GET /questions", () => {
    it("✨ 200 ~ Sucess getAll questions with 0 questions - OK", async () => {});

    it("✨ 200 ~ Sucess getAll questions with 3 questions - OK", async () => {});
  });

  describe("🌱 ~ GET /ranking", () => {
    it("✨ 200 ~ Sucess getAll ranking with 0 ranking - OK", async () => {});

    it("✨ 200 ~ Sucess getAll ranking with 3 ranking - OK", async () => {});
  });

  describe("🌱 ~ GET /history", () => {
    it("✨ 200 ~ Sucess getAll history with 2 history - OK", async () => {});
  
    it("✨ 200 ~ Sucess getAll history with 5 history - OK", async () => {});
  });
});

describe("🌱 ~ POST /user/score", () => {
  it("✨ 200 ~ Sucess update score to 50 - CREATED", async () => {});

  it("✨ 200 ~ Sucess update score to 100 - CREATED", async () => {});

  it("✨ 200 ~ Sucess update score to 150 - CREATED", async () => {});
});

