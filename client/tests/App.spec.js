/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store";
import App from "../src/App";

describe("WorkoutSection", () => {
  let app;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    app = screen.getByTestId("test-app");
  });

  it("exists", () => {
    expect(app).toBeTruthy();
  });
});
