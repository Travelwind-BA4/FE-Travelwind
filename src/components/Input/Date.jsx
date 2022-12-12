import { DatePicker, Form } from "antd";
import dayjs from "dayjs";
const dateFormat = "YYYY-MM-DD";
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
        <DatePicker format="YYYY-MM-DD" bordered={false} className />
      </Form.Item>
    </div>
  );
};

export default Date;
