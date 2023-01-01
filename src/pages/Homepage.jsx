import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsCalendarDate, BsSearch, BsCalendar4Event, BsBookmarkCheck, BsCheckSquare } from "react-icons/bs";
import "../styles/Home.css";
import { header_1, promotion_1, promotion_2, promotion_3, promotion_4 } from "../assets/images/home";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

import Date from "../components/Input/Date";
import Navbar from "../components/Navbar/Navbar";
import Homeslider from "../components/Slider/Homeslider";

import Trip from "../components/Segmanted/Trip";
import { Form } from "antd";
import timeConverter from "../utils/timeConverter";
import Number from "../components/Input/Number";
import useAirports from "../services/api/useAirports";
import { useEffect } from "react";
import Options from "../components/Input/Options";

const Homepage = () => {
  const navigate = useNavigate();
  const { getAirports, airports, searchAirport } = useAirports();

  useEffect(() => {
    getAirports();
  }, []);
  const searchFlight = ({ departureAirport, arrivalAirport, departureDate, traveler }) => {
    localStorage.setItem("traveler", JSON.stringify(traveler));
    navigate(`results/search?depDate=${timeConverter(departureDate)}&depAirport=${departureAirport}&arrAirport=${arrivalAirport}&traveler=${traveler}`);
  };

  return (
    <>
      <section className="relative sm:mb-[250px] mb-[450px]">
        <Navbar nav="absolute top-0 w-full z-10 text-white" notif="text-white" />
        <div className="h-[75vh] header">
          <div className=" bg-header bg-cover brightness-[0.85] w-full h-full absolute top-0" style={{ backgroundImage: `url(${header_1})`, zIndex: "-2" }}></div>
          <div className="flex flex-col justify-center h-full items-center text-white z-10 text-center">
            <h2 className="font-medium text-4xl mb-4"> Experience Your</h2>
            <h1 className="font-bold text-6xl  mb-6">Best Flight With Us</h1>
            <p className="text-xl">We have more than 1 million happy customer arround the world</p>
          </div>
          <div className="flex justify-center">
            <div className="border-2 rounded-xl shadow-md bg-[#fff] absolute sm:bottom-[-140px] bottom-[-400px] px-10 py-3 mx-5 lg:min-w-[800px] ">
              <div className="flex justify-center mt-7">
                <Trip />
              </div>
              <div className="flex justify-center">
                <Form className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 my-8 px-2" onFinish={searchFlight}>
                  <div className="flex items-center">
                    <div className="bg-[#f1f5f5] p-3 rounded-xl">
                      <GiAirplaneDeparture className="text-[30px]" />
                    </div>
                    <div className="pl-2">
                      <div>
                        <h1 className="text-lg font-medium pl-3">Location From</h1>
                        <Options placeholder="Soekarno Hatta ( JKT ) " name="departureAirport" styles="min-w-[200px]" airports={airports} searchAirport={searchAirport} />
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center">
                    <div className="bg-[#f1f5f5] p-3 rounded-xl">
                      <GiAirplaneArrival className="text-[30px]" />
                    </div>
                    <div className="pl-2">
                      <div>
                        <h1 className="text-lg font-medium pl-3">Location To</h1>
                        <Options placeholder="Soekarno Hatta ( JKT ) " name="arrivalAirport" airports={airports} styles="min-w-[200px]" />
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center">
                    <div className="bg-[#f1f5f5] p-3 rounded-xl">
                      <BsCalendarDate className="text-[30px]" />
                    </div>
                    <div className="pl-2">
                      <div>
                        <h1 className="text-lg font-medium pl-3">Departure Date</h1>
                        <Date name="departureDate" style="mb-0" />
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center">
                    <div className="bg-[#f1f5f5] p-3 rounded-xl">
                      <AiOutlineUserAdd className="text-[30px]" />
                    </div>
                    <div className="pl-2">
                      <div>
                        <h1 className="text-lg font-medium pl-2">Traveler</h1>
                        <Number />
                      </div>
                    </div>
                    <div className="pl-8 hidden lg:block">
                      <button className="btn-active p-4 rounded-full" type="submit">
                        <BsSearch className="text-[20px]" />
                      </button>
                    </div>
                  </div>
                  <div className="col-span-1 sm:col-span-2 lg:hidden">
                    <button className="btn-active w-full p-4 rounded-full" type="submit">
                      Search
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 recomendation ">
        <div className="container mx-auto px-10">
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-[#232730] leading-[60px]">Reccomended For You</h1>
            <p className="text-[#cfcfcf]">Here you will find all our luxorious tour packages in a reasonable range of cost</p>
          </div>
          <Homeslider />
        </div>
      </section>

      <section className="bg-[#DCE2E5] mt-20">
        <div className="container mx-auto py-20 px-10">
          <div className="block sm:flex justify-between items-center mt-7 text-center sm:text-start">
            <h1 className="text-5xl font-bold text-[#232730] leading-[60px]">
              Travel to make memories <br /> all around world
            </h1>
            <button className="py-4 px-6 bg-[#f1f5f5] border-2 rounded-full mt-5 sm:mt-0">View All</button>
          </div>
          <div className="sm:grid block lg:grid-cols-3 grid-cols-2 gap-x-5 gap-y-5 mt-10 justify-items-center max-w-[1300px] mx-auto">
            <div className="col-span-1 bg-[#fff]  flex justify-center items-center text-center rounded-3xl p-10 shadow-lg max-w-[400px]">
              <div>
                <div className="flex justify-center">
                  <div className="flex justify-center bg-[#3e5cb8] text-white p-10 rounded-full ">
                    <BsCalendar4Event className="text-5xl" />
                  </div>
                </div>
                <h1 className="font-medium font-sans text-2xl mt-8">BOX & RELAX</h1>
                <p className=" mt-3">We realize ideas from simple to complex,every become easy to use</p>
              </div>
            </div>
            <div className="col-span-1 bg-[#fff]  flex justify-center items-center text-center rounded-3xl p-10 shadow-lg max-w-[400px] my-10 sm:my-0">
              <div>
                <div className="flex justify-center">
                  <div className="flex justify-center bg-[#e98b6d] text-white p-10 rounded-full ">
                    <BsCheckSquare className="text-5xl" />
                  </div>
                </div>
                <h1 className="font-medium font-sans text-2xl mt-8">SMART CHECKLISH</h1>
                <p className=" mt-3">Flight booking in your mind looking for cheap</p>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2 bg-[#fff]  flex justify-center items-center text-center rounded-3xl p-10 shadow-lg max-w-[400px]">
              <div>
                <div className="flex justify-center">
                  <div className="flex justify-center bg-[#ffcea2] text-white p-10 rounded-full ">
                    <BsBookmarkCheck className="text-5xl" />
                  </div>
                </div>
                <h1 className="font-medium font-sans text-2xl mt-8">SAVE MORE</h1>
                <p className=" mt-3">Find cheap flight,travel great list ideals from over travel providers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="container mx-auto px-10">
          <h1 className="text-center text-4xl font-semibold text-[#232730] mb-12">Why Flight Ticket</h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 mt-20 gap-y-20 justify-items-center">
            <div className="col-span-1 text-center max-w-[300px]">
              <div className=" flex justify-center max-h-[140px]">
                <img src={promotion_1} className="" />
              </div>
              <h1 className="text-lg font-semibold mt-10 text-[#59595b]">Hassle-Free</h1>
              <p className="mt-3 text-[#b4b4b7]">Make a transaction from anywhere at any time, from desktop, mobile app, or mobile web. </p>
            </div>
            <div className="col-span-1 text-center max-w-[300px]">
              <div className=" flex justify-center  max-h-[140px]">
                <img src={promotion_2} className="" />
              </div>
              <h1 className="text-lg font-semibold mt-10 text-[#59595b]">Service You Can Trust</h1>
              <p className="mt-3 text-[#b4b4b7]">You get what you paid for – guaranteed.</p>
            </div>
            <div className="col-span-1 text-center max-w-[300px]">
              <div className=" flex justify-center  max-h-[140px]">
                <img src={promotion_3} className="" />
              </div>
              <h1 className="text-lg font-semibold mt-10 text-[#59595b]">Various Payment Options</h1>
              <p className="mt-3 text-[#b4b4b7]">Be more flexible with various payment methods from ATM, Bank Transfer, Credit Card, and Internet Banking, to Cash.</p>
            </div>
            <div className="col-span-1 text-center max-w-[300px]">
              <div className=" flex justify-center  max-h-[140px]">
                <img src={promotion_4} className="" />
              </div>
              <h1 className="text-lg font-semibold mt-10 text-[#59595b]">Secure Transaction Guaranteed</h1>
              <p className="mt-3 text-[#b4b4b7]">Security and privacy of your online transaction are protected by RapidSSL authorized technology. Receive instant confirmation and e-ticket or voucher directly in your email.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Homepage;
