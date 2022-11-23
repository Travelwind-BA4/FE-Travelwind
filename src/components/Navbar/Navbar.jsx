import React from "react";
import Button1 from "../Buttons/Button1";

const Navbar = () => {
  return (
    <nav className="bg-[#F1F5F5]">
      <div className="flex justify-between container mx-auto px-10 h-20 items-center">
        <div className="flex justify-between items-center">
          <h1 className="cursor-pointer">FLIGHTTICKET</h1>
          <ul className="nav-right flex gap-x-5 m-0 items-center pl-10 text-[#848a9a] ">
            <li className="cursor-pointer">
              <a className="">Flight</a>
            </li>
            <li className="cursor-pointer">
              <a className="">Order</a>
            </li>
          </ul>
        </div>
        <div>
          <Button1 name="Login" style="rounded-lg" style2="rounded-lg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
