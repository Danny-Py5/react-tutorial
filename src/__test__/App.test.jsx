import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import App from "../App.jsx";

describe("App", () => {
  it("should render user", () => {
    const result = render(<App />);
    expect(result.container).toMatchSnapshot();
  });

  // to save long (it) test description short and simple, grouped into another test suit. We know that all the tests in the suit are for edit button
  describe("Edit button is clicked", () => {
    it("Should display the update button", async () => {
      render(<App />);
      const editButton = screen.getByRole("button", { name: "Edit" });
      await userEvent.click(editButton);
      const saveButton = screen.getByRole("button", { name: "Update" });
      expect(saveButton).toBeInTheDocument();
    });

    // test description would have being this (should display the userName and the name input field when the edit button is clicked)
    it("should display the userName input field", async () => {
      render(<App />);
      const editButton = screen.getByRole("button", { name: "Edit" });
      await userEvent.click(editButton);
      const userNameInput = screen.getByRole("textbox", { name: "username" });
      expect(userNameInput).toBeInTheDocument();
    });
  });
});

// my questions
/* 
tell me differences btw thing i import from vitest and from testing-react/react 

what vitest imports are for and do and also what imports from testing-library/react are for and what they do?


*/
