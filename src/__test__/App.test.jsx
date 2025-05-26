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

    it("Edits 2nd username and save", async () => {
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
      const userDetails2 = screen.getByTestId("user-testid-2");

      await userEvent.click(
        within(userDetails2).getByRole("button", {
          name: "Edit",
        })
      );
      const usernameInput = within(userDetails2).getByRole("textbox", {
        name: "username",
      });

      expect(
        within(userDetails2).getByLabelText("Username:")
      ).toBeInTheDocument();
      expect(
        within(userDetails2).queryByText("Gloria Daniel")
      ).not.toBeInTheDocument();
      expect(usernameInput.value).not.toBeUndefined();
      expect(usernameInput.value).toEqual("Gloria Daniel");

      await userEvent.type(
        within(userDetails2).getByLabelText("Username:"),
        "123"
      );
      await userEvent.click(
        within(userDetails2).getByRole("button", { name: "Update" })
      );

      expect(
        within(userDetails2).queryByRole("button", { name: "Update" })
      ).not.toBeInTheDocument();
      expect(usernameInput).not.toBeInTheDocument();

      expect(
        within(userDetails2).getByText("Gloria Daniel123")
      ).toBeInTheDocument();
    });
  });
});

describe("Update UserContext", () => {
  it("Updates display name", async () => {
    // changing the name across all other component under the context provider
    render(<App usersData={[]} />);

    await userEvent.type(
      screen.getByLabelText("Change LayerName:"),
      "name updated"
    );
    await userEvent.click(screen.getByRole("button", { name: "Change" }));

    expect(screen.getByText("Name: name updated")).toBeInTheDocument();
  });
});

// my questions
/* 
tell me differences btw thing i import from vitest and from testing-react/react 

what vitest imports are for and do and also what imports from testing-library/react are for and what they do?

// 9:19

*/
