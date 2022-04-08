/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BackSettings from ".";

describe("BackSettings", () => {
  let backLink;

  beforeEach(() => {
    render(
      <MemoryRouter>
        <BackSettings />
      </MemoryRouter>
    );
    backLink = screen.getByText(/back/i);
  });

  it("exists and contains the word back", () => {
    expect(backLink).toBeTruthy();
    expect(backLink.textContent).toMatch(/back/i);
  });
});
