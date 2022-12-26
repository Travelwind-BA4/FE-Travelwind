import { Dropdown } from "antd";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Dropdown1 = ({ name }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  const items = [
    {
      key: "1",
      label: <a href="/account/profile">Profile</a>,
    },
    {
      key: "2",
      label: <a href="/account/orders">Order List</a>,
    },
    {
      key: "3",
      label: <a onClick={handleLogOut}>Logout</a>,
    },
  ];
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
