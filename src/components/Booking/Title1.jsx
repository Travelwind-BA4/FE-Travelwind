import React from "react";
import { Select } from "antd";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

const items = [
  {
    value: true,
    label: "Mr",
  },

  {
    value: false,
    label: "Mrs",
  },
];
const Title1 = ({ placeholder, item }) => {
  return (
    <>
      <Select showSearch={false} className="w-[100px] border-b border-gray-300" bordered={false} placeholder={placeholder} onChange={onChange} options={items} />
    </>
  );
};

export default Title1;
