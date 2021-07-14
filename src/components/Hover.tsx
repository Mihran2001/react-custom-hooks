import React, { useRef } from "react";
import useHover from "../hooks/useHover";

export default function Hover() {
  const ref = useRef<HTMLDivElement>(null);
  const isHovering = useHover(ref);

  console.log(isHovering);

  return (
    <div
      ref={ref}
      style={{
        height: 300,
        width: 300,
        backgroundColor: isHovering ? "red" : "green",
      }}
    >
      {/* <button onClick={() => console.log(ref.current)}>Click me</button> */}
    </div>
  );
}
