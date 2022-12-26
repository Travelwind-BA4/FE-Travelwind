import React from "react";
import { logo_white, logo_mini } from "../assets/images/logo/index";
import { useNavigate } from "react-router-dom";
import { Form, Input, Alert } from "antd";
import useUsers from "../services/api/useUsers";

const Loginpage = () => {
  <Alert message="Success Text" type="success" />;
  const navigate = useNavigate();
  const { postLogin } = useUsers();

  const Auth = (val) => {
    postLogin(val);
  };

  return (
    <div className=" sm:bg-gradient-to-br from-[#2c4282] via-[#3e5cb8] to-[#4a6fde]">
      <div className="wrapper-form-login flex flex-col items-center min-h-[100vh] container m-auto">
        <button onClick={() => navigate("/")} className="cursor-pointer no-underline sm:m-auto sm:pt-10 mt-14">
          <img className="w-64 hidden sm:block" src={logo_white} alt="" />
          <img className="w-24 sm:hidden" src={logo_mini} alt="" />
        </button>
        <div className="login-form-box sm:w-[590px] w-auto overflow-hidden text-base rounded-md mx-auto my-14">
          <div className="panel-1 p-[50px_50px_20px_50px] bg-white text-[#59595b] relative block">
            <Form
              onFinish={Auth}
              requiredMark={false}
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <h1 className="login-form mb-[30px] text-[18px] leading-[25px] font-bold">Login</h1>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                  { whitespace: true },
                  { type: "email", message: "Your Email not valid" },
                ]}
                hasFeedback
                className="email-label text-[#59595b] text-[0.875rem] font-normal block border-b border-gray-400"
              >
                <Input placeholder="Enter Email Address" bordered={false} />
              </Form.Item>
              <br></br>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                  { min: 8 },
                ]}
                hasFeedback
                className="email-label text-[#59595b] text-[0.875rem] font-normal block border-b border-gray-400"
              >
                <Input.Password placeholder="Enter Password" bordered={false} />
              </Form.Item>
              <br></br>
              <button
                type="submit"
                className="button-signup p-[15px_25px] text-[18px] leading-[25px] border-none rounded-md flex w-full bg-[#3e5cb8] text-white shadow-md mb-[20px] font-bold touch-manipulation transition-shadow duration-[0.25s] will-change-[box-shadow] relative cursor-pointer justify-center text-center whitespace-nowrap items-center align-top hover:shadow-none hover:bg-[#3855aa]"
              >
                <span className="text-[18px] leading-[25px] font-normal">Log In</span>
              </button>

              <button className="button-google p-[15px_25px] text-[18px] leading-[25px] border-none flex w-full shadow-md mt-[30px] font-bold touch-manipulation transition-shadow duration-[.25s] will-change-[box-shadow] relative text-[#9a9a9d] cursor-pointer justify-center text-center whitespace-nowrap bg-white items-center align-top hover:shadow-sm hover:text-[#59595b]">
                <img src="https://cdn.airpaz.com/nuxt/8584e352a276fbbc255e780a7b081934.svg" alt="" className="icon-google w-[20px] mr-[5px] h-[1.5em] relative inline-flex items-center justify-center align-[-0.125em]" />
                <span className="text-[18px] leading-[25px] font-bold ml-1">Log in with Google</span>
              </button>
            </Form>
          </div>
          <div className="sm:bg-[#f7f7f7] border-b-0 border-r-0 border-l-0 p-[30px] rounded-b-md text-[#59595b] block text-center">
            <p className="text-[14px] leading-[20px] font-normal">
              Not an Airsanz member?{" "}
              <span className="ml-[3px]">
                <a onClick={() => navigate("/register")} className="cursor-pointer text-[#59595b] font-bold">
                  Register now
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
