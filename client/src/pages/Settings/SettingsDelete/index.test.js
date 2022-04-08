/**
 * @jest-environment jsdom
 */

import { default as SettingsDelete } from ".";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("SettingsDelete", () => {
  it("renders page", () => {
    render(
      <MemoryRouter>
        <SettingsDelete />
      </MemoryRouter>
    );
    let content = screen;
    expect(content).toBeTruthy();
  });
});
