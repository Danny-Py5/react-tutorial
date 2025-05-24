import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import App from "../App.jsx";

describe("App", () => {
  describe("when user is one", () => {
    it("should render user", () => {
      const result = render(
        <App
          usersData={[
            {
              id: 1,
              name: "Daniel Olatunde",
              userName: "Dannypy",
            },
          ]}
        />
      );
      expect(result.container).toMatchSnapshot();
    });

    // to save long (it) test description short and simple, grouped into another test suit. We know that all the tests in the suit are for edit button
    describe("Edit button is clicked", () => {
      it("Should display the update button", async () => {
        render(
          <App
            usersData={[
              {
                id: 1,
                name: "Daniel Olatunde",
                userName: "Dannypy",
              },
            ]}
          />
        );
        const editButton = screen.getByRole("button", { name: "Edit" });
        await userEvent.click(editButton);
        const saveButton = screen.getByRole("button", { name: "Update" });
        expect(saveButton).toBeInTheDocument();
      });

      // test description would have being this (should display the userName and the name input field when the edit button is clicked)
      it("should display the userName input field", async () => {
        render(
          <App
            usersData={[
              {
                id: 1,
                name: "Daniel Olatunde",
                userName: "Dannypy",
              },
            ]}
          />
        );
        const editButton = screen.getByRole("button", { name: "Edit" });
        await userEvent.click(editButton);
        expect(screen.getByLabelText("Username:")).toBeInTheDocument();
      });
    });
  });

  describe("when user is more than one", () => {
    it("renders the two users", () => {
      render(
        <App
          usersData={[
            {
              id: 1,
              name: "Daniel Olatunde",
              userName: "Dannypy",
            },
            {
              id: 2,
              name: "Kemisola Gloria",
              userName: "Gloria Daniel",
            },
          ]}
        />
      );
      expect(screen.getByText("Daniel Olatunde")).toBeInTheDocument();
      expect(screen.getByText("Gloria Daniel")).toBeInTheDocument();
    });
    it("should click edit button for the 1st user and display save button", async () => {
      render(
        <App
          usersData={[
            {
              id: 1,
              name: "Daniel Olatunde",
              userName: "Dannypy",
            },
            {
              id: 2,
              name: "Kemisola Gloria",
              userName: "Gloria Daniel",
            },
          ]}
        />
      );

      const userDetails = screen.getByTestId("user-testid-1");
      const editButton = within(userDetails).getByRole("button", {
        name: "Edit",
      });
      await userEvent.click(editButton);
      expect(
        within(userDetails).getByRole("button", { name: "Edit" })
      ).toBeInTheDocument();
      expect(
        within(userDetails).getByLabelText("Username:")
      ).toBeInTheDocument();
      expect(
        within(userDetails).queryByText("Gloria Daniel")
      ).not.toBeInTheDocument();
    });
  });
});

// my questions
/* 
tell me differences btw thing i import from vitest and from testing-react/react 

what vitest imports are for and do and also what imports from testing-library/react are for and what they do?


*/
