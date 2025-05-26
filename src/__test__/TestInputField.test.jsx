import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import TestInputField from "./component/TestInputField.jsx";

it("Finds input by placeholder value", () => {
  const value = render(<TestInputField />);
  expect(value.container).toMatchSnapshot();
  expect(screen.getByPlaceholderText(/enter data/)).toBeInTheDocument();
});

it("Finds input by its value", () => {
  render(<TestInputField />);
  expect(screen.getByDisplayValue("Hello")).toBeInTheDocument();
});
