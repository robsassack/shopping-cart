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
});
