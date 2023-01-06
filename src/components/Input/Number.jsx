import { Form, InputNumber } from "antd";
const Number = () => {
  return (
    <Form.Item
      name="traveler"
      className="mb-0"
      rules={[
        {
          required: true,
        },
      ]}
      hasFeedback
    >
      <InputNumber min={1} max={6} defaultValue={0} bordered={false} />
    </Form.Item>
  );
};

export default Number;
