/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from ".";

describe("SetBtn", () => {
  const user = userEvent.setup();

  it("exists", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const navBar = screen.getByRole("navigation");
    expect(navBar).toBeTruthy();
  });

  describe("styles only the home icon on index route", () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <NavBar />
        </MemoryRouter>
      );
    });
    it("has a navblue home link", () => {
      const homeLink = screen.getByText(/home/i).parentElement;
      const homeClasses = [...homeLink.classList];
      expect(homeClasses).toContain("text-nl-navblue");
    });
    test.each([{ a: /history/i }, { a: /create/i }, { a: /settings/i }])(
      "test $a link",
      ({ a }) => {
        const link = screen.getByText(a).parentElement;
        const classes = [...link.classList];
        expect(classes).not.toContain("text-nl-navblue");
      }
    );
  });
  describe("styles only the history icon on index route", () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={["/history"]}>
          <NavBar />
        </MemoryRouter>
      );
    });
    it("has a navblue history link", () => {
      const activeLink = screen.getByText(/history/i).parentElement;
      const ActiveClasses = [...activeLink.classList];
      expect(ActiveClasses).toContain("text-nl-navblue");
    });
    test.each([{ a: /home/i }, { a: /create/i }, { a: /settings/i }])(
      "test $a link",
      ({ a }) => {
        const link = screen.getByText(a).parentElement;
        const classes = [...link.classList];
        expect(classes).not.toContain("text-nl-navblue");
      }
    );
  });
  describe("styles only the create icon on index route", () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={["/create"]}>
          <NavBar />
        </MemoryRouter>
      );
    });
    it("has a navblue create link", () => {
      const activeLink = screen.getByText(/create/i).parentElement;
      const ActiveClasses = [...activeLink.classList];
      expect(ActiveClasses).toContain("text-nl-navblue");
    });
    test.each([{ a: /home/i }, { a: /history/i }, { a: /settings/i }])(
      "test $a link",
      ({ a }) => {
        const link = screen.getByText(a).parentElement;
        const classes = [...link.classList];
        expect(classes).not.toContain("text-nl-navblue");
      }
    );
  });
  describe("styles only the settings icon on index route", () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={["/settings"]}>
          <NavBar />
        </MemoryRouter>
      );
    });
    it("has a navblue settings link", () => {
      const activeLink = screen.getByText(/settings/i).parentElement;
      const ActiveClasses = [...activeLink.classList];
      expect(ActiveClasses).toContain("text-nl-navblue");
    });
    test.each([{ a: /home/i }, { a: /create/i }, { a: /history/i }])(
      "test $a link",
      ({ a }) => {
        const link = screen.getByText(a).parentElement;
        const classes = [...link.classList];
        expect(classes).not.toContain("text-nl-navblue");
      }
    );
  });
});
