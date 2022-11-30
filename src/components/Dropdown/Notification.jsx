import { Avatar, Badge, Dropdown } from "antd";
import { IoMdNotificationsOutline, IoMdAirplane } from "react-icons/io";
const items = [
  {
    key: "1",
    label: (
      <div className="min-w-[100px]">
        <div className="flex items-center bg-[#f1f5f5] p-3">
          1 Orders Ticket | <IoMdAirplane className="ml-2" />
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="min-w-[100px]">
        <div className="flex items-center bg-[#f1f5f5] p-3">
          1 Orders Ticket | <IoMdAirplane className="ml-2" />
        </div>
      </div>
    ),
  },
];
const Notification = ({ style }) => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
      placement="bottom"
    >
      <div className="mr-3 text-xl cursor-pointer">
        <Badge count={2} size="small" style={{ backgroundColor: "#3e5cb8" }}>
          <IoMdNotificationsOutline className={`text-lg ${style}`} />
        </Badge>
      </div>
    </Dropdown>
  );
};

export default Notification;
