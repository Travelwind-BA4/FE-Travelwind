import { Form, Select } from "antd";

const Options = ({ placeholder, name, airports, styles }) => {
  const onSearch = (value) => {
    airports.find((e) => value === e.cityName);
  };

  return (
    <Form.Item
      name={name}
      className="mb-0"
      rules={[
        {
          required: true,
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("departureAirport") === getFieldValue("arrivalAirport")) {
              return Promise.reject("Location city is same");
            }
            return Promise.resolve();
          },
        }),
      ]}
      hasFeedback
    >
      <Select showSearch showArrow={false} className={styles} bordered={false} placeholder={placeholder} onSearch={onSearch}>
        {airports &&
          airports.map((airport, index) => {
            return (
              <Select.Option key={index} value={airport.airportName}>
                <div>
                  <h1>
                    {airport.cityName},{airport.countryName}
                  </h1>
                  <p className="text-gray-400 text-xs">{airport.airportName}</p>
                </div>
              </Select.Option>
            );
          })}
      </Select>
    </Form.Item>
  );
};

export default Options;
