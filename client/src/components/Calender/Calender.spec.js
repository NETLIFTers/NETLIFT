/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import Calendar from ".";

describe("Calendar", () => {
  let calendar;

  beforeEach(() => {
    render(<Calendar />);
    calendar = screen.getByTestId("calender element");
  });

  it("exists", () => {
    expect(calendar).toBeTruthy();
  });
});
