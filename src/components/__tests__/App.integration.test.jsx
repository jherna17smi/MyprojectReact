// src/__tests__/App.integration.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("App integration", () => {
  test("cart count updates when product is added", async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(screen.getByText("Cart Items: 0")).toBeInTheDocument();

    const addButtons = screen.getAllByRole("button", { name: /add to cart/i });
    await user.click(addButtons[0]);

    expect(screen.getByText("Cart Items: 1")).toBeInTheDocument();
  });
});