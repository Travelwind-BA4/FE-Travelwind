import React from "react";

const Button2 = ({ name, onClick, ...style }) => {
  return (
    <button onClick={onClick} className={`border-2 border-[#3E5CB8] text-[#3E5CB8] font-medium px-4 py-2 ${style.style}`}>
      {name}
    </button>
  );
};

export default Button2;
