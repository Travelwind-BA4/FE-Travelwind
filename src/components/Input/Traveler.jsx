import { useState } from "react";
import { Form, Input, InputNumber } from "antd";
const Traveler = () => {
  return (
    <Form.Item name="traveler" className="mb-0">
      <InputNumber min={1} max={6} defaultValue={3} bordered={false} className="p-0" />
    </Form.Item>
  );
};

export default Traveler;
