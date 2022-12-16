import { FiUser, FiLogOut } from "react-icons/fi";
import { BsCalendar2Check } from "react-icons/bs";
import { VscKey } from 'react-icons/vsc';
import Profil from "../components/Profil/Profil";
import ChangePass from "../components/Profil/ChangePass";
import { useLocation, useNavigate } from "react-router-dom";
import Orders from "../components/Profil/Orders";

const Profilpage = () => {
  const navigate = useNavigate();
  const params = useLocation().pathname.split("/")[2];

  const handleLogOut = (e) => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/')
  }

  return (
    <div className="h-screen">
      <div className="container mx-auto px-10 lg:grid grid-cols-4 block mt-20 gap-x-10">
        <aside className="col-span-1 flex flex-col gap-y-4 mb-5">
          <div className="bg-[#3e5cb8] text-white lg:max-w-[300px] rounded-lg cursor-pointer" onClick={() => navigate("/account/profile")}>
            <h2 className="flex items-center pl-10 h-full min-h-[50px]">
              <FiUser className="mr-3" /> Profile
            </h2>
          </div>
          <div className="bg-[#f1f5f5] text-[#000] lg:max-w-[300px] rounded-lg cursor-pointer" onClick={() => navigate("/account/orders")}>
            <h2 className="flex items-center pl-10  h-full min-h-[50px]">
              <BsCalendar2Check className="mr-3" /> Orders
            </h2>
          </div>
          <div className="bg-[#f1f5f5] text-[#000] lg:max-w-[300px] rounded-lg cursor-pointer" onClick={handleLogOut}>
            <h2 className="flex items-center pl-10  h-full min-h-[50px]">
              <FiLogOut className="mr-3" /> Log Out
            </h2>
          </div>
        </aside>
        <div className="col-span-3">{profileChange(params)}</div>
      </div>
    </div>
  );
};

const profileChange = (params) => {
  if (params === "profile") {
    return <Profil />;
  }
  if (params === "orders") {
    return <Orders />;
  }
};

export default Profilpage;