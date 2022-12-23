import React, { useEffect, useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { SiChinasouthernairlines } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiSuitcase2Line } from "react-icons/ri";
import { useNavigate, useSearchParams } from "react-router-dom";
import useSchedule from "../services/api/useSchedule";
import Sorting from "../components/Dropdown/Sorting";

const Resultpage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDate, setShowDate] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const depAirport = searchParams.get("depAirport");
  const arrAirport = searchParams.get("arrAirport");
  const depDate = searchParams.get("depDate");
  const traveler = searchParams.get("traveler");
  const { schedules, getSchedule } = useSchedule();
  const navigate = useNavigate();
  const { byPrices } = Sorting();
  useEffect(() => {
    getSchedule({ depAirport, arrAirport, depDate });
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-[#3d74eb]">
        <div className="py-5 container mx-auto px-10 ">
          <div className="flight-header flex items-center">
            <div className="flight-header-item flex flex-1 text-white">
              <div className="icon pr-4 inline-flex relative items-center justify-center align-[-0.125rem]">
                <GiAirplaneDeparture size="2rem" />
              </div>
              <div className="description ">
                <p className="text-lg font-medium">Select Departure Flight</p>
                <p className="text-base font-light">
                  <span>
                    {depAirport} - {arrAirport}
                  </span>
                  <span className="px-1"> | </span> {new Date(depDate).toDateString()}
                </p>
              </div>
            </div>
            <div className="flight-header-item sm:block hidden">
              <button onClick={() => setShowForm(!showForm)} className="text-base text-white rounded-md border bg-transparent border-white border-solid flex w-full py-2 px-6 ">
                Change Search
              </button>
            </div>
          </div>
          <div className={showForm ? "flight-form flex py-10 mx-10" : "hidden"}>
            <div className="flight-header-form-item flex flex-1">
              <div className="type-flight flex gap-3">
                <button>One Way</button>
                <button>Round Trip</button>
              </div>
            </div>
            <form className="form-box"></form>
          </div>
        </div>
      </section>
      <section>
        <div className="container sm:mx-auto sm:p-10 mt-4 ">
          <div className="flex flex-col  bg-[#f1f5f5] rounded-md">
            <div className="flex flex-row justify-between items-center border-b border-gray-300">
              <div className="mx-5 py-2">
                <p className="font-semibold text-xl mb-1">Departure Flight to Test</p>
                <p className="text-base font-light pb-2">
                  {new Date(depDate).toDateString()} <span> | </span> {`${traveler} Traveler`}
                </p>
              </div>
              <div className="mx-8">
                <button className="text-base font-medium text-gray-500 rounded-md w-full py-2 px-6 bg-gray-200 hover:bg-gray-100" onClick={() => setShowDate(!showDate)}>
                  Change Date
                </button>
              </div>
            </div>
            <div className={showDate ? "flex justify-center my-2 pt-2" : "hidden"}>
              <div className="bg-[#f1f5f5]">
                <h1>Coming Soon</h1>
              </div>
            </div>

            <div className="flex flex-1 justify-between items-center mt-2">
              <div className="flex flex-row items-center list-filter gap-2 mx-5 py-2">
                <p>Filter: </p>
                <div className="flex button-filter gap-3">
                  {byPrices()}
                  <button className="bg-gray-200 rounded-md px-5 py-1">Stops</button>
                  <button className="bg-gray-200 rounded-md px-5 py-1">Airlines</button>
                  <button className="bg-gray-200 rounded-md px-5 py-1">Departure</button>
                </div>
              </div>
              <div className="flex filter-sort gap-2 mx-5">
                <p>Sort: </p>
                <button>Sorting</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:gap-y-6 gap-y-2 mt-3">
            {schedules.map((schedule) => {
              return (
                <>
                  <div className="sm:flex sm:flex-row justify-between items-center gap-4 bg-[#f1f5f5] rounded-md hidden">
                    <div className="wrapper-list-ticket flex items-center px-5 py-8">
                      <div className="logo-maskapai mx-4">
                        <SiChinasouthernairlines size="2.5rem" />
                        <p className="text-sm">{schedule.airplaneName}</p>
                      </div>
                      <div className="departure mx-4 ml-12">
                        <p className="font-semibold text-xl">{schedule.departureTime}</p>
                        <p className="font-light text-sm">{schedule.departureCity}</p>
                      </div>
                      <AiOutlineArrowRight size="1.2rem" className="text-gray-400 mx-2" />
                      <div className="arrival mx-4">
                        <p className="font-semibold text-xl">{schedule.arrivalTime}</p>
                        <p className="font-light text-sm">{schedule.arrivalCity}</p>
                      </div>
                      <div className="duration mx-8 ml-16">
                        <p className="font-semibold text-xl">1H 30M</p>
                        <p className="font-light text-sm">{schedule.status}</p>
                      </div>
                      <div className="flex items-center mx-8">
                        <RiSuitcase2Line size="1.2rem" />
                        <p className="font-light">20kg</p>
                      </div>
                      <div className="price mx-8 ml-24">
                        <p className="font-semibold text-xl">{`Rp. ${schedule.price}`}</p>
                      </div>
                    </div>
                    <div className="button-choose mr-12">
                      <button className="bg-blue-700 text-sm font-medium text-white rounded-md py-2 px-2 hover:bg-blue-600" onClick={() => navigate(`/flight/${schedule.scheduleId}`)}>
                        Choose Flight
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
            <div className="flex justify-between items-center gap-4 bg-[#f1f5f5] rounded-md  px-5 py-8">
              <div className="flex items-center">
                <div className="mx-8">
                  <SiChinasouthernairlines size="2.5rem" />
                  <p className="text-sm">asdasd</p>
                </div>
                <div>
                  <p className="font-semibold text-xl">asdasd</p>
                  <p className="font-light text-sm">asdasd</p>
                </div>
                <AiOutlineArrowRight size="1.4rem" className="text-gray-400 mx-5" />
                <div>
                  <p className="font-semibold text-xl">asdasd</p>
                  <p className="font-light text-sm">asdasd</p>
                </div>
                <div className="duration mx-8  lg:block hidden">
                  <p className="font-semibold text-xl">1H 30M</p>
                  <p className="font-light text-sm">sadasd</p>
                </div>
                <div className="items-center mx-8 lg:flex hidden">
                  <RiSuitcase2Line size="1.2rem" className="mr-4" />
                  <p className="font-light">20kg</p>
                </div>
                <div className="price mx-8">
                  <p className="font-semibold text-xl">Rp. 1925000</p>
                </div>
              </div>
              <div className="button-choose mr-12 md:block hidden">
                <button className="bg-blue-700 text-sm font-medium text-white rounded-md py-2 px-2 hover:bg-blue-600">Choose Flight</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resultpage;
