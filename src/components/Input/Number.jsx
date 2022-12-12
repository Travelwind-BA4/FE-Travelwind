import { Form, Input, InputNumber } from "antd";
const Number = () => {
  return (
    <Form.Item name="traveler" className="mb-0">
      <InputNumber min={1} max={6} defaultValue={3} bordered={false} className="p-0" />
    </Form.Item>
  );
};

export default Number;
