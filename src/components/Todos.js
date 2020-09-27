import React from "react";
import styled from "styled-components";

const Todo = styled.div`
  margin: 15px;
  padding: 6px 8px;
  background-color: #8d93ab;
`;

export default function Todos({ todos }) {
  return todos.map((todo) => {
    return <Todo key={todo.id}>{todo.title}</Todo>;
  });
}
