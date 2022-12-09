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
    value: "id",
    label: "ID Card",
  },

  {
    value: "pass",
    label: "Passport",
  },
];
const DocID = ({ placeholder, item }) => {
  return (
    <div>
      <Select
        showSearch
        defaultValue={"id"}
        className="w-[100%] border-b border-gray-300"
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

export default DocID;
