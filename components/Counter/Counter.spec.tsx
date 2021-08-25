import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import { Counter } from "./Counter";

describe("Counter", () => {
  describe('initialize with `defaultCount = 0` & `description = "My Counter"`', () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} description="My Counter" />);
    });

    it("renders `Current Count: 0`", () => {
      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    });

    it("renders description as `My Counter`", () => {
      expect(screen.getByText(/My Counter/)).toBeInTheDocument();
    });
  });

  describe('initialize with `defaultCount = 10` & `description = "WWW"`', () => {
    beforeEach(() => {
      render(<Counter defaultCount={10} description="WWW" />);
    });

    it("renders `Current Count: 10`", () => {
      expect(screen.getByText("Current Count: 10")).toBeInTheDocument();
    });

    it("renders description as `WWW`", () => {
      expect(screen.getByText(/WWW/)).toBeInTheDocument();
    });

    describe("When the incrementor changes to 5 and `+` button is clicked", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
        user.click(screen.getByRole("button", { name: "Increment Counter" }));
      });

      it("renders `Current Count: 15`", () => {
        expect(screen.getByText("Current Count: 15")).toBeInTheDocument();
      });
    });

    describe("When the incrementor changes to 25 and `-` button is clicked", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}25");
        user.click(screen.getByRole("button", { name: "Decrement Counter" }));
      });

      it("renders `Current Count: -15`", () => {
        expect(screen.getByText("Current Count: -15")).toBeInTheDocument();
      });
    });
  });
});
