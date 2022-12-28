import { Select } from "antd";
import useSchedule from "../../services/api/useSchedule";

const Sorting = () => {
  const { byPrice } = useSchedule();
  const byPrices = ({ depAirport, arrAirport, depDate }) => {
    const lower = (val) => {
      console.log(val);
      const payload = {
        depAirport: depAirport,
        arrAirport: arrAirport,
        depDate: depDate,
        size: 5,
        page: 0,
      };
      byPrice(val, payload);
    };
    return (
      <Select className="bg-gray-200 rounded-md" placeholder="Prices" bordered={false} onSelect={lower}>
        <Select.Option key={1} value="lower-price">
          <h1>Lower Prices</h1>
        </Select.Option>
        <Select.Option key={2} value="higher-price">
          <h1>High Prices</h1>
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
