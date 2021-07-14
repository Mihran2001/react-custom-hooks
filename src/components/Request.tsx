import React, { useCallback, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import axios from "axios";
import useRequest from "../hooks/useRequest";

export default function Request() {
  const [todos, loading, error]: any = useRequest(fetchTodos);
  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  if (loading) {
    return <h1>Loading in progress</h1>;
  }

  if (error) {
    return <h1>Аn error occurred while loading data</h1>;
  }

  return (
    <div>
      {todos &&
        todos.map((todo: any) => (
          <div key={todo.id} style={{ padding: 30, border: "2px solid black" }}>
            {todo.id}. {todo.title}
          </div>
        ))}
    </div>
  );
}
