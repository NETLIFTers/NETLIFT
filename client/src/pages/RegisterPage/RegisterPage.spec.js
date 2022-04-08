/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import RegisterPage from ".";
import { Provider } from "react-redux";
import store from "../../store";
import { MemoryRouter } from "react-router-dom";

describe("RegisterPage", () => {
  let registerPage;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterPage reps={2} />
        </MemoryRouter>
      </Provider>
    );
    registerPage = screen.getByTestId("reg form");
  });

  it("exists", () => {
    expect(registerPage).toBeTruthy();
  });
});
