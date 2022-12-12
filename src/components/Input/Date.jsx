import { DatePicker, Form } from "antd";
import dayjs from "dayjs";
const dateFormat = "YYYY-MM-DD";
const Date = ({ name, style }) => {
  return (
    <div className={style}>
      <Form.Item name={name} className="mb-0">
        <DatePicker format="YYYY-MM-DD" bordered={false} />
      </Form.Item>
    </div>
  );
};

export default Date;
