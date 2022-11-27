import React, { useState } from "react";
import Button1 from "../Buttons/Button1";

import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Dropdown1 from "../Dropdown/Dropdown1";
import Notification from "../Dropdown/Notification";

const Navhome = () => {
  const navigate = useNavigate();
  return (
    <nav className="absolute top-0 w-full">
      <div className="flex justify-between container mx-auto px-10 h-20 items-center">
        <div className="flex justify-between items-center">
          <h1 className="cursor-pointer mb-0" onClick={() => navigate("/")}>
            FLIGHTTICKET
          </h1>
          <ul className="nav-right flex gap-x-5 m-0 items-center pl-10 ">
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
            <Notification />
          </div>
          <div className="profil">
            <Dropdown1 />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navhome;
