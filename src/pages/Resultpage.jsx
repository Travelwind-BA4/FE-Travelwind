import React, { useEffect } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { SiChinasouthernairlines } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiSuitcase2Line } from "react-icons/ri";
import { useNavigate, useSearchParams } from "react-router-dom";
import useSchedule from "../services/api/useSchedule";
import convertDiff from "../utils/convertDiff";
import { Select, Pagination } from "antd";
import { useState } from "react";

const Resultpage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const depAirport = searchParams.get("depAirport");
  const arrAirport = searchParams.get("arrAirport");
  const depDate = searchParams.get("depDate");
  const traveler = searchParams.get("traveler");
  const { schedules, getSchedule, byPrice } = useSchedule();
  const [lowerPrice, setLowerPrice] = useState(false)
  const [higherPrice, setHigherPrice] = useState(false)
  const [earlyDepr, setEarlyDep] = useState(false)
  const [lateDepr, setLateDep] = useState(false)
  const [earlyArri, setEarlyArri] = useState(false)
  const [lateArri, setLateArri] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    getSchedule({ depAirport, arrAirport, depDate });
  }, []);

  const filter = (val) => {
    const payload = {
      depAirport: depAirport,
      arrAirport: arrAirport,
      depDate: depDate,
      page: 0,
    };

    byPrice(val, payload);
  }

  const lower = (val) => {
    const payload = {
      depAirport: depAirport,
      arrAirport: arrAirport,
      depDate: depDate,
      page: 0,
    };
    setLowerPrice(true)
    setHigherPrice(false)
    setEarlyDep(false)
    setLateDep(false)
    setEarlyArri(false)
    setLateArri(false)
    byPrice(val, payload);
  };

  const higher = (val) => {
    const payload = {
      depAirport: depAirport,
      arrAirport: arrAirport,
      depDate: depDate,
      page: 0,
    };
    setLowerPrice(false)
    setHigherPrice(true)
    setEarlyDep(false)
    setLateDep(false)
    setEarlyArri(false)
    setLateArri(false)
    byPrice(val, payload);
  };

  const earlDep = (val) => {
    const payload = {
      depAirport: depAirport,
      arrAirport: arrAirport,
      depDate: depDate,
      page: 0,
    };
    setLowerPrice(false)
    setHigherPrice(false)
    setEarlyDep(true)
    setLateDep(false)
    setEarlyArri(false)
    setLateArri(false)
    byPrice(val, payload);
  };

  const lateDep = (val) => {
    const payload = {
      depAirport: depAirport,
      arrAirport: arrAirport,
      depDate: depDate,
      page: 0,
    };
    setLowerPrice(false)
    setHigherPrice(false)
    setEarlyDep(false)
    setLateDep(true)
    setEarlyArri(false)
    setLateArri(false)
    byPrice(val, payload);
  };

  const earlArr = (val) => {
    const payload = {
      depAirport: depAirport,
      arrAirport: arrAirport,
      depDate: depDate,
      page: 0,
    };
    setLowerPrice(false)
    setHigherPrice(false)
    setEarlyDep(false)
    setLateDep(false)
    setEarlyArri(true)
    setLateArri(false)
    byPrice(val, payload);
  };

  const lateArr = (val) => {
    const payload = {
      depAirport: depAirport,
      arrAirport: arrAirport,
      depDate: depDate,
      page: 0,
    };
    setLowerPrice(false)
    setHigherPrice(false)
    setEarlyDep(false)
    setLateDep(false)
    setEarlyArri(false)
    setLateArri(true)
    byPrice(val, payload);
  };
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
                <p className="text-lg font-medium">
                  {depAirport} - {arrAirport}
                </p>
                <p className="text-base font-light">{new Date(depDate).toDateString()}</p>
              </div>
            </div>
            {/* <div className="flight-header-item sm:block hidden">
            <div className="flight-header-item sm:block hidden">
              <button
                onClick={() => navigate('/')}
                className="text-base text-white rounded-md border bg-transparent border-white border-solid flex w-full py-2 px-6 "
              >
                Change Search
              </button>
            </div> */}
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
                <button
                  className="text-base font-medium text-gray-500 rounded-md w-full py-2 px-6 bg-gray-200 hover:bg-gray-100"
                  onClick={() => navigate("/")}
                >
                  Change Date
                </button>
              </div>
            

            <div className="flex flex-1 justify-between items-center mt-2">
              <div className="flex flex-row items-center list-filter gap-2 mx-5 py-2">
                <p>Filter: </p>
                <div className="sm:flex sm:gap-4 hidden">/
                  <div className="flex gap-4">
                    <button value="lower-price" onClick={(e) => lower(e.target.value)} className={`rounded-md  px-3 text-sm py-1 hover:bg-gray-400 ${lowerPrice ? 'bg-gray-500' : 'bg-gray-300'}`}>
                      Lower
                    </button>
                    <button value="higher-price" onClick={(e) => higher(e.target.value)} className={`rounded-md  px-3 text-sm py-1 hover:bg-gray-400 ${higherPrice ? 'bg-gray-500' : 'bg-gray-300'}`}>
                      Higher</button>
                  </div> 
                  <div className="flex gap-4">
                    <button value="earliest-departure" onClick={(e) => earlDep(e.target.value)} className={`rounded-md  px-3 text-sm py-1 hover:bg-gray-400 ${earlyDepr? 'bg-gray-500' : 'bg-gray-300'}`}>Earliest Departure</button>
                    <button value="latest-departure" onClick={(e) => lateDep(e.target.value)} className={`rounded-md  px-3 text-sm py-1 hover:bg-gray-400 ${lateDepr ? 'bg-gray-500' : 'bg-gray-300'}`}>Latest Departure</button>
                    <button value="earliest-arrival" onClick={(e) => earlArr(e.target.value)} className={`rounded-md  px-3 text-sm py-1 hover:bg-gray-400 ${earlyArri ? 'bg-gray-500' : 'bg-gray-300'}`}>Earliest Arrival</button>
                    <button value="latest-arrival" onClick={(e) => lateArr(e.target.value)} className={`rounded-md  px-3 text-sm py-1 hover:bg-gray-400 ${lateArri ? 'bg-gray-500' : 'bg-gray-300'}`}>Latest Arrival</button>
                  </div>
                </div>
                <div className="flex button-filter gap-3 sm:hidden">
                  <Select
                    className="bg-gray-200 rounded-md"
                    placeholder="Prices"
                    bordered={false}
                    onSelect={filter}
                  >
                    <Select.Option key={1} value="lower-price">
                      <h1>Lower Prices</h1>
                    </Select.Option>
                    <Select.Option key={2} value="higher-price">
                      <h1>High Prices</h1>
                    </Select.Option>
                  </Select>
                  <Select className="bg-gray-200 rounded-md" placeholder="Times" bordered={false} onSelect={lower}>
                    <Select.Option key={1} value="earliest-departure">
                      <h1>earliest departure</h1>
                    </Select.Option>
                    <Select.Option key={2} value="latest-departure">
                      <h1>latest departure</h1>
                    </Select.Option>
                    <Select.Option key={3} value="earliest-arrival">
                      <h1>earliest arrival</h1>
                    </Select.Option>
                    <Select.Option key={4} value="latest-arrival">
                      <h1>latest arrival</h1>
                    </Select.Option>
                  </Select>
                </div>
                
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:gap-y-6 gap-y-2 mt-3 mb-10">
            {schedules.map((schedule, i) => {
              return (
                <>
                  <div className="sm:flex hidden justify-between items-center gap-4 bg-[#f1f5f5] rounded-md  px-5 py-8" key={i}>
                    <div className="flex items-center">
                      <div className="mx-8">
                        <SiChinasouthernairlines size="2.5rem" />
                        <p className="text-sm">{schedule.airplaneName}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-xl">{schedule.departureTime}</p>
                        <p className="font-light text-sm">{schedule.departureCity}</p>
                      </div>
                      <AiOutlineArrowRight size="1.4rem" className="text-gray-400 mx-5" />
                      <div>
                        <p className="font-semibold text-xl">{schedule.arrivalTime}</p>
                        <p className="font-light text-sm">{schedule.arrivalCity}</p>
                      </div>
                      <div className="duration mx-8  lg:block hidden">
                        <p className="font-semibold text-xl">{convertDiff(schedule.departureTime, schedule.arrivalTime)}</p>
                        <p className="font-light text-sm">{schedule.status}</p>
                      </div>
                      <div className="items-center mx-8 lg:flex hidden">
                        <RiSuitcase2Line size="1.2rem" className="mr-4" />
                        <p className="font-light">20kg</p>
                      </div>
                      <div className="price mx-8">
                        <p className="font-semibold text-xl">
                          {schedule.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="button-choose mr-12 md:block hidden">
                      <button className="bg-blue-700 text-sm font-medium text-white rounded-md py-2 px-2 hover:bg-blue-600" onClick={() => navigate(`/flight/${schedule.scheduleId}?traveler=${traveler}`)}>
                        Choose Flight
                      </button>
                    </div>
                  </div>

                  {/* mobile phone */}
                  <div className="justify-between items-center grid grid-cols-4 bg-[#f1f5f5] rounded-md my-2  px-5 py-8 sm:hidden" key={i} onClick={() => navigate(`/flight/${schedule.scheduleId}?traveler=${traveler}`)}>
                    <div className="mx-4">
                      <SiChinasouthernairlines size="2.5rem" />
                      <p className="text-sm">{schedule.airplaneName}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-xl">{schedule.departureTime}</p>
                      <p className="font-light text-sm">{schedule.departureCity}</p>
                    </div>
                    <AiOutlineArrowRight size="1.4rem" className="text-gray-400 mx-5" />
                    <div>
                      <p className="font-semibold text-xl">{schedule.arrivalTime}</p>
                      <p className="font-light text-sm">{schedule.arrivalCity}</p>
                    </div>
                    <div className="duration mx-8  lg:block hidden">
                      <p className="font-semibold text-xl">{convertDiff(schedule.departureTime, schedule.arrivalTime)}</p>
                      <p className="font-light text-sm">{schedule.status}</p>
                    </div>
                    <div className="items-center mx-8 lg:flex hidden">
                      <RiSuitcase2Line size="1.2rem" className="mr-4" />
                      <p className="font-light">20kg</p>
                    </div>
                    <div className="price mx-8 col-span-4  bg-[#0e67b4] text-white rounded-lg mt-4">
                      <p className="font-semibold text-xl text-center">
                        {schedule.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </p>
                    </div>

                    <div className="button-choose mr-12 md:block hidden">
                      <button className="bg-blue-700 text-sm font-medium text-white rounded-md py-2 px-2 hover:bg-blue-600" onClick={() => navigate(`/flight/${schedule.scheduleId}?traveler=${traveler}`)}>
                        Choose Flight
                      </button>
                    </div>
                  </div>
                  
                </>
              );
            })}
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Resultpage;
