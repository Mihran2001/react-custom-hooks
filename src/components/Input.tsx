import React, { useState } from "react";
import useInput from "../hooks/useInput";

export default function Input() {
  const userName = useInput("");
  const password = useInput("");

  return (
    <div>
      <input {...userName} type="text" placeholder="Username" />
      <input {...password} type="text" placeholder="password" />

      <button onClick={() => console.log(userName.value, password.value)}>
        Click me
      </button>
    </div>
  );
}
