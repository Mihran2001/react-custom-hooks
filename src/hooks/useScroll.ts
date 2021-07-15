import { useEffect, useRef } from "react";

export default function useScroll(
  parentRef: React.RefObject<HTMLElement>,
  childRef: React.RefObject<HTMLElement>,
  callback: () => void
) {
  console.log(parentRef.current, childRef.current);

  const observer: any = useRef();

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: "0px",
      threshold: 0,
    };

    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log("intersected", target);
        callback();
      }
    }, options);

    observer.current.observe(childRef.current);

    return function () {
      observer.current.unobserve(childRef.current);
    };
  }, [callback, childRef, parentRef]);
}
