import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, afterAll } from "vitest";
import "@testing-library/jest-dom/vitest";
import { server } from "./src/__mocks__/msv/sever.js";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  cleanup();
});

afterAll(() => {
  server.close();
});
