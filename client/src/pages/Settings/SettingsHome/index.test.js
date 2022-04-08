/**
 * @jest-environment jsdom
 */

import { default as SettingsHome } from ".";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("SettingsHome", () => {
  it("renders page", () => {
    render(
      <MemoryRouter>
        <SettingsHome />
      </MemoryRouter>
    );
    let content = screen;
    expect(content).toBeTruthy();
  });
});
