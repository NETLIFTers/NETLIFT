/**
 * @jest-environment jsdom
 */

import { default as SettingsUnit } from ".";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("SettingsUnit", () => {
  it("renders page", () => {
    render(
      <MemoryRouter>
        <SettingsUnit />
      </MemoryRouter>
    );
    let content = screen;
    expect(content).toBeTruthy();
  });
});
