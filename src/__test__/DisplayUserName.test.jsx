import { it, describe, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import DisplayUserName from "./component/DisplayUserName.jsx";

describe("DisplayUserName", () => {
  it("renders userName", () => {
    const result = render(<DisplayUserName userName={"Daniel"} />);
    expect(result.container).toMatchSnapshot();
  });
});
