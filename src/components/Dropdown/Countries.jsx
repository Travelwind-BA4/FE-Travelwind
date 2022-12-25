import { Form, Select } from "antd";

const Countries = ({ name, countries }) => {
  return (
    <>
      <div>
        <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          {name} <span className="text-red-500">*</span>
        </label>
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
          <Select showSearch={false} bordered={false} placeholder="Indonesia" className="border-b border-gray-300">
            {countries &&
              countries.map((country, index) => {
                return (
                  <Select.Option value={country.countryName} key={index}>
                    {country.countryName}
                  </Select.Option>
                );
              })}
          </Select>
        </Form.Item>
      </div>
    </>
  );
};

export default Countries;
