import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [movered, setMovered] = useState(false);
  const nodeRef = useRef();
  useEffect(() => {
    function handleMouseOver(e) {
      setMovered(true);
    }
    function handleMouseOut(e) {
      setMovered(false);
    }
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      dom.removeEventListener("mouseover", handleMouseOver);
      dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return {
    nodeRef,
    movered,
  };
}
