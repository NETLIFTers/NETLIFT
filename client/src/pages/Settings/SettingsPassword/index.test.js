/**
 * @jest-environment jsdom
 */

import { default as SettingsPassword } from ".";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("SettingsPassword", () => {
  it("renders page", () => {
    render(
      <MemoryRouter>
        <SettingsPassword />
      </MemoryRouter>
    );
    let content = screen;
    expect(content).toBeTruthy();
  });
});
