import { Form, Select } from "antd";

const Options = ({ placeholder, name, airports, styles, searchAirport }) => {
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

  const onChange = (val) => {
    console.log(val);
    // onChangeCountry(val) {
    //   const findCountry = this.allCountries.find((e) => e.name === val)
    //   this.countryCode = findCountry.code
    // },
  };
  return (
    <Form.Item
      name={name}
      className="mb-0"
      rules={[
        {
          required: true,
        },
      ]}
      hasFeedback
    >
      <Select showSearch className={styles} bordered={false} placeholder={placeholder} onSearch={onSearch} onChange={onChange}>
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
