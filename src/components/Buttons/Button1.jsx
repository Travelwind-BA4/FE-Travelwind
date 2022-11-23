import React from "react";

const Button1 = ({ name, ...style }) => {
  return <button className={`bg-[#3E5CB8] text-white px-4 py-2 ${style.style}`}>{name}</button>;
};

export default Button1;
