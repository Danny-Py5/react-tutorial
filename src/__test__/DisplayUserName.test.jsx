import { it, describe, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import DisplayUserName from "./component/DisplayUserName.jsx";

describe("DisplayUserName", () => {
  it("renders userName", async () => {
    render(<DisplayUserName userName={"Daniel"} />);
    expect(
      await screen.findByText("Daniel", {}, { timeout: 6000 }) // the timeout means to quit(throw error) if it takes longer than 6s to load i.e to find the "Daniel" text. Meanwhile, the testTimeOut set in the vite.config.js should be greater than or equal to the 6s else it fails (quit, throw err). Technically speaking, the findByText is an asynchronous code.
    ).toBeInTheDocument();
  });
});

// continue from 8:05
