// src/components/__tests__/ProductCard.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../ProductCard";

describe("ProductCard", () => {
  const mockProduct = {
    id: 1,
    title: "Running Shoes",
    price: 59.99
  };

  test("renders product title and price", () => {
    render(<ProductCard product={mockProduct} onAddToCart={jest.fn()} />);

    expect(screen.getByText("Running Shoes")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();
  });

  test("calls onAddToCart when button is clicked", async () => {
    const user = userEvent.setup();
    const mockAddToCart = jest.fn();

    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);

    await user.click(screen.getByRole("button", { name: /add to cart/i }));

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});