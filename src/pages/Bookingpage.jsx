import { Alert, Form } from "antd";

import useTraveler from "../services/api/useTraveler";
import timeConverter from "../utils/timeConverter";
import AddTraveler from "../components/Profil/AddTraveler";
import { useSearchParams } from "react-router-dom";

const BookingPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const traveler = parseInt(searchParams.get("traveler"));
  // const scheduleId = searchParams.get("code");
  const schedule = JSON.parse(localStorage.getItem("schedule"));

  const { addTravelerByOrder, status } = useTraveler();

  const bookTraveler = (value) => {
    console.log(value);
    const user = JSON.parse(localStorage.getItem("user"));
    const payloads = [];
    for (let a = 0; a < value.title.length; a++) {
      payloads.push({
        type: "TRAVELER",
        title: value.title[a],
        firstName: value["First Name"][a],
        lastName: value["Last Name"][a],
        birthDate: timeConverter(value.dateBirth[a]),
        nationality: value.Nationality[a],
        userId: user.userId,
        idCardNumber: value["ID Card Number"][a],
        idCardExpiry: value.cardExpired[a] && timeConverter(value.cardExpired[a]),
        idCardCountry: value["Card Country"][a],
        passportNumber: value["ID Passport"][a],
        passportExpiry: timeConverter(value.passportExpired[a]),
        passportCardCountry: value["Passport Country"][a],
      });
    }

    addTravelerByOrder(payloads);
  };
  return (
    <div className="container mx-auto py-10 px-10 min-h-screen">
      <Form onFinish={bookTraveler}>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-8">
          <div className="col-span-2 bg-[#f1f5f5]  px-8 pb-8  rounded-md">
            <div className="border-b border-gray-300 mt-5">
              <p className="font-semibold text-xl mb-5">Traveler Information</p>
              {status ? <Alert message={status.message} type="error" className="mb-7" /> : ""}
            </div>
            <div className="flex flex-col gap-y-10">
              {[...Array(traveler).keys()].map((e, key) => {
                return <AddTraveler type={"true"} index={key} />;
              })}
            </div>
          </div>
          {/*  Traveler Information */}

          <div className="lg:ml-5 lg:col-span-1 col-span-2">
            <div className="bg-[#f1f5f5] p-4 rounded-md">
              <h1 className="font-medium text-xl">Detail Price</h1>
              <div className="flex justify-between py-3  font-medium">
                <p>Traveler</p>
                <p>{traveler} Traveler</p>
              </div>
              <div className="flex justify-between pb-3  font-medium">
                <p>Depart (CGK to DPS)</p>
                <p>
                  {schedule.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between pb-3  font-medium">
                <p>Total Price</p>
                <p>
                  {(schedule.price * traveler).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
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
