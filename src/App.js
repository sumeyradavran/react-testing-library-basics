import React, { useState } from "react";
import Fetch from "./components/Fetch";
import Todos from "./components/Todos";
import Loading from "./components/Loading";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [fetchState, setFetchState] = useState("initial");

  const getFetchedTodos = (todos) => {
    setTodos(todos);
  };

  const changeFetchState = (text) => {
    setFetchState(text);
  };
  
  return (
    <div className="App">
      <Fetch
        changeFetchState={changeFetchState}
        getFetchedTodos={getFetchedTodos}
      />
      {fetchState === "initial" ? (
        <div>Please click button to fetch data</div>
      ) : fetchState === "loading" ? (
        <Loading text="loading" />
      ) : (
        <Todos todos={todos} />
      )}
    </div>
  );
}
