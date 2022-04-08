/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import WorkoutSection from ".";

describe("WorkoutSection", () => {
  let workoutSect;
  const fakeData = [
    { name: "Squats", reps: 5, sets: 5 },
    { name: "OHP", reps: 3, sets: 5 },
    { name: "Deadlift", reps: 3, sets: 1 },
  ];

  beforeEach(() => {
    render(<WorkoutSection workouts={fakeData} />);
    workoutSect = screen.getByTestId("custom-element");
  });

  it("exists", () => {
    expect(workoutSect).toBeTruthy();
  });

  it("had three children", () => {
    expect(workoutSect.childElementCount).toBe(3);
  });
});
