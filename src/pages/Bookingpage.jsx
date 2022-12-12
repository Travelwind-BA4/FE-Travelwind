import { useNavigate } from "react-router-dom";

import DocID from "../components/Booking/DocID";

import Date from "../components/Input/Date";
import Text from "../components/Input/Text";
import { Form } from "antd";
import Booking from "../components/Dropdown/Title";
import { useEffect, useState } from "react";
import useTraveler from "../services/api/useTraveler";
import timeConverter from "../utils/timeConverter";

const BookingPage = () => {
  const navigate = useNavigate();
  // const [datas, setDatas] = useState([]);
  const { addTravelerByOrder } = useTraveler();

  // useEffect(() => {

  // }, [datas]);

  const bookTraveler = (value) => {
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
    addTravelerByOrder(payloads);
    navigate("/payment");
  };
  return (
    <div className="container mx-auto py-10 px-10">
      <Form onFinish={bookTraveler}>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-8">
          <div className="col-span-2 bg-[#f1f5f5]  px-8 pb-8  rounded-md">
            <div className="border-b border-gray-300 mt-5">
              <p className="font-semibold text-xl mb-5">Traveler Information</p>
            </div>
            <div className="border shadow-md py-5 px-3">
              <p className="font-semibold text-xl mb-3">
                Traveler 1 <span className="text-3xl font-light pb-2">|</span> Adult
              </p>
              <div className=" border-b border-gray-300"></div>
              <p className="mt-2 text-sm px-3 text-orange-400 font-semibold">Name according to ID Card/Passport without title and punctuation</p>
              <div class="mt-3 w-full max-w-lg px-3">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <div class="relative">
                      <Booking
                        placeholder={"Mr/Mrs"}
                        styles="w-[100px] border-b border-gray-300"
                        name="title"
                        items={[
                          {
                            value: "Mr",
                            label: "Mr",
                          },

                          {
                            value: "Mrs",
                            label: "Mrs",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <Text name="First Name" placeholder="Jhon" />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <Text name="Last Name" placeholder="Smith" />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                      Date Birth <span className="text-red-500">*</span>
                    </label>
                    <div class="relative">
                      <Date style="border-b border-gray-300" name="dateBirth" />
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <Text name="Nationality" placeholder="Indonesia" />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <Text name="ID Passport" placeholder="ex. 1702192905990001" />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <Text name="Passport Country" placeholder="Indonesia" />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                      Card Expiry <span className="text-red-500">*</span>
                    </label>
                    <Date style="border-b border-gray-300" name="passportExpired" />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <Text name="ID Card Number" placeholder="ex. 1702192905990001" />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <Text name="Card Country" placeholder="Indonesia" />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                      Card Expiry <span className="text-red-500">*</span>
                    </label>
                    <Date style="border-b border-gray-300" name="cardExpired" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Traveler Information */}

          <div className="lg:ml-5 lg:col-span-1 col-span-2">
            <div className="bg-[#f1f5f5] p-4 rounded-md">
              <h1 className="font-medium text-xl">Total Price</h1>
              <div className="flex justify-between py-3  font-medium">
                <p>Depart (CGK to DPS)</p>
                <p>Rp. 2.137.740</p>
              </div>
            </div>
            <div className="mt-3">
              <button className="bg-[#3e5cb8] w-full text-white p-4 rounded-md font-semibold" type="submit">
                Continue To Payment
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default BookingPage;
