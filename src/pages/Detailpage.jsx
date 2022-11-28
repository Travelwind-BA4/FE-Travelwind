import { BsArrowRight, BsCircle, BsClock } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiRollingSuitcase } from "react-icons/ci";
import { BiCabinet } from "react-icons/bi";

import Button2 from "../components/Buttons/Button2";
const Detailpage = () => {
  return (
    <div>
      <div className="container mx-auto py-10 px-10 h-screen">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-8">
          <div className="col-span-2 bg-[#f1f5f5]  px-8 pb-8  rounded-md">
            <div className="flex  justify-between items-center ">
              <div>
                <p className="mt-4 text-gray-400 text-base">Departure Flight</p>
                <h6 className="flex items-center">
                  Jakarta (CGK) <BsArrowRight className="mx-5 my-3" /> Bali Denpasar (DPS)
                </h6>
                <p className="text-gray-400 text-sm">1 Pax | Direct</p>
              </div>
              <Button2 name="Change Flight" style="rounded-lg sm:block hidden" />
            </div>
            <hr className="my-4" />
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-4">
              <div>
                <img />
                <p>Lion Air JT24 Boeing 737</p>
              </div>
              <div className="col-span-2 flex">
                <div className="pb-10">
                  <BsCircle />
                  <div className="w-0.5 h-full bg-[#c4c4c4] mx-auto"></div>
                  <BsCircle />
                </div>
                <div className="grid grid-cols-3">
                  <div className="col-span-1 flex flex-col justify-between ml-2">
                    <div>
                      <p>16:00</p>
                      <p className="text-gray-400 text-sm ">24 Nov 2022</p>
                    </div>
                    <div>
                      <p className="flex items-center text-gray-400 text-sm">
                        <BsClock className="mr-2" />
                        1h 50m
                      </p>
                    </div>
                    <div>
                      <p>08:50</p>
                      <p className="text-gray-400 text-sm">25 Nov 2022</p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div>
                      <h6>Jakarta ( CGK )</h6>
                      <p className="text-gray-400 text-sm">Soekarno Hatta International Airport Terminal 2E</p>
                    </div>
                    <div className="mt-10">
                      <h6>Jakarta ( CGK )</h6>
                      <p className="text-gray-400 text-sm">Soekarno Hatta International Airport Terminal 2E</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ul className="text-gray-400 text-sm">
                  <li className="flex items-center">
                    <BiCabinet className="mr-3 text-base" />
                    Cabin Baggage 7kg
                  </li>
                  <li className="flex items-center my-1">
                    <CiRollingSuitcase className="mr-3 text-base" />
                    Baggage 20kg
                  </li>
                  <li className="flex items-center">
                    <IoGameControllerOutline className="mr-3 text-base" />
                    Entertainment
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:ml-5 lg:col-span-1 col-span-2">
            <div className="bg-[#f1f5f5] p-4 rounded-md">
              <h1 className="font-medium text-xl">Total Price</h1>
              <div className="flex justify-between py-3  font-medium">
                <p>Depart (CGK to DPS)</p>
                <p>Rp. 2.137.740</p>
              </div>
            </div>
            <div className="mt-3">
              <button className="bg-[#3e5cb8] w-full text-white p-4 rounded-md font-semibold">Continue Booking</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
