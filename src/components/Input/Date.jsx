import { DatePicker, Form } from "antd";
import dayjs from "dayjs";

const dateFormat = "YYYY/MM/DD";
const Date = ({ name, style }) => {
  console.log(name);
  return (
    <div className={style}>
      <Form.Item name={name} className="mb-0">
        <DatePicker defaultValue={dayjs("2022/12/17", dateFormat)} format={dateFormat} bordered={false} picker="date" />
      </Form.Item>
    </div>
  );
};

export default Date;
