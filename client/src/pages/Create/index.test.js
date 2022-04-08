/**
 * @jest-environment jsdom
 */

import { default as Create } from ".";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Create", () => {
  it("renders page", () => {
    render(
      <MemoryRouter>
        <Create />
      </MemoryRouter>
    );
    let content = screen;
    expect(content).toBeTruthy();
  });
});
