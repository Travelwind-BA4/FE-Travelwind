import { Badge, Divider, Dropdown } from "antd";
import { useEffect } from "react";

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
  const { postNotification, notif, updateNotif } = useNotification();

  useEffect(() => {
    postNotification(user.userId);
  }, []);
  return (
    <Dropdown
      dropdownRender={() => (
        <div className="dropdown-content rounded-md bg-[#f1f5f5] p-3 rounded-md min-w-[100px]">
          <h1 className="mb-1">Notification</h1>
          {notif &&
            notif.map((e, i) => {
              console.log(e);
              return (
                <div className="border-t-2 pt-2 cursor-pointer" key={i} onClick={() => updateNotif(user.userId, e.notificationId)}>
                  <h1 className="">{e.title}</h1>
                  <p>{e.content}</p>
                </div>
              );
            })}
        </div>
      )}
      trigger={["click"]}
      placement="bottom"
    >
      <div className="mr-3 text-xl cursor-pointer">
        <Badge size="small" style={{ backgroundColor: "#3e5cb8" }} count={notif.length}>
          <IoMdNotificationsOutline className={`text-lg ${style}`} />
        </Badge>
      </div>
    </Dropdown>
  );
};

export default Notification;
