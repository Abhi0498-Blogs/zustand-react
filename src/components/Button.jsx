import React from "react";
import useCounter from "../store/counter";

const Button = ({ children, action }) => {
  const { increase, decrease } = useCounter();
  return (
    <button
      onClick={() => {
        if (action === "increase") increase();
        if (action === "decrease") decrease();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
