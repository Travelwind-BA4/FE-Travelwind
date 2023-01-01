import React, { useEffect, useState } from "react";
import { BsCardList, BsPencil } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Alert, Card, Form } from "antd";

import useTraveler from "../../services/api/useTraveler";
import AddTraveler from "./AddTraveler";
import timeConverter from "../../utils/timeConverter";

const Traveler = () => {
  const { getTraveler, travelers, addTraveler, status } = useTraveler();
  const [show, setShow] = useState(false);
  useEffect(() => {
    getTraveler();
  }, []);

  const submitTraveler = (value) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const payloads = [
      {
        type: "TRAVELER",
        title: value.title[0],
        firstName: value["First Name"][0],
        lastName: value["Last Name"][0],
        birthDate: timeConverter(value.dateBirth[0]),
        nationality: value.Nationality[0],
        userId: user.userId,
        idCardNumber: value["ID Card Number"][0],
        idCardExpiry: value.cardExpired[0] && timeConverter(value.cardExpired[0]),
        idCardCountry: value["Card Country"][0],
        passportNumber: value["ID Passport"][0],
        passportExpiry: timeConverter(value.passportExpired[0]),
        passportCardCountry: value["Passport Country"][0],
      },
    ];

    addTraveler(payloads);
  };

  return (
    <div>
      <div className="bg-[#f1f5f5] px-10 pt-4 rounded-lg ">
        <div className="flex items-center justify-between pt-5">
          <h1 className="flex items-center text-2xl ">
            <BsCardList className="mr-4" /> Traveler List
          </h1>
          {show ? (
            <button class="mr-4 font-semibold text-[#3e5cb8]" onClick={() => setShow(!show)}>
              Back
            </button>
          ) : (
            <button class="mr-4 font-semibold text-[#3e5cb8]" onClick={() => setShow(!show)}>
              Add Traveler
            </button>
          )}
        </div>
        <hr className="mt-2 mb-6" />
        {show ? (
          <>
            {status == null ? "" : status == false ? <Alert className="my-5" message="Success Added Traveler" type="success" closable /> : <Alert className="my-5" message="failed added traveler" type="error" closable />}
            <Form onFinish={submitTraveler}>
              <AddTraveler index={0} />
              <div className="flex justify-end py-10 gap-5">
                <button className="px-7 py-2 text-[18px] leading-[25px] border-none rounded-lg bg-[#db053f] text-white" onClick={() => setShow(!show)}>
                  Cancel
                </button>

                <button className="px-7 py-2 text-[18px] leading-[25px] border-none rounded-lg bg-[#52c41a] text-white" type="submit">
                  Add
                </button>
              </div>
            </Form>
          </>
        ) : (
          <div className="flex flex-col gap-y-3 pb-5">
            {travelers.map((traveler) => {
              return (
                <Card
                  key={traveler.travelerId}
                  title={
                    <div className="traveler__label flex justify-between items-center">
                      <h1 className="flex items-center text-xl">
                        <FiUser strokeWidth="1.5px" className="mr-2" />
                        {traveler.title}
                        <span className="pr-1">.</span>
                        {traveler.lastName}, {traveler.firstName}
                      </h1>
                    </div>
                  }
                  extra={
                    <div key={traveler.travelerId} className="border rounded-lg bg-gray-200 p-2 hover:shadow-lg" onClick={() => setShow(true)}>
                      <BsPencil />
                    </div>
                  }
                >
                  <div className="sm:flex-row sm:justify-between flex flex-col gap-2">
                    <div>
                      <p className="text-gray-400 font-medium">Fullname</p>
                      <h1 className="text-lg font-semibold">
                        {traveler.lastName}, {traveler.firstName}
                      </h1>
                    </div>
                    <div>
                      <p className="text-gray-400 font-medium">Birthdate</p>
                      <h1 className="text-lg font-semibold">{traveler.birthDate}</h1>
                    </div>
                    <div>
                      <p className="text-gray-400 font-medium">Country Code</p>
                      <h1 className="text-lg font-semibold">{traveler.countryCode}</h1>
                    </div>
                  </div>
                </Card>
                // <div key={traveler.travelerId} className='traveler__card flex flex-col border border-gray-700'>
                //   <div className='traveler__label flex justify-between items-center my-2 mx-2 border-b'>
                //     <h1 className='flex items-center'>
                //       <FiUser/>
                //       {traveler.title} {traveler.lastName},{traveler.firstName} | {traveler.type}
                //       </h1>

                //       <div className='flex gap-1'>
                //         <div className='border rounded-lg bg-gray-200 p-2'>
                //           <BsPencil/>
                //         </div>
                //         <div className='border rounded-lg bg-gray-200 p-2'>
                //           <BsXLg/>
                //         </div>
                //       </div>
                //   </div>

                // </div>
              );
            })}
          </div>
        )}

        {/* <div className="flex flex-col gap-y-3">
          <div className="">
            <h1 className="text-[#a5a5a8] mb-1">Name</h1>
            <p>p</p>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Mobile Phone</h1>
              <p>8123</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Email</h1>
              <p>@gmailcom</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Gender</h1>
              <p>male</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Nationality</h1>
              <p>Indonesia</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Traveler;
