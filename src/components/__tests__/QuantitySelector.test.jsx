// src/components/__tests__/QuantitySelector.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { default as QuantitySelector } from "../QuantitySelector.js";

describe("QuantitySelector", () => {
  test("renders with initial quantity", () => {
    render(<QuantitySelector />);
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
  });

  test("increases quantity when Increase is clicked", async () => {
    const user = userEvent.setup();

    render(<QuantitySelector />);
    await user.click(screen.getByRole("button", { name: /increase/i }));

    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
  });
});