import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const nodeRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    function handleClickOutSideDropdown(e) {
      // console.log(
      //   e.target,
      //   nodeRef.current.contains(e.target),
      //   e.target.matches(dom),
      // );
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutSideDropdown);
    return () =>
      document.removeEventListener("click", handleClickOutSideDropdown);
  }, []);
  return { show, nodeRef, setShow };
}
