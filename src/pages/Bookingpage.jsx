import { Alert, Form } from "antd";

import useTraveler from "../services/api/useTraveler";
import timeConverter from "../utils/timeConverter";
import AddTraveler from "../components/Profil/AddTraveler";

const BookingPage = () => {
  const qty = localStorage.getItem("traveler");
  const { addTravelerByOrder, status } = useTraveler();

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
  };
  return (
    <div className="container mx-auto py-10 px-10">
      <Form onFinish={bookTraveler}>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-8">
          <div className="col-span-2 bg-[#f1f5f5]  px-8 pb-8  rounded-md">
            <div className="border-b border-gray-300 mt-5">
              <p className="font-semibold text-xl mb-5">Traveler Information</p>
              {status ? <Alert message={status.message} type="error" className="mb-7" /> : ""}
            </div>
            <AddTraveler type={"true"} />
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
