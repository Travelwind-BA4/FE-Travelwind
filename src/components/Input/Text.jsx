import { Form, Input } from "antd";
import { useState } from "react";

const Text = ({ name, placeholder }) => {
  const [input, setInput] = useState("");
  return (
    <Form.Item name={name}>
      <div className="border-b border-gray-300">
        <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          {name} <span className="text-red-500">*</span>
        </label>
        <Input bordered={false} id="grid-city" type="text" placeholder={placeholder} />
      </div>
    </Form.Item>
  );
};

export default Text;
