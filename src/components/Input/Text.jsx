import { Form, Input } from "antd";

const Text = ({ name, placeholder }) => {
  return (
    <Form.Item
      name={name}
      rules={[
        {
          required: true,
        },
      ]}
      hasFeedback
    >
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
