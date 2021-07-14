import { useCallback, useRef } from "react";

export default function useDebounce(
  //   callback: (query: any) => void,
  callback: any,
  delay: number
) {
  const timer: any = useRef();

  const debouncedCallback = useCallback(
    (...args) => {
      console.log(`This is args ${args}`);
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
}
