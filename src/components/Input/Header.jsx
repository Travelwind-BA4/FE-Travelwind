import React from "react";
import { Form, Select } from "antd";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

const Header = ({ placeholder, items, name }) => {
  return (
    <Form.Item name={name} className="mb-0">
      <Select
        showSearch
        className="w-[170px] "
        bordered={false}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
      >
        {items.map((item, index) => {
          return (
            <Select.Option key={index} value={item.airportName}>
              <div>
                {item.airportName} ( {item.cityCode} )
              </div>
            </Select.Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};

export default Header;
