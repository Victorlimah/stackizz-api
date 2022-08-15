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
  it("✨ 201 ~ Sucess create a new account - CREATED", async () => {
    const user = dataFactory.userFactory();

    const response = await agent.post("/auth/signup").send(user);
    expect(response.status).toBe(201);
  });

  it("✨ 409 ~ Fail create a new account - CONFLICT", async () => {
    const user = dataFactory.userFactory();

    const response = await agent.post("/auth/signup").send(user);
    expect(response.status).toBe(201);

    const duplicate = await agent.post("/auth/signup").send(user);
    expect(duplicate.status).toBe(409);
  });

  it("✨ 422 ~ Fail create a new account - UNPROCESSABLE", async () => {
    const user = {};

    const response = await agent.post("/auth/signup").send(user);
    expect(response.status).toBe(422);
  });
});

describe("🌱 ~ POST /signin", () => {
  it("✨ 200 ~ Sucess login - OK", async () => {
    const user = dataFactory.userFactory();

    const response = await agent.post("/auth/signup").send(user);
    expect(response.status).toBe(201);

    const userLogin = {
      email: user.email,
      password: user.password,
    };

    const login = await agent.post("/auth/signin").send(userLogin);
    expect(login.status).toBe(200);
    expect(login.body).toHaveProperty("token");
  });

  it("✨ 401 ~ Fail login account unexist - UNAUTHORIZED", async () => {
    const user = dataFactory.userFactory();

    const userLogin = {
      email: user.email,
      password: user.password,
    };

    const login = await agent.post("/auth/signin").send(userLogin);
    expect(login.status).toBe(401);
  });

  it("✨ 401 ~ Fail login invalid credentials - UNAUTHORIZED", async () => {
    const user = dataFactory.userFactory();
    const response = await agent.post("/auth/signup").send(user);
    expect(response.status).toBe(201);

    const userLogin = {
      email: user.email,
      password: "password",
    };

    const login = await agent.post("/auth/signin").send(userLogin);
    expect(login.status).toBe(401);
  });
});

describe("🌱 ~ GET ALL DATA", () => {
  describe("🌱 ~ GET /modules", () => {
    it("✨ 404 ~ Sucess getAll modules with 0 modules - OK", async () => {
      const token = await scenario.adminAccountAndReturnToken();
      const response = await agent
        .get("/modules")
        .set("Authorization", `Bearer ${token}`);
      expect(response.status).toBe(404);
      expect(response.body.message).toBe("No modules found");
    });

    it("✨ 200 ~ Sucess getAll modules with 3 modules - OK", async () => {
      await scenario.treeModules();
      const token = await scenario.adminAccountAndReturnToken();
      const response = await agent
        .get("/modules")
        .set("Authorization", `Bearer ${token}`);
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(3);
    });
  });

  describe("🌱 ~ GET /topics", () => {
    it("✨ 404 ~ Sucess getAll topics with 0 topics - OK", async () => {
      const token = await scenario.adminAccountAndReturnToken();
      const response = await agent
        .get("/topic/1")
        .set("Authorization", `Bearer ${token}`);
      expect(response.status).toBe(404);
      expect(response.body.message).toBe("No topic found");
    });

    it("✨ 200 ~ Sucess getAll topics with 3 topics - OK", async () => {
      await scenario.treeModulesAndTreeTopics();
      const token = await scenario.adminAccountAndReturnToken();
      const response = await agent
        .get("/topic/1")
        .set("Authorization", `Bearer ${token}`);
      expect(response.status).toBe(200);
      expect(response.body.Topic.length).toBe(3);
    });
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
