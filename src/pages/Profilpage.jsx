import { FiUser, FiLogOut } from "react-icons/fi";
import { BsCalendar2Check, BsCardList } from "react-icons/bs";
import Profil from "../components/Profil/Profil";
import { useLocation, useNavigate, useParams, NavLink } from "react-router-dom";
import Traveler from "../components/Profil/Traveler";
import Orders from "../components/Profil/Orders";
import useOrder from "../services/api/useOrder";
import useTraveler from "../services/api/useTraveler";
import Profile from "../components/Profil/Profile";

const Profilpage = () => {
  const navigate = useNavigate();
  const params = useLocation().pathname.split("/")[2];
  const { getOrderUser, OrdersUser } = useOrder();
  const { getTraveler } = useTraveler();

  const { orderId } = useParams();

  const handleOrder = (e) => {
    e.preventDefault();
    getOrderUser();
    navigate("/account/orders");
  };

  const handleTraveler = (e) => {
    e.preventDefault();
    getTraveler();
    navigate("/account/traveler");
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-10 lg:grid grid-cols-4 block mt-20 gap-x-10">
        <aside className="col-span-1 flex flex-col gap-y-4 mb-5">
          <NavLink to="/account/profile" className={({ isActive }) => isActive ? 'bg-[#3e5cb8] text-white lg:max-w-[300px] rounded-lg cursor-pointer' : 'bg-[#f1f5f5] text-[#000] lg:max-w-[300px] rounded-lg cursor-pointer'} >
            <h2 className="flex items-center pl-10 h-full min-h-[50px]">
              <FiUser className="mr-3" /> Profile
            </h2>
          </NavLink>

          <NavLink to="/account/traveler" className={({ isActive }) => isActive ? 'bg-[#3e5cb8] text-white lg:max-w-[300px] rounded-lg cursor-pointer' : 'bg-[#f1f5f5] text-[#000] lg:max-w-[300px] rounded-lg cursor-pointer'} >
            <h2 className="flex items-center pl-10  h-full min-h-[50px]">
              <BsCardList className="mr-3" /> Traveler List
            </h2>
          </NavLink>

          <NavLink to="/account/orders" className={({ isActive }) => isActive ? 'bg-[#3e5cb8] text-white lg:max-w-[300px] rounded-lg cursor-pointer' : 'bg-[#f1f5f5] text-[#000] lg:max-w-[300px] rounded-lg cursor-pointer'} >
            <h2 className="flex items-center pl-10  h-full min-h-[50px]">
              <BsCalendar2Check className="mr-3" /> Orders
            </h2>
          </NavLink>
          <button className="bg-[#f1f5f5] text-[#000] lg:max-w-[300px] rounded-lg cursor-pointer focus:bg-red-700 hover:bg-red-600 focus:text-white" onClick={handleLogOut}>
            <h2 className="flex items-center pl-10  h-full min-h-[50px]">
              <FiLogOut className="mr-3" /> Log Out
            </h2>
          </button>
        </aside>
        <div className="col-span-3">{profileChange(params)}</div>
      </div>
    </div>
  );
};

const profileChange = (params) => {
  if (params === "profile") {
    return <Profile />;
  }
  if (params === "traveler") {
    return <Traveler />;
  }
  if (params === "orders") {
    return <Orders />;
  }
};

export default Profilpage;
