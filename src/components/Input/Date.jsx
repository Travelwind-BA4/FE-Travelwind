import { DatePicker, Form } from "antd";

const Date = ({ name, style }) => {
  return (
    <div>
      <Form.Item
        name={name}
        className={style}
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <DatePicker format="YYYY-MM-DD" bordered={false} />
      </Form.Item>
    </div>
  );
};

export default Date;
