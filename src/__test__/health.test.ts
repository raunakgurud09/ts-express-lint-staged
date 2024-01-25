import { app } from "../app";
import supertest from "supertest";

describe("healthcheck", () => {
  it("should work", async () => {
    const { statusCode } = await supertest(app).get("/api/v1/healthcheck");

    expect(statusCode).toBe(200);
  });
});
