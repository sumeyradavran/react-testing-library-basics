import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

let mockProps = {
  text: "fetch"
};
// is it a neccessity to test button style
describe("Button", () => {
  it("renders correct name", () => {
    const { getByText } = render(<Button {...mockProps} />);
    getByText(mockProps["text"]);
  });
  it("calls on click function one time", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick} {...mockProps} />);
    fireEvent.click(getByText(mockProps["text"]));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
