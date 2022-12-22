import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Departure Date",
    dataIndex: "departure",
    key: "departure",
  },
  {
    title: "Arrival Date",
    dataIndex: "arrival",
    key: "arrival",
  },
  {
    title: "Departure Time",
    dataIndex: "dtime",
    key: "dtime",
  },
  {
    title: "Arrival Time",
    dataIndex: "atime",
    key: "atime",
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
    departure: "2022-12-22",
    arrival: "2022-12-23",
    dtime: "12",
    atime: "5",
  },
  {
    key: "2",
    departure: "2022-11-22",
    arrival: "2022-11-23",
    dtime: "12",
    atime: "5",
  },
  {
    key: "3",
    departure: "2022-10-22",
    arrival: "2022-10-23",
    dtime: "12",
    atime: "5",
  },
];

const showSchedule = () => {
  return <Table columns={columns} dataSource={data} />;
};
export default showSchedule;
