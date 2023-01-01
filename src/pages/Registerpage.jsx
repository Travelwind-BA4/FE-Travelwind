import React, { useState } from "react";
import { logo_white, logo_mini, logo_mini_white } from "../assets/images/logo/index";
import { Select, DatePicker, Form, Input, message } from "antd";
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import useUsers from "../services/api/useUsers";
import axios from "axios";

const Registerpage = () => {
  const [googleStatus, setGoogleStatus] = useState(null)
  const navigate = useNavigate();
  const dataGender = [
    {
      value: true,
      label: "Mr",
    },
    {
      value: false,
      label: "Ms",
    },
  ];

  const { postRegister } = useUsers();

  const googleResponse = async(credentialResponse) => {
    try {
      let decode = jwt_decode(credentialResponse.credential);
      await axios.post('https://api-flight.up.railway.app/user/sign-up', 
      {
        fullName: decode.name,
        email: decode.email,
        password: decode.sub,
        telephone: "8888888",
        birthDate: "2022-01-01",
        gender: true,
        rolesId: 2,
      }
      ).then((res) => {
        return res;
      })
      navigate('/login')
    } catch (error) {
      console.log("error")
      setGoogleStatus(error);
    }
  }

  const handleRegister = async (value) => {
    postRegister(value);
    navigate('/login')
  }

  return (
    <div className="sm:bg-gradient-to-br from-[#2c4282] via-[#3e5cb8] to-[#4a6fde] bg-gradient-to-br from-[#2c4282] via-[#3e5cb8] to-[#4a6fde]">
      <div className="wrapper-form-login flex flex-col items-center min-h-[100vh] container mx-auto m-auto">
        <a onClick={() => navigate("/")} className="cursor-pointer no-underline sm:m-auto sm:pt-10 mt-14">
          <img className="w-64 hidden sm:block" src={logo_white} alt="" />
          <img className="w-24 sm:hidden" src={logo_mini_white} alt="" />
        </a>
        <div className="login-form-box sm:w-[590px] w-auto overflow-hidden text-base rounded-md mx-auto my-14">
          <div className="panel-1 p-[50px_50px_20px_50px] bg-white text-[#59595b] relative block">
            <Form
            onFinish={handleRegister}
            requiredMark={false}
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true
            }}
            autoComplete="off"
            >
              <h1 className="login-form mb-[30px] text-[18px] leading-[25px] font-bold">
                Create Account
              </h1>
              <Form.Item
              label="Title"
              name="gender"
              className="border-b w-[100px]"
              rules={[
                {
                  required: true,
                  message: "Please select your tittle"
                }
              ]}
              hasFeedback
              // style={{ borderBottom: "1px solid black", width: "100px" }}
              >
                <Select
                placeholder="Mr"
                bordered={false}
                options={dataGender}
                />
              </Form.Item>

              <div className="wrapper-name flex gap-14">
                  <Form.Item
                  label="Full name"
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Full name"
                    },
                    {
                      whitespace: true,
                      message: "can not empty"
                    },
                    { min: 5 ,
                      message:"Must be at least 5 characters"
                    }
                  ]}
                  hasFeedback
                  className="border-b rounded-none"
                  >
                    <Input placeholder="James" bordered={false}/>
                  </Form.Item>

                  <Form.Item
                  label="Birth Date"
                  name="birthDate"
                  className="rounded-none border-b"
                  rules={[
                    {
                      required: true,
                      message: "Please input your birth date"
                    }
                  ]}
                  hasFeedback
                  >
                    <DatePicker
                    format={"YYYY/MM/DD"} bordered={false} picker="date"
                    />
                  </Form.Item>
              </div>

              <Form.Item
              label="Telephone Number"
              name="telephone"
              className="border-b rounded-none"
              rules={[
                {
                  required: true,
                  message: "Please input your Telephone"
                },
              ]}
              hasFeedback
              >
                <Input placeholder="ex.81374234231" bordered={false} />
              </Form.Item>

              <Form.Item
              label="Email"
              name="email"
              className="border-b rounded-none"
              rules={[
                {
                  required: true,
                  message: "Please input your Email Address"
                },
                { type: "email",
                  message: "Your Email not valid"
                }
              ]}
              hasFeedback
              >
                <Input placeholder="Enter Email Address" bordered={false}/>
              </Form.Item>

              <Form.Item
              label="Password"
              name="password"
              className="border-b rounded-none"
              rules={[
                {
                  required: true,
                  message: "Please input your Password"
                },
                { min: 8 }
              ]}
              hasFeedback
              >
                <Input.Password placeholder="Enter Password" bordered={false}/>
              </Form.Item>
              <br></br>
              <GoogleOAuthProvider clientId="953090499155-f5pgpt16s6lhge53hhi4s5cm5dg18in3.apps.googleusercontent.com">
                <button type="submit" className="button-signup p-[15px_25px] text-[18px] leading-[25px] border-none rounded-md flex w-full bg-[#3e5cb8] text-white shadow-md mb-[20px] font-bold touch-manipulation transition-shadow duration-[0.25s] will-change-[box-shadow] relative cursor-pointer justify-center text-center whitespace-nowrap items-center align-top hover:shadow-none hover:bg-[#3855aa]">
                  <span className="text-[18px] leading-[25px] font-normal">Register</span>
                </button>
              
                <GoogleLogin
                locale="en"
                text="signup_with"
                onSuccess={googleResponse}
                />

                {/* <button className="button-google p-[15px_25px] text-[18px] leading-[25px] border-none flex w-full shadow-md mt-[30px] font-bold touch-manipulation transition-shadow duration-[.25s] will-change-[box-shadow] relative text-[#9a9a9d] cursor-pointer justify-center text-center whitespace-nowrap bg-white items-center align-top hover:shadow-sm hover:text-[#59595b]">
                  <img src="https://cdn.airpaz.com/nuxt/8584e352a276fbbc255e780a7b081934.svg" alt="" className="icon-google w-[20px] mr-[5px] h-[1.5em] relative inline-flex items-center justify-center align-[-0.125em]" />
                  <span className="text-[18px] leading-[25px] font-bold ml-1">Register with Google</span>
                </button> */}
              </GoogleOAuthProvider>
              
              
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

            </Form>
            {/* <form className="login-form" onSubmit={handleRegister}>
              <h1 className="mb-[30px] text-[18px] leading-[25px] font-bold">Register</h1>
              
              <label className="name-input text-[#59595b] text-[0.875rem] font-normal mb-[0.5em] block">Title</label>
              <Select
                className="title-select max-w-[100px] mb-[20px] border-b"
                placeholder="Mr"
                bordered={false}
                style={{ padding: "0" }}
                options={[
                  {
                    value: true,
                    label: "Mr",
                  },
                  {
                    value: false,
                    label: "Ms",
                  },
                ]}
                onChange={(value) => {
                  setGender(value)
                }}
              />
              
              <div className="name-form mb-[20px] flex">
                <div className="name-input-form flex-[1] mb-0">
                  <label className="name-input text-[#59595b] text-[0.875rem] font-normal mb-[0.5em] block">Full Name</label>
                  <div className="name-input-control box-border clear-both text-base relative text-left">
                    <input
                      type="text"
                      placeholder="Ex. James Taco"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="inline-flex items-center justify-start relative align-top pl-0 bg-transparent rounded-[0] border-b border-solid border-[#dedede] shadow-none h-[32px] text-[14px] leading-[20px] font-normal max-w-full w-full active:outline-none focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="birthDate-input-form ml-[20px] flex-[1] mb-0">
                  <label className="birthDate-input px-3 text-[#59595b] text-[0.875rem] font-normal mb-[0.5em] block">Birth Date</label>
                  <div className="birthDate-input-control box-border clear-both text-base relative text-left"></div>
                  
                  <DatePicker
                  defaultValue={dayjs("2022/12/17", "YYYY/MM/DD")} format={"YYYY/MM/DD"} bordered={false} picker="date"
                  onChange={(date, dateString) => {
                    console.log(date, dateString);
                    setBirthDate({birthDate: dateString, date})
                  }}/>
                  
                </div>
              </div>
              
              <div className="country-phone flex mb-[20px]">
                <div className="phone-number-box mb-0 flex-[1]">
                  <label className="label-phone text-[#59595b] font-normal text-[0.875rem] mb-[0.5em] block">Mobile Number</label>
                  <div className="phone-number-control box-border clear-both text-base relative text-left">
                    <input
                      type="text"
                      placeholder="e.g 81234567890"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      className="pl-0 bg-transparent rounded-none border-b border-solid border-[#dedede] shadow-none h-[32px] text-[14px] leading-[20px] font-normal max-w-full w-full inline-flex items-center justify-start relative align-top m-0 active:outline-none focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              
              <div className="email-form mb-[20px]">
                <label className="email-label text-[#59595b] text-[0.875rem] font-normal block">Email</label>
                <div className="email-control box-border clear-both text-base relative text-left">
                  <input
                    type="email"
                    placeholder="james@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-0 bg-transparent rounded-none border-b border-solid border-[#dedede] text-[#59595b] shadow-none h-[32px] text-[14px] leading-[20px] font-normal w-full max-w-full inline-flex items-center relative align-top active:outline-none focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="password-form mb-[50px]">
                <label className="password-label text-[#59595b] text-[0.875rem] font-normal block">Password</label>
                <div className="password-control box-border clear-both text-base relative text-left">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-0 bg-transparent rounded-none border-b border-solid border-[#dedede] text-[#59595b] shadow-none h-[32px] text-[14px] leading-[20px] font-normal w-full max-w-full inline-flex items-center relative align-top active:outline-none focus:outline-none"
                  />
                  <div onClick={() => setShowPass(!showPass)} className="pointer-events-auto cursor-pointer right-0 h-[32px] text-[#dbdbdb] absolute top-0 w-[32px] z-[4] inline-flex items-center justify-center align-[-0.125em]">
                    {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
              </div>
              
              <button type="submit" className="button-signup p-[15px_25px] text-[18px] leading-[25px] border-none rounded-md flex w-full bg-[#3e5cb8] text-white shadow-md mb-[20px] font-bold touch-manipulation transition-shadow duration-[0.25s] will-change-[box-shadow] relative cursor-pointer justify-center text-center whitespace-nowrap items-center align-top hover:shadow-none hover:bg-[#3855aa]">
                <span className="text-[18px] leading-[25px] font-normal">Register</span>
              </button>
              
              <button className="button-google p-[15px_25px] text-[18px] leading-[25px] border-none flex w-full shadow-md mt-[30px] font-bold touch-manipulation transition-shadow duration-[.25s] will-change-[box-shadow] relative text-[#9a9a9d] cursor-pointer justify-center text-center whitespace-nowrap bg-white items-center align-top hover:shadow-sm hover:text-[#59595b]">
                <img src="https://cdn.airpaz.com/nuxt/8584e352a276fbbc255e780a7b081934.svg" alt="" className="icon-google w-[20px] mr-[5px] h-[1.5em] relative inline-flex items-center justify-center align-[-0.125em]" />
                <span className="text-[18px] leading-[25px] font-bold ml-1">Register with Google</span>
              </button>
              
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
            </form> */}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
