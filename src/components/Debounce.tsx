import React, { useCallback, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function Debounce() {
  const [value, setValue] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  function search(query: string) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }

  const onChange = (e: any) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}
