import React from "react";
import Loading from "./Loading";
import { render } from "@testing-library/react";

let mockProps = {
  text: "Loading",
};

describe("Loading", () => {
  it("renders correct text", () => {
    const { getByText } = render(<Loading {...mockProps} />);
    getByText(mockProps["text"]);
  });
});
