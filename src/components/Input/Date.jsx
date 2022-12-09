import { DatePicker } from "antd";
import dayjs from "dayjs";
const dateFormat = "YYYY-MM-DD";
const Date = () => {
  return (
    <div>
      <DatePicker defaultValue={dayjs("2022-01-01", dateFormat)} format={dateFormat} bordered={false} />
    </div>
  );
};

export default Date;
