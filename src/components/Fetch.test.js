import React from "react";
import axiosMock from "axios";
import Fetch from "./Fetch";
import { render, waitFor, fireEvent } from "@testing-library/react";

jest.mock("axios");
let data = {
    todos: [
      { title: "todo1", id: 1 },
      { title: "todo2", id: 2 },
    ],
  }
it("fetches data", async () => {
  const changeFetchState = jest.fn();
  const getFetchedTodos = jest.fn();
  const { getByTestId } = render(<Fetch getFetchedTodos={getFetchedTodos} changeFetchState={changeFetchState} />);
  axiosMock.get.mockResolvedValueOnce({
    data: data
  });
  fireEvent.click(getByTestId("fetch-button"));
  expect(changeFetchState).toHaveBeenCalledWith("loading");

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
// help
 // await waitFor(() => expect(getFetchedTodos).toHaveBeenCalledWith(data))
 // await waitFor(() => expect(changeFetchState).toHaveBeenCalledWith("loading"))
  
  
});
