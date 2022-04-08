/**
 * @jest-environment jsdom
 */

import { default as History } from ".";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("History", () => {
  it("renders page", () => {
    render(
      <MemoryRouter>
        <History />
      </MemoryRouter>
    );
    let content = screen;
    expect(content).toBeTruthy();
  });
});
