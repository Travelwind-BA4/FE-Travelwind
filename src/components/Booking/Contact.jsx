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
    value: "contact 1",
    label: "contact 1",
  },

  {
    value: "contact 2",
    label: "contact 2",
  },
];
const Contact = ({ placeholder, item }) => {
  return (
    <div>
      <Select
        showSearch
        className="w-[170px] border-b-2 border-gray-300"
        bordered={false}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={items}
      />
    </div>
  );
};

export default Contact;
