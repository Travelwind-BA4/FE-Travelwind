import React from "react";
import { Form, Select } from "antd";

const Booking = ({ placeholder, styles, name, items }) => {
  return (
    <>
      <Form.Item name={name} className="mb-0">
        <Select showSearch={false} className={styles} bordered={false} placeholder={placeholder}>
          {items &&
            items.map((item) => {
              return <Select.Option value={item.value}>{item.label}</Select.Option>;
            })}
        </Select>
      </Form.Item>
    </>
  );
};

export default Booking;
