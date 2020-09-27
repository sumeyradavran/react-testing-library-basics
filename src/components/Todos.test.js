import React from "react";
import Todos from "./Todos";
import { render } from "@testing-library/react";

let mockProps = {
  todos: [
    { title: "todo1", id: 1 },
    { title: "todo2", id: 2 },
  ],
};

// how can i test all todos have correct id and title
// is it a good practice to use map function again in a test component
describe("Todos", () => {
  it("renders correct title", () => {
    const { getByText } = render(<Todos {...mockProps} />);
    mockProps.todos.map((todo) => {
      expect(getByText(todo.title)).toBeInTheDocument();
    });
  });
});
