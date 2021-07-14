import React, { useEffect, useRef, useState } from "react";
import useScroll from "../hooks/useScroll";

export default function List() {
  const [todos, setTodos] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const limit = 20;
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const intersected = useScroll(parentRef, childRef, () =>
    fetchTodos(page, limit)
  );

  function fetchTodos(page: any, limit: any) {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos((prev) => [...prev, ...json]);
        setPage((prev) => prev + 1);
      });
  }

  return (
    <div ref={parentRef} style={{ height: "80vh", overflow: "auto" }}>
      {todos.map((todo: any) => (
        <div key={todo.id} style={{ padding: 30, border: "2px solid black" }}>
          {todo.id}. {todo.title}
        </div>
      ))}
      <div
        ref={childRef}
        style={{ height: 20, backgroundColor: "green" }}
      ></div>
    </div>
  );
}
