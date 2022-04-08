/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import Form from ".";

describe("Form", () => {
  let form;
  const props = {
    text: "btn text",
    inputs: [{ text: "test input 1" }, { text: "test input 2" }],
    handleSubmit: jest.fn(),
  };
  beforeEach(() => {
    render(<Form {...props} />);
    form = screen.getByRole("form");
  });

  it("exists", () => {
    expect(form).toBeTruthy();
  });

  it("has three children", () => {
    expect(form.childElementCount).toBe(3);
  });
});
