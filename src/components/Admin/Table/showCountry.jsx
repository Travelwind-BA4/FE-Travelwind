import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Country Code",
    dataIndex: "countryCD",
    key: "countryCD",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Country Name",
    dataIndex: "countryName",
    key: "countryName",
  },
  {
    title: "Telephone Code",
    dataIndex: "telephoneCD",
    key: "telephoneCD",
  },
  {
    title: "Action",
    key: "action",
    render: (_) => (
      <Space size="middle">
        <Button type="primary">Add</Button>
        <Button type="primary" danger>
          Delete
        </Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    countryCD: "21",
    countryName: "Indonesia",
    telephoneCD: "+62",
  },
  {
    key: "2",
    countryCD: "69",
    countryName: "Japan",
    telephoneCD: "+81",
  },
  {
    key: "3",
    countryCD: "11",
    countryName: "America",
    telephoneCD: "+1",
  },
];

const showCountry = () => {
  return <Table columns={columns} dataSource={data} />;
};
export default showCountry;
