import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";


// is it ok to make a sample data like this, when i change button text for example, test will break
let mockProps = {
  text: "Fetch Todos",
  text2: "Please click button to fetch data",
  todos: [
    { title: "todo1", id: 1 },
    { title: "todo2", id: 2 },
  ],
};

describe("App", () => {
  it("renders correct", () => {
    const { getByText, getByTestId } = render(<App />);

    expect(getByText(mockProps["text"])).toBeInTheDocument();
    expect(getByText(mockProps["text2"])).toBeInTheDocument();

    fireEvent.click(getByTestId("fetch-button"));

    expect(screen.queryByText(mockProps["text2"])).toBeNull();
    expect(getByText("loading")).toBeInTheDocument();

    // how can i wait for todos list to be rendered here
  });
});
