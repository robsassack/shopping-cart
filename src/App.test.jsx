import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("render app", () => {
    const { container } = render(<App />, { wrapper: BrowserRouter });
    expect(container).toMatchSnapshot();
  });

  it("render shop page", async () => {
    render(<App />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByRole("link", { name: /Go to Shop/i }));
    expect(screen.getByRole("heading").textContent).toMatch(
      /Shop Page/i
    );
  });

  it("render item page", async () => {
    render(<App />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByRole("link", { name: /Intel Core i9-13900K/i }));
    expect(screen.getByRole("heading").textContent).toMatch(
      /Intel Core i9-13900K/i
    );
    // screen.debug();
  });
});
