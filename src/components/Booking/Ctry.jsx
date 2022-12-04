import React from "react";
import { Select } from "antd";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

const Country = ({ placeholder, item }) => {
  return (
    <div>
      <Select
        defaultValue="Indonesia"
        showSearch
        className="w-[170px] border-b-2 border-gray-300 text-xs"
        bordered={false}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: "Indonesia",
            label: "(+62) Indonesia",
          },
          {
            value: "Amerika",
            label: "(+1) Amerika",
          },
          {
            value: "Malaysia",
            label: "(+60) Malaysia",
          },
        ]}
      />
    </div>
  );
};

export default Country;
