/**
 * @jest-environment jsdom
 */

import WorkoutCreate from ".";
import { screen, render } from "@testing-library/react";

describe("WorkoutCreate", () => {
  it("renders create workout form", () => {
    render(<WorkoutCreate />);
    let content = screen;
    expect(content).toBeTruthy();
  })

})
