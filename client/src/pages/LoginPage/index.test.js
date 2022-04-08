/**
 * @jest-environment jsdom
 */

import { default as LoginPage } from ".";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("LoginPage", () => {
  it("renders page", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    let content = screen;
    expect(content).toBeTruthy();
  });
});
