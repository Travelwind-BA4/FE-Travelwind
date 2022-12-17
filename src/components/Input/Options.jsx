import { Form, Select } from "antd";

const Options = ({ placeholder, name, airports, styles }) => {
  const onSearch = (value) => {
    // searchAirport(value);

    airports.find((e) => e.name === value);

    // searchAirport(value);
    // if (value == "") {
    //   getAirports();
    // } else {
    //   searchAirport(value);
    // }
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
              return Promise.reject("must be different location from and to");
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
