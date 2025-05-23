import { it, describe, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import DisplayUserName from "./component/DisplayUserName.jsx";

describe("DisplayUserName", () => {
  it("renders userName", () => {
    render(<DisplayUserName userName={"Daniel"} />);
    const allNames = screen.getAllByText("Daniel");
    allNames.forEach((name) => expect(name).toBeInTheDocument()); // or /Daniel/ if we are concern about the regEx;
  });
});
