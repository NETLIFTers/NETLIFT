/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import SetBtn from ".";

describe("SetBtn", () => {
  let setBtn;
  const user = userEvent.setup();

  beforeEach(() => {
    render(<SetBtn reps={2} />);
    setBtn = screen.getByRole("button");
  });

  it("renders a button", () => {
    expect(setBtn).toBeTruthy();
  });

  it("displays 5", () => {
    expect(setBtn.textContent).toBe("2");
  });

  it("changes colour when clicked", async () => {
    const classList = setBtn.classList;
    let initColour = [...classList].find((value) => /bg/.test(value));

    await user.click(setBtn);

    let clickedColour = [...classList].find((value) => /bg/.test(value));

    expect(clickedColour).not.toBe(initColour);
  });

  it("doesn't change the reps when clicked once", async () => {
    await user.click(setBtn);

    expect(setBtn.textContent).toBe("2");
  });

  it("changes the reps when clicked twice", async () => {
    await user.click(setBtn);
    await user.click(setBtn);

    expect(setBtn.textContent).not.toBe("2");
  });

  it("resets after being clicked 3 times", async () => {
    const classList = setBtn.classList;
    let initColour = [...classList].find((value) => /bg/.test(value));

    await user.click(setBtn);
    await user.click(setBtn);
    await user.click(setBtn);

    let currentColour = [...classList].find((value) => /bg/.test(value));

    expect(setBtn.textContent).toBe("2");
    expect(currentColour).toBe(initColour);
  });
});
