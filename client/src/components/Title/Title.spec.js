/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Title from ".";

describe("Title", () => {
  let title;
  const fakeData = [
    { name: "Squats", reps: 5, sets: 5 },
    { name: "OHP", reps: 3, sets: 5 },
    { name: "Deadlift", reps: 3, sets: 1 },
  ];

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Title text={"Edward"} />
      </MemoryRouter>
    );
    title = screen.getByRole("banner");
  });

  it("exists", () => {
    expect(title).toBeTruthy();
  });
  it("contains a h1 element with the text Edward in", () => {
    expect(screen.getByRole("heading").textContent).toBe("Edward");
  });
});
