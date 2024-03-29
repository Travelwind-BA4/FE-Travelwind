import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { logo_blue } from "../../assets/images/logo";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#dce2e5] pt-20">
      <div className="container mx-auto px-10 grid sm:grid-cols-4 grid-cols-2 gap-5 justify-items-center">
        <div>
          <div className="cursor-pointer w-40" onClick={() => navigate("/")}>
            <img src={logo_blue} alt="" />
          </div>
        </div>
        <div>
          <ul>
            <li>FLIGHT TICKET</li>
            <li className="pt-4 pb-2">Flight</li>
            <li>Order</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Account</li>
            <li className="pt-4 pb-2">Sign Up</li>
            <li>Sign In</li>
          </ul>
        </div>
        <div className="col-span-1">
          <p className="mb-3">Follow Us</p>
          <ul className="flex items-center gap-x-3">
            <li className="p-2 bg-[#c3c3c3] rounded-full text-[#fff] hover:bg-[#1c71b1] cursor-pointer">
              <FaFacebookF />
            </li>
            <li className="p-2 bg-[#c3c3c3] rounded-full text-[#fff] hover:bg-[#4e9ed7] cursor-pointer">
              <FaTwitter />
            </li>
            <li className="p-2 bg-[#c3c3c3] rounded-full text-[#fff] hover:bg-[#f04d44] cursor-pointer">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
      <p className="pb-2 pt-10 text-center">Copyright 2022 FlightTicket. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
