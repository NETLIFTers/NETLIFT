/**
 * @jest-environment jsdom
 */

import { default as SettingsUsername } from ".";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("SettingsUsername", () => {
  it("renders page", () => {
    render(
      <MemoryRouter>
        <SettingsUsername />
      </MemoryRouter>
    );
    let content = screen;
    expect(content).toBeTruthy();
  });
});
