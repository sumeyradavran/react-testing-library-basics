import Axios from "axios";
import React from "react";
import Button from "./Button";

export default function Fetch({ getFetchedTodos, changeFetchState }) {
  const fetchTodos = async () => {
    changeFetchState("loading");
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    getFetchedTodos(response.data);
    changeFetchState("completed");
  };

  return <Button text="Fetch Todos" onClick={fetchTodos} />;
}
