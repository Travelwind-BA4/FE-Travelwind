import { Select } from "antd";
import useSchedule from "../../services/api/useSchedule";

const Sorting = () => {
  const { byLowerPrice } = useSchedule();
  const byPrices = () => {
    return (
      <Select className="bg-gray-200 rounded-md" placeholder="Prices" bordered={false}>
        <Select.Option key={1}>
          <h1>Lower Prices</h1>
        </Select.Option>
        <Select.Option key={2}>
          <h1>Lower Prices</h1>
        </Select.Option>
      </Select>
    );
  };
  const byDeparture = () => {
    return (
      <Select>
        <Select.Option>
          <h1>earliest departure</h1>
        </Select.Option>
        <Select.Option>
          <h1>lastest departure</h1>
        </Select.Option>
      </Select>
    );
  };

  const byArrival = () => {
    return (
      <Select>
        <Select.Option>
          <h1>earliest arrival</h1>
        </Select.Option>
        <Select.Option>
          <h1>lastest arrival</h1>
        </Select.Option>
      </Select>
    );
  };

  return { byPrices, byDeparture, byArrival };
};

export default Sorting;
