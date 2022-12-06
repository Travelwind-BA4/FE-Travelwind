import React, { useState } from "react";
import Date from "../components/Input/Date";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { logo_white, logo_mini } from "../../assets/images/logo/index";
import { Select } from "antd";

import { useNavigate } from "react-router-dom";
const Registerpage = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="sm:bg-gradient-to-br from-[#2c4282] via-[#3e5cb8] to-[#4a6fde]">
      <div className="wrapper-form-login flex flex-col items-center min-h-[100vh] container mx-auto m-auto">
        <a onClick={() => navigate("/")} className="cursor-pointer no-underline sm:m-auto sm:pt-10 mt-14">
          <img className="w-64 hidden sm:block" src={logo_white} alt="" />
          <img className="w-24 sm:hidden" src={logo_mini} alt="" />
        </a>
        <div className="login-form-box sm:w-[590px] w-auto overflow-hidden text-base rounded-md mx-auto my-14">
          <div className="panel-1 p-[50px_50px_20px_50px] bg-white text-[#59595b] relative block">
            <form className="login-form">
              <h1 className="mb-[30px] text-[18px] leading-[25px] font-bold">Register</h1>
              {/*//! Tittle/Gender */}
              <label className="name-input text-[#59595b] text-[0.875rem] font-normal mb-[0.5em] block">Title</label>
              <Select
                className="title-select max-w-[100px] mb-[20px] border-b"
                placeholder="Mr"
                bordered={false}
                style={{ padding: "0" }}
                options={[
                  {
                    value: "Mr",
                    label: "Mr",
                  },
                  {
                    value: "Ms",
                    label: "Ms",
                  },
                ]}
              />
              {/* Name */}
              <div className="name-form mb-[20px] flex">
                <div className="name-input-form flex-[1] mb-0">
                  <label className="name-input text-[#59595b] text-[0.875rem] font-normal mb-[0.5em] block">Full Name</label>
                  <div className="name-input-control box-border clear-both text-base relative text-left">
                    <input
                      type="text"
                      maxLength
                      placeholder="Ex. James Taco"
                      className="inline-flex items-center justify-start relative align-top pl-0 bg-transparent rounded-[0] border-b border-solid border-[#dedede] shadow-none h-[32px] text-[14px] leading-[20px] font-normal max-w-full w-full active:outline-none focus:outline-none"
                    />
                  </div>
                </div>
                {/* BirthDate */}
                <div className="birthDate-input-form ml-[20px] flex-[1] mb-0">
                  <label className="birthDate-input px-3 text-[#59595b] text-[0.875rem] font-normal mb-[0.5em] block">Birth Date</label>
                  <div className="birthDate-input-control box-border clear-both text-base relative text-left"></div>
                  <Date></Date>
                </div>
              </div>
              {/* Mobile Number */}
              <div className="country-phone flex mb-[20px]">
                <div className="phone-number-box mb-0 flex-[1]">
                  <label className="label-phone text-[#59595b] font-normal text-[0.875rem] mb-[0.5em] block">Mobile Number</label>
                  <div className="phone-number-control box-border clear-both text-base relative text-left">
                    <input
                      type="text"
                      maxLength
                      placeholder="e.g 81234567890"
                      className="pl-0 bg-transparent rounded-none border-b border-solid border-[#dedede] shadow-none h-[32px] text-[14px] leading-[20px] font-normal max-w-full w-full inline-flex items-center justify-start relative align-top m-0 active:outline-none focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className="email-form mb-[20px]">
                <label className="email-label text-[#59595b] text-[0.875rem] font-normal block">Email</label>
                <div className="email-control box-border clear-both text-base relative text-left">
                  <input
                    type="email"
                    maxLength
                    placeholder="james@gmail.com"
                    className="pl-0 bg-transparent rounded-none border-b border-solid border-[#dedede] text-[#59595b] shadow-none h-[32px] text-[14px] leading-[20px] font-normal w-full max-w-full inline-flex items-center relative align-top active:outline-none focus:outline-none"
                  />
                </div>
              </div>
              {/* Password */}
              <div className="password-form mb-[50px]">
                <label className="password-label text-[#59595b] text-[0.875rem] font-normal block">Password</label>
                <div className="password-control box-border clear-both text-base relative text-left">
                  <input
                    type={showPass ? "text" : "password"}
                    maxLength
                    placeholder="Password"
                    className="pl-0 bg-transparent rounded-none border-b border-solid border-[#dedede] text-[#59595b] shadow-none h-[32px] text-[14px] leading-[20px] font-normal w-full max-w-full inline-flex items-center relative align-top active:outline-none focus:outline-none"
                  />
                  <div onClick={() => setShowPass(!showPass)} className="pointer-events-auto cursor-pointer right-0 h-[32px] text-[#dbdbdb] absolute top-0 w-[32px] z-[4] inline-flex items-center justify-center align-[-0.125em]">
                    {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
              </div>
              {/* Button Sign Up */}
              <button className="button-signup p-[15px_25px] text-[18px] leading-[25px] border-none rounded-md flex w-full bg-[#3e5cb8] text-white shadow-md mb-[20px] font-bold touch-manipulation transition-shadow duration-[0.25s] will-change-[box-shadow] relative cursor-pointer justify-center text-center whitespace-nowrap items-center align-top hover:shadow-none hover:bg-[#3855aa]">
                <span className="text-[18px] leading-[25px] font-normal">Register</span>
              </button>
              {/* Button Google */}
              <button className="button-google p-[15px_25px] text-[18px] leading-[25px] border-none flex w-full shadow-md mt-[30px] font-bold touch-manipulation transition-shadow duration-[.25s] will-change-[box-shadow] relative text-[#9a9a9d] cursor-pointer justify-center text-center whitespace-nowrap bg-white items-center align-top hover:shadow-sm hover:text-[#59595b]">
                <img src="https://cdn.airpaz.com/nuxt/8584e352a276fbbc255e780a7b081934.svg" alt="" className="icon-google w-[20px] mr-[5px] h-[1.5em] relative inline-flex items-center justify-center align-[-0.125em]" />
                <span className="text-[18px] leading-[25px] font-bold ml-1">Register with Google</span>
              </button>
              {/* Terms & Conditions */}
              <div className="term-condition sm:px-[70px] py-[30px]">
                <p className="leading-[20px] text-[#9a9a9d] text-center text-[12px] font-normal m-0 p-0">
                  By clicking th "Sign Up" button, you have agreed to rules, restrictions and{" "}
                  <span>
                    <a href="/" className="text-[#9a9a9d] cursor-pointer text-[12px] leading-[17px] font-bold">
                      Terms & Conditions
                    </a>
                  </span>
                </p>
              </div>
            </form>
          </div>
          <div className="sm:bg-[#f7f7f7] border-b-0 border-r-0 border-l-0 p-[30px] rounded-b-md text-[#59595b] block text-center">
            <p className="text-[14px] leading-[20px] font-normal">
              Already an Airsanz member?{" "}
              <span className="ml-[3px]">
                <a onClick={() => navigate("/login")} className="cursor-pointer text-[#59595b] font-bold">
                  Login
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
