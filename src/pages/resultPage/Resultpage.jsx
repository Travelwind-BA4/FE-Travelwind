import React, { useEffect, useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { SiChinasouthernairlines } from "react-icons/si";
import { AiOutlineArrowRight, AiOutlineDown } from "react-icons/ai";
import { RiSuitcase2Line } from "react-icons/ri";
import axios from "axios";

const Resultpage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [dummy, setDummy] = useState([]);

  const getData = async () => {
    const dataMovies = await axios.get(`https://637dc00ecfdbfd9a639bbbab.mockapi.io/api/v1/flight`);
    setDummy(dataMovies.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <section className="py-5">
          <div className="flight-header flex py-[10px] mx-[10rem] items-center">
            <div className="flight-header-item flex flex-1">
              <div className="icon pr-4 inline-flex relative items-center justify-center align-[-0.125rem]">
                <GiAirplaneDeparture size="2rem" />
              </div>
              <div className="description">
                <p className="text-lg font-medium">Select Departure Flight</p>
                <p className="text-base font-light">
                  <span>KNO -JKT</span>
                  <span className="px-1"> | </span> Wed, 24 Nov
                </p>
              </div>
            </div>
            <div className="flight-header-item">
              <button onClick={() => setShowForm(!showForm)} onCLi className="text-base text-blue-600 rounded-md border bg-transparent border-blue-600 border-solid flex w-full py-2 px-6 hover:bg-blue-700 hover:text-white">
                Change Search
              </button>
            </div>
          </div>
          <div className={showForm ? "flight-form flex py-[10px] mx-[10rem]" : "hidden"}>
            <div className="flight-header-form-item flex flex-1">
              <div className="type-flight flex gap-3">
                <button>One Way</button>
                <button>Round Trip</button>
              </div>
            </div>
            <form className="form-box">{/*//! Still Construction */}</form>
          </div>
        </section>
        <section className="container py-[10px] bg-gray-300">
          <div className="flex flex-col py-[10px] mx-[15rem] bg-white rounded-md">
            <div className="flex flex-row justify-between items-center border-b border-gray-300">
              <div className="mx-5 py-2">
                <p className="font-semibold text-xl mb-1">Departure Flight to Test</p>
                <p className="text-base font-light pb-2">
                  {" "}
                  Wed 24 Nov 2022 <span> | </span> 1 Traveler
                </p>
              </div>
              <div className="mx-8">
                <button className="text-base font-medium text-gray-500 rounded-md w-full py-2 px-6 bg-gray-200 hover:bg-gray-100" onClick={() => setShowDate(!showDate)}>
                  Change Date
                </button>
              </div>
            </div>
            <div className={showDate ? "flex justify-center my-2 pt-2" : "hidden"}>
              <div className="bg-white">
                <h1>Coming Soon</h1>
              </div>
            </div>
            {/* //! Holding feature  */}
            <div className="flex flex-1 justify-between items-center mt-2">
              <div className="flex flex-row items-center list-filter gap-2 mx-5 py-2">
                <p>Filter: </p>
                <div className="flex button-filter gap-3">
                  <div className="button-filter flex bg-gray-200 rounded-md items-center px-2 py-1 gap-2">
                    <button>Price</button>
                    <AiOutlineDown />
                  </div>
                  <button>Stops</button>
                  <button>Airlines</button>
                  <button>Departure</button>
                </div>
              </div>
              <div className="flex filter-sort gap-2 mx-5">
                <p>Sort: </p>
                <button>Sorting</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 py-[10px] mx-[15rem] mt-3">
            {dummy.map((res) => {
              return (
                <div className="flex flex-row justify-between items-center gap-4 bg-white rounded-md" key={res.id}>
                  <div className="wrapper-list-ticket flex items-center px-5 py-8">
                    <div className="logo-maskapai mx-4">
                      <SiChinasouthernairlines size="2.5rem" />
                      <p className="text-sm">{res.maskapai}</p>
                    </div>
                    <div className="departure mx-4 ml-12">
                      <p className="font-semibold text-xl">{res.departure}</p>
                      <p className="font-light text-sm">{res.loct}</p>
                    </div>
                    <AiOutlineArrowRight size="1.2rem" className="text-gray-400 mx-2" />
                    <div className="arrival mx-4">
                      <p className="font-semibold text-xl">{res.arrival}</p>
                      <p className="font-light text-sm">{res.dest}</p>
                    </div>
                    <div className="duration mx-8 ml-16">
                      <p className="font-semibold text-xl">{res.durat}</p>
                      <p className="font-light text-sm">Direct</p>
                    </div>
                    <div className="flex items-center mx-8">
                      <RiSuitcase2Line size="1.2rem" />
                      <p className="font-light">20kg</p>
                    </div>
                    <div className="price mx-8 ml-24">
                      <p className="font-semibold text-xl">Rp {res.price}0</p>
                    </div>
                  </div>
                  <div className="button-choose mr-12">
                    <button className="bg-blue-700 text-sm font-medium text-white rounded-md py-2 px-2 hover:bg-blue-600">Choose Flight</button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Resultpage;
