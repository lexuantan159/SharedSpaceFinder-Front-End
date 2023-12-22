import React, { useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const Dropdown = ({ setRole, data, ...props }) => {
  console.log("🚀 ~ Dropdown ~ data:", data);

  const { show, setShow, nodeRef } = useClickOutSide();
  const [label, setLabel] = useState("Select your role");
  const handleValueClick = (e) => {
    setRole(e.target.dataset.value);
    setLabel("Your role is " + e.target.textContent);
    setShow(false);
  };
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="border-gray100 flex w-full cursor-pointer items-center justify-between rounded-lg border bg-white p-5"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      {show && (
        <div className="absolute left-0 top-full w-full rounded-lg bg-white">
          {data.map((item, index) => {
            return (
              <div
                className="cursor-pointer p-5 hover:bg-gray-100"
                onClick={handleValueClick}
                data-value={item.value}
                key={index}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
