/**
 * @jest-environment jsdom
 */

import { default as SettingsLogout } from ".";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("SettingsLogout", () => {
  it("renders page", () => {
    render(
      <MemoryRouter>
        <SettingsLogout />
      </MemoryRouter>
    );
    let content = screen;
    expect(content).toBeTruthy();
  });
});
