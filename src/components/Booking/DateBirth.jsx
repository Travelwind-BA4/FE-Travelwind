import { DatePicker } from "antd";
const dateFormat = "YYYY/MM/DD";
const Birth = () => {
  return (
    <div>
      <DatePicker
        class="w-[100px] border-b border-gray-300"
        placeholder="Choose"
        format={dateFormat}
        bordered={false}
      />
    </div>
  );
};

export default Birth;
