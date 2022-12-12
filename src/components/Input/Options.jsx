import { Form, Select } from "antd";

const Options = ({ placeholder, name, airports, styles, searchAirport }) => {
  const onSearch = (value) => {
    searchAirport(value);
    console.log(value);
    // searchAirport(value);
    // if (value == "") {
    //   getAirports();
    // } else {
    //   searchAirport(value);
    // }
  };
  return (
    <Form.Item name={name} className="mb-0">
      <Select showSearch={true} className={styles} bordered={false} placeholder={placeholder} onSearch={onSearch}>
        {airports &&
          airports.map((airport, index) => {
            return (
              <Select.Option key={index} value={airport.airportName}>
                <div>
                  {airport.airportName} ( {airport.cityCode} )
                </div>
              </Select.Option>
            );
          })}
      </Select>
    </Form.Item>
  );
};

export default Options;
