/**
 * @jest-environment jsdom
 */

import { default as WorkoutPage } from ".";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("WorkoutPage", () => {
  it("renders page", () => {
    render(
      <MemoryRouter>
        <WorkoutPage />
      </MemoryRouter>
    );
    let content = screen;
    expect(content).toBeTruthy();
  });
});
