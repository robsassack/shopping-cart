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
    expect(screen.getByRole("heading").textContent).toMatch(/Shop Page/i);
  });

  it("render item page", async () => {
    render(<App />, { wrapper: BrowserRouter });
    await userEvent.click(
      screen.getByRole("link", { name: /Intel Core i9-13900K/i })
    );
    expect(screen.getByRole("heading").textContent).toMatch(
      /Intel Core i9-13900K/i
    );
  });

  it("add item to cart", async () => {
    const { container } = render(<App />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));
    expect(container.querySelector(".cart--quantity").textContent).toContain(
      "1"
    );
    expect(container.querySelector(".cart--total").textContent).toMatch(
      "Total: $589.99"
    );
  });

  it("increase quantity of item in cart", async () => {
    const { container } = render(<App />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByRole("link", { name: /Shop/i }));
    await userEvent.click(
      screen.getByRole("link", { name: /Intel Core i9-13900K/i })
    );
    await userEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));
    await userEvent.click(screen.getByRole("button", { name: /\+/i }));
    expect(container.querySelector(".cart--quantity").textContent).toContain(
      "2"
    );
    expect(container.querySelector(".cart--total").textContent).toMatch(
      "Total: $1179.98"
    );
  });

  it("decrease quantity of item in cart", async () => {
    const { container } = render(<App />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByRole("link", { name: /Shop/i }));
    await userEvent.click(
      screen.getByRole("link", { name: /Intel Core i9-13900K/i })
    );
    await userEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));
    await userEvent.click(screen.getByRole("button", { name: /\+/i }));
    await userEvent.click(screen.getByRole("button", { name: /\-/i }));
    expect(container.querySelector(".cart--quantity").textContent).toContain(
      "1"
    );
    expect(container.querySelector(".cart--total").textContent).toMatch(
      "Total: $589.99"
    );
  });

  it("add two different items to cart", async () => {
    const { container } = render(<App />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByRole("link", { name: /Shop/i }));
    await userEvent.click(
      screen.getByRole("link", { name: /Intel Core i9-13900K/i })
    );
    await userEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));
    await userEvent.click(screen.getByRole("link", { name: /Shop/i }));
    await userEvent.click(
      screen.getByRole("link", { name: /Nvidia GeForce RTX 3090/i })
    );
    await userEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));
    expect(container.querySelector(".App--cart-link").textContent).toContain(
      "2"
    );
  });

  it("remove all items from cart", async () => {
    const { container } = render(<App />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByRole("link", { name: /Shop/i }));
    await userEvent.click(
      screen.getByRole("link", { name: /Intel Core i9-13900K/i })
    );
    await userEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));
    await userEvent.click(screen.getByRole("link", { name: /Shop/i }));
    await userEvent.click(
      screen.getByRole("link", { name: /Nvidia GeForce RTX 3090/i })
    );
    await userEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));
    const removeButtons = screen.getAllByRole("button", { name: /X/i });
    await userEvent.click(removeButtons[0]);
    await userEvent.click(removeButtons[1]);
    expect(container.querySelector(".App--cart-link").textContent).toContain(
      "0"
    );
    expect(container.querySelector(".cart--empty").textContent).toMatch(
      /Your cart is empty/i
    );
  });
});
