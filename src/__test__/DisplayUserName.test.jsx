import { it, describe, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import DisplayUserName from "./component/DisplayUserName.jsx";

describe("DisplayUserName", () => {
  it("renders userName", () => {
    render(<DisplayUserName userName={"Daniel"} />);
    expect(screen.queryByText("Daniel Olatunde")).toBeNull();

    // queryByText and getByText works differently
    // getByText : throws an error if the text not found while the queryByText doesn't

    // the usefulness of queryByText is that we can use it to check for a text that is
    // not in the document and since it returns null, use that opportunity to expect
    // something like .not.toBeInTheDocument, .toBeNull. which allows us to expect
    // on what not in the document instead of the error that would be thrown when
    // we use getByText
  });
});
