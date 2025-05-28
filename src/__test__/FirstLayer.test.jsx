import { render, screen } from "@testing-library/react";
import { layerContext } from "../contextAPI/context/LayerContext.js";
import FirstLayer from "../contextAPI/FirstLayer.jsx";
import { it, describe, expect } from "vitest";

describe("Render Context values", () => {
  it("should display correct username", () => {
    const layerData = {
      id: 2323,
      name: "daniel",
      username: "dannypy",
      email: "daniel@gmail.com",
    };
    const { container } = render(
      <layerContext.Provider value={{ layerData }}>
        <FirstLayer />
      </layerContext.Provider>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Name: daniel"));
  });
});
