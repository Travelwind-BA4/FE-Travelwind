import React from "react";

const Button1 = ({ name, style, onclick }) => {
  return (
    <button className={`bg-[#3E5CB8] text-white px-4 py-2 ${style}`} onClick={onclick}>
      {name}
    </button>
  );
};

export default Button1;
