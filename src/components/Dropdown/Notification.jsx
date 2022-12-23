import { Badge, Divider, Dropdown } from "antd";

import { IoMdNotificationsOutline, IoMdAirplane } from "react-icons/io";
import useNotification from "../../services/api/useNotification";
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
  const user = JSON.parse(localStorage.getItem("user"));
  const { postNotification, notif } = useNotification();

  const getNotif = () => {
    postNotification(user.userId);
  };

  return (
    <Dropdown
      dropdownRender={() => (
        <div className="dropdown-content rounded-md bg-[#f1f5f5] p-3 rounded-md min-w-[100px]">
          <h1 className="mb-1">Notification</h1>
          {notif.map((e, i) => {
            return (
              <div className="border-t-2 pt-2" key={i}>
                <h1 className="">{e.title}</h1>
                <p>{e.content}</p>
              </div>
            );
          })}
        </div>
      )}
      trigger={["click"]}
      placement="bottom"
      onOpenChange={getNotif}
    >
      <div className="mr-3 text-xl cursor-pointer">
        <Badge size="small" style={{ backgroundColor: "#3e5cb8" }}>
          <IoMdNotificationsOutline className={`text-lg ${style}`} />
        </Badge>
      </div>
    </Dropdown>
  );
};

export default Notification;
