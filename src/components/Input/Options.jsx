import { Form, Select } from "antd";

const Options = ({ placeholder, name, airports, styles }) => {
  const onSearch = (value) => {
    airports.find((e) => e.name === value);
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
      <Select showSearch className={styles} bordered={false} placeholder={placeholder} onSearch={onSearch}>
        {airports &&
          airports.map((airport, index) => {
            return (
              <Select.Option key={index} value={airport.airportName}>
                <div>
                  <h1>
                    {airport.airportName} ( {airport.cityCode} )
                  </h1>
                  <p className="text-gray-400 text-xs">
                    {airport.cityName},{airport.countryName}
                  </p>
                </div>
              </Select.Option>
            );
          })}
      </Select>
    </Form.Item>
  );
};

export default Options;
