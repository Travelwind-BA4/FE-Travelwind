import React, { useState } from "react";
import Homeslider from "../components/Slider/Homeslider";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsCalendarDate, BsSearch, BsCalendar4Event, BsBookmarkCheck, BsCheckSquare } from "react-icons/bs";
import { header_1, promotion_1 } from "../assets/images/home";

const Homepage = () => {
  const [active, setActive] = useState(false);

  const test = (e) => {
    e.preventDefault();
  };
  return (
    <div className>
      <section>
        <div className="mx-10 mt-5">
          <Homeslider />
        </div>
        <div className="container mx-auto px-10 mt-8 mb-20">
          <div className="border-2 rounded-xl shadow-md">
            <div className="flex justify-center mt-7">
              <div className="max-w-[300px]  bg-[#f1f5f5] border-2 rounded-full p-4">
                <form>
                  <button className="btn-active  py-3 px-6 rounded-full" onClick={(e) => test(e)}>
                    One Trip
                  </button>
                  <button className="btn py-3 px-6 rounded-full" onClick={(e) => test(e)}>
                    Round Trip
                  </button>
                </form>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 my-8 px-2">
                <div className=" flex items-center">
                  <div className="bg-[#f1f5f5] p-3 rounded-xl">
                    <GiAirplaneDeparture className="text-[30px]" />
                  </div>
                  <div className="pl-2">
                    <div>
                      <h1 className="text-lg font-medium">Location From</h1>
                      <div className="">
                        <input type="text" placeholder="Bali Denpasar (DPS)" className="border-none outline-0" />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className=" flex items-center">
                  <div className="bg-[#f1f5f5] p-3 rounded-xl">
                    <GiAirplaneArrival className="text-[30px]" />
                  </div>
                  <div className="pl-2">
                    <div>
                      <h1 className="text-lg font-medium">Location To</h1>
                      <div className="">
                        <input type="text" placeholder="Bali Denpasar (DPS)" className="border-none outline-0" />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className=" flex items-center">
                  <div className="bg-[#f1f5f5] p-3 rounded-xl">
                    <BsCalendarDate className="text-[30px]" />
                  </div>
                  <div className="pl-2">
                    <div>
                      <h1 className="text-lg font-medium">Departure Date</h1>
                      <div className="">
                        <input type="date" className="border-none outline-0" />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className=" flex items-center">
                  <div className="bg-[#f1f5f5] p-3 rounded-xl">
                    <AiOutlineUserAdd className="text-[30px]" />
                  </div>
                  <div className="pl-2">
                    <div>
                      <h1 className="text-lg font-medium">Traveler</h1>
                      <div className="">
                        <input type="button" className="border-none outline-0" value="3 Travelers" />
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="pl-8">
                    <button className="btn-active p-4 rounded-full">
                      <BsSearch className="text-[20px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="container mx-auto px-10">
          <h1 className="text-center text-4xl font-semibold text-[#232730]">Why Flight Ticket</h1>
          <div className="grid lg:grid-cols-3 grid-cols-2 mt-20 gap-y-20 justify-items-center">
            <div className="col-span-1 text-center max-w-[300px]">
              <div className=" flex justify-center">
                <img src={promotion_1} className="" />
              </div>
              <h1 className="text-lg font-semibold mt-4 text-[#59595b]">Simplify Your Booking Experience</h1>
              <p className="mt-3 text-[#b4b4b7]">Feel the flexibility and simplicity throughout your booking process</p>
            </div>
            <div className="col-span-1 text-center max-w-[300px]">
              <div className=" flex justify-center">
                <img src={promotion_1} className="" />
              </div>
              <h1 className="text-lg font-semibold mt-4 text-[#59595b]">Simplify Your Booking Experience</h1>
              <p className="mt-3 text-[#b4b4b7]">Feel the flexibility and simplicity throughout your booking process</p>
            </div>
            <div className="lg:col-span-1 col-span-2 text-center max-w-[300px]">
              <div className=" flex justify-center">
                <img src={promotion_1} className="" />
              </div>
              <h1 className="text-lg font-semibold mt-4 text-[#59595b]">Simplify Your Booking Experience</h1>
              <p className="mt-3 text-[#b4b4b7]">Feel the flexibility and simplicity throughout your booking process</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#DCE2E5] mt-20">
        <div className="container mx-auto py-20 px-10">
          <div className="flex justify-between items-center mt-7">
            <h1 className="text-5xl font-bold text-[#232730] leading-[60px]">
              Travel to make memories <br /> all around world
            </h1>
            <button className="py-4 px-6 bg-[#f1f5f5] border-2 rounded-full">View All</button>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-5 gap-y-5 mt-10 justify-items-center max-w-[1300px] mx-auto">
            <div className="col-span-1 bg-[#fff]  flex justify-center items-center text-center rounded-3xl p-10 shadow-lg max-w-[400px]">
              <div>
                <div className="flex justify-center">
                  <div className="flex justify-center bg-[#3e5cb8] text-white p-10 rounded-full ">
                    <BsCalendar4Event className="text-5xl" />
                  </div>
                </div>
                <h1 className="font-medium font-sans text-2xl mt-8">BOX & RELAX</h1>
                <p className=" mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, eius. Ipsa in illum reiciendis sit.</p>
              </div>
            </div>
            <div className="col-span-1 bg-[#fff]  flex justify-center items-center text-center rounded-3xl p-10 shadow-lg max-w-[400px]">
              <div>
                <div className="flex justify-center">
                  <div className="flex justify-center bg-[#e98b6d] text-white p-10 rounded-full ">
                    <BsCheckSquare className="text-5xl" />
                  </div>
                </div>
                <h1 className="font-medium font-sans text-2xl mt-8">SMART CHECKLISH</h1>
                <p className=" mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, eius. Ipsa in illum reiciendis sit.</p>
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
                <p className=" mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, eius. Ipsa in illum reiciendis sit.</p>
              </div>
            </div>
            {/* <div className="col-span-1 bg-[#fff]  flex justify-center items-center text-center rounded-full ">
              <div>
                <div className="flex justify-center">
                  <div className="flex justify-center bg-[#e98b6d] text-white py-10 rounded-full min-w-[150px]">
                    <BsCalendar4Event className="text-5xl" />
                  </div>
                </div>
                <h1 className="font-medium font-sans text-2xl mt-8">BOX & RELAX</h1>
                <p className="px-8 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, eius. Ipsa in illum reiciendis sit.</p>
              </div>
            </div> */}
            {/* min-h-[650px] */}
            {/* <div className="col-span-1 bg-[#fff]  flex justify-center items-center text-center rounded-full ">
              <div>
                <div className="flex justify-center">
                  <div className="flex justify-center bg-[#ffcea2] text-white py-10 rounded-full min-w-[150px]">
                    <BsCalendar4Event className="text-5xl" />
                  </div>
                </div>
                <h1 className="font-medium font-sans text-2xl mt-8">BOX & RELAX</h1>
                <p className="px-8 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, eius. Ipsa in illum reiciendis sit.</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="my-20 recomendation">
        <div className="container mx-auto px-10">
          <h1 className="text-2xl font-medium mb-5">Recommended for you</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <div className="col-span-1 recomendation-image"></div>
            <div className="col-span-1 recomendation-image"></div>
            <div className="col-span-1 recomendation-image"></div>
            <div className="col-span-1 recomendation-image"></div>
            <div className="col-span-1 recomendation-image"></div>
            <div className="col-span-1 recomendation-image"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
