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
        title: value.title,
        firstName: value["First Name"],
        lastName: value["Last Name"],
        birthDate: timeConverter(value.dateBirth),
        nationality: value.Nationality,
        userId: user.userId,
        idCardNumber: value["ID Card Number"],
        idCardExpiry: value.cardExpired && timeConverter(value.cardExpired),
        idCardCountry: value["Card Country"],
        passportNumber: value["ID Passport"],
        passportExpiry: timeConverter(value.passportExpired),
        passportCardCountry: value["Passport Country"],
      },
    ];
    addTraveler(payloads);
  };

  return (
    <div>
      <div className="bg-[#f1f5f5] px-10 py-4 rounded-lg ">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center text-2xl ">
            <BsCardList className="mr-4" /> Traveler List
          </h1>
          <button class="mr-4 font-medium hover:text-[#f6ffed] text-[#52c41a]" onClick={() => setShow(!show)}>
            Add Traveler
          </button>
        </div>
        <hr className="my-4" />
        {show ? (
          <>
            {status == null ? "" : status == false ? <Alert className="my-5" message="Success Added Traveler" type="success" closable /> : <Alert className="my-5" message="failed added traveler" type="error" closable />}
            <Form onFinish={submitTraveler}>
              <AddTraveler />
              <div className="flex justify-end my-10">
                <button className="px-3 py-2 bg-[#3e5cb8] text-white rounded-lg" type="submit">
                  Add Traveler
                </button>
              </div>
            </Form>
          </>
        ) : (
          <div className="flex flex-col gap-y-3">
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
                    <div key={traveler.travelerId} className="hidden border rounded-lg bg-gray-200 p-2 hover:shadow-lg" onClick={() => setShow(true)}>
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
