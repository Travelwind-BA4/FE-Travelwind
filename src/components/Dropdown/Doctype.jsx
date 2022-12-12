import React from "react";
import { Form, Select } from "antd";

const Doctype = ({ placeholder, styles, name, items, setDoctype }) => {
  const onSelect = (value) => {
    setDoctype(value);
  };
  return (
    <>
      <Form.Item name={name} className="mb-0">
        <Select showSearch={false} className={styles} bordered={false} placeholder={placeholder} onSelect={onSelect}>
          {items &&
            items.map((item, index) => {
              return (
                <Select.Option value={item.value} key={index}>
                  {item.label}
                </Select.Option>
              );
            })}
        </Select>
      </Form.Item>
    </>
  );
};

export default Doctype;
