import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Logos } from "../../assets/images/login/index_img";
import "./register.css";

const Registerpage = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="" style={{ background: "linear-gradient(121.74deg, #2c4284 .97%, #3e5cb8 54.61%, #4a6fde 99.48%)" }}>
      <div className="wrapper-form-login flex flex-col items-center min-h-[100vh] container mx-auto pb-20">
        <a href="/" className="cursor-pointer no-underline ">
          <img className="w-64" src={Logos} alt="" />
        </a>
        <div className="login-form-box w-[590px] overflow-hidden text-base rounded-md">
          <div className="panel-1 p-[50px_50px_20px_50px] bg-white text-[#59595b] relative block">
            <form className="login-form">
              <h1 className="mb-[30px] text-[18px] leading-[25px] font-bold">Sign Up</h1>
              {/* Title */}
              <div className="input-title max-w-[65px] mb-[20px]">
                <label className="tittle-label text-[0.875rem] font-normal text-[#59595b] mb-[0.5em] block">Title</label>
                <div className="relative outline-none cursor-default border-none clear-both text-base text-left box-border">
                  <div className="picker-input inline-flex relative align-top items-center pl-0 bg-transparent rounded-none border-b border-b-[#dedede] pr-[32px] h-[32px] text-[14px] leading-[20px] font-normal">
                    <span className=" touch-manipulation text-[#bfbfbf]">Mr</span>
                  </div>
                  <div className="inline-flex items-center justify-center align-[-0.125rem] right-0 h-[32px] text-[#dbdbdb] top-0 z-[4] w-[32px] absolute pointer-events-none transition-transform duration-[0.15s] ease-out active:rotate-180">
                    <BiChevronDown size="1.3rem" />
                  </div>
                  <div className="hidden">{/* //! DropDown Component */}</div>
                </div>
              </div>
              {/* Name */}
              <div className="name-form mb-[20px] flex">
                <div className="name-input-form flex-[1] mb-0">
                  <label className="name-input text-[#59595b] text-[0.875rem] font-normal mb-[0.5em] block">Name</label>
                  <div className="name-input-control box-border clear-both text-base relative text-left">
                    <input
                      type="text"
                      maxLength
                      placeholder="Gihon"
                      className="inline-flex items-center justify-start relative align-top pl-0 bg-transparent rounded-[0] border-b border-solid border-[#dedede] shadow-none h-[32px] text-[14px] leading-[20px] font-normal max-w-full w-full active:outline-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="surname-input-form ml-[20px] flex-[1] mb-0">
                  <label className="surname-input text-[#59595b] text-[0.875rem] font-normal mb-[0.5em] block">Surname</label>
                  <div className="surname-input-control box-border clear-both text-base relative text-left">
                    <input
                      type="text"
                      maxLength
                      placeholder="Cameroon"
                      className="inline-flex items-center justify-start relative align-top pl-0 bg-transparent rounded-0 border-b border-solid border-[#dedede] text-[#59595b] text-[14px] leading-[20px] font-normal max-w-full w-full h-[32px] shadow-none active:outline-none focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              {/* Country & Mobile NUmber */}
              <div className="country-phone flex mb-[20px]">
                <div className="flex-[1] mb-0">
                  <label className="label-country text-[#59595b] text-[0.875rem] font-normal mb-[0.5em] block">Country</label>
                  <div className="country-box relative outline-none cursor-default border-none box-border clear-both text-base text-left">
                    <div className="country-picker pl-0 bg-transparent rounded-none border-b border-solid border-[#dedede] pr-[32px] text-[#59595b] shadow-none h-[32px] text-[14px] leading-[20px] font-normal w-full max-w-full inline-flex items-center justify-start relative align-top">
                      <input type="text" autoComplete="off" spellCheck="false" placeholder="+62" tabIndex="0" className="picker-country-input w-0 text-[#59595b] absolute p-0 m-0 outline-none border-none touch-manipulation" />
                      <span className="picker-code-number touch-manipulation">
                        <span className="mr-[5px]">
                          <span className="shadow relative inline-block w-[1.33em] leading-[1em]">
                            <img src="https://cdn.airpaz.com/nuxt/e2afd171e6a62816237b8c39bdb26ccc.svg" alt="" />
                          </span>
                        </span>
                        +62
                      </span>
                    </div>
                    <div className="picker-code-number-icon right-0 transition-transform duration-[0.15s] ease-out h-[32px] text-[#dbdbdb] pointer-events-none absolute top-0 w-[32px] z-[4] inline-flex items-center justify-center align-[-0.125em]">
                      <BiChevronDown size="1.3rem" />
                    </div>
                    <div className="hidden">{/* //! DropDown Component */}</div>
                  </div>
                </div>
                <div className="phone-number-box ml-[20px] mb-0 flex-[3]">
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
                <span className="text-[18px] leading-[25px] font-normal">Login</span>
              </button>
              {/* Button Google */}
              <button className="button-google p-[15px_25px] text-[18px] leading-[25px] border-none flex w-full shadow-md mt-[30px] font-bold touch-manipulation transition-shadow duration-[.25s] will-change-[box-shadow] relative text-[#9a9a9d] cursor-pointer justify-center text-center whitespace-nowrap bg-white items-center align-top hover:shadow-sm hover:text-[#59595b]">
                <img src="https://cdn.airpaz.com/nuxt/8584e352a276fbbc255e780a7b081934.svg" alt="" className="icon-google w-[20px] mr-[5px] h-[1.5em] relative inline-flex items-center justify-center align-[-0.125em]" />
                <span className="text-[18px] leading-[25px] font-bold ml-1">Sign Up with Google</span>
              </button>
              {/* Terms & Conditions */}
              <div className="term-condition px-[70px] py-[30px]">
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
          <div className="bg-[#f7f7f7] border-b-0 border-r-0 border-l-0 p-[30px] rounded-b-md text-[#59595b] block text-center">
            <p className="text-[14px] leading-[20px] font-normal">
              Already an Airsanz member?{" "}
              <span className="ml-[3px]">
                <a href="/" className="cursor-pointer text-[#59595b] font-bold">
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
