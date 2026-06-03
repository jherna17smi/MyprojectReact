// src/components/__tests__/QuantitySelector.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { default as QuantitySelector } from "../QuantitySelector.js";

describe("QuantitySelector", () => {
  test("renders with initial quantity", () => {
    render(<QuantitySelector />);
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
  });

  test("increases quantity when Increase is clicked", async () => {
    const user = userEvent.setup();

    render(<QuantitySelector />);
    await act(async () => {
      await user.click(screen.getByRole("button", { name: /increase/i }));
    });

    expect(await screen.findByText("Quantity: 2")).toBeInTheDocument();
  });
});