import React, { useState } from "react";
import Button1 from "../Buttons/Button1";
import { FiChevronDown, FiUser } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const [notif, setNotif] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-[#fff] shadow-xl">
      <div className="flex justify-between container mx-auto px-10 h-20 items-center">
        <div className="flex justify-between items-center">
          <h1 className="cursor-pointer" onClick={() => navigate("/")}>
            FLIGHTTICKET
          </h1>
          <ul className="nav-right flex gap-x-5 m-0 items-center pl-10 text-[#848a9a] ">
            <li className="cursor-pointer">
              <a className="">Flight</a>
            </li>
            <li className="cursor-pointer">
              <a className="">Order</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center ">
          <div className="hidden">
            <Button1 name="Login" style="rounded-lg" style2="rounded-lg" />
          </div>
          <div className="relative">
            <div className="mr-3 text-xl cursor-pointer" onClick={() => setNotif(!notif)}>
              <IoMdNotificationsOutline />
            </div>
            <div className={`absolute top-14 right-2 z-10 bg-[#fff] ${notif ? "min-w-[200px]" : "w-0 overflow-hidden"}`}>Order Masuk</div>
          </div>
          <div className="relative profil">
            <div className="flex items-center ml-3 cursor-pointer" onClick={() => setProfile(!profile)}>
              <FiUser className="text-lg" />
              <span className="px-2">Nizar Fazari</span>
              <FiChevronDown className={`text-lg transition-all ease-in-out duration-500  ${profile ? "rotate-0" : "rotate-180"}`} />
            </div>
            <div className={` absolute top-14 z-10 bg-[#fff] transition-all ease-in-out duration-500 ${profile ? "w-full" : "w-0 overflow-hidden"}`}>
              <ul className="pl-3">
                <li className="my-2 cursor-pointer" onClick={() => navigate("/account/profile")}>
                  Profile
                </li>
                <li className="my-2 cursor-pointer" onClick={() => navigate("/account/orders")}>
                  Order List
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
