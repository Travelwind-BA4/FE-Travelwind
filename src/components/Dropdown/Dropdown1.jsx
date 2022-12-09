import { Dropdown } from "antd";
import { FiUser } from "react-icons/fi";

const items = [
  {
    key: "1",
    label: <a href="/account/profile">Profile</a>,
  },
  {
    key: "2",
    label: <a href="/account/orders">Order List</a>,
  },
];

const Dropdown1 = ({name}) => {
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        placement="bottom"
      >
        <div className="flex items-center ml-3 cursor-pointer">
          <FiUser className="text-lg" />
          <span className="px-2">{name}</span>
        </div>
      </Dropdown>
    </div>
  );
};

export default Dropdown1;
