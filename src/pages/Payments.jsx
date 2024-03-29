import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import usePayments from "../services/api/usePayments";

const Payments = () => {
  const navigate = useNavigate();
  const { getPayments, payments } = usePayments();
  // const location = useLocation();
  // console.log(location);
  const qty = localStorage.getItem("traveler");
  const schedule = JSON.parse(localStorage.getItem("schedule"));

  useEffect(() => {
    getPayments();
  }, []);

  const methodPayment = (name) => {
    navigate(`/payment?method=${name}`);
  };

  return (
    <>
      <div className="container mx-auto py-10 px-10 min-h-screen">
        <div className="grid lg:grid-cols-3 grid-cols-2 ">
          <div className="col-span-2 bg-[#f1f5f5] px-8 pb-8 rounded-md">
            <h1 className="text-3xl mt-8 font-medium text-gray-600">Payment Methods</h1>
            <div className="mt-10">
              <h2>Virtual Account</h2>
              <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                {payments.map((payment) => {
                  return (
                    <div className=" mt-4 w-50 h-36 bg-white rounded-lg grid cursor-pointer">
                      <img className="justify-self-center self-center cursor-pointer" src={payment.imagePath} onClick={() => methodPayment(payment.paymentName)} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="lg:ml-5 lg:col-span-1 col-span-2">
            <div className="bg-[#f1f5f5] p-4 rounded-md mt-10 lg:mt-0">
              <div className="flex justify-between py-3  font-medium">
                <h1 className="text-xl">Travel Code</h1>
                <p>{schedule.scheduleId.slice(0, 13)}</p>
              </div>
              <div className="flex justify-between lg:flex-col flex-row xl:flex-row py-3 font-medium items-center">
                <h1 className="text-xl">Booking Status</h1>
                <button className="px-3 py-2 bg-[#DF9947] rounded-full text-white my-4">WAITING</button>
              </div>
            </div>
            <div className="bg-[#f1f5f5] p-4 rounded-md mt-8">
              <h1 className="font-medium text-xl">Detail Price</h1>
              <div className="flex justify-between py-3  font-medium">
                <p>Traveler</p>
                <p>{qty} Traveler</p>
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
                  {(schedule.price * qty).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </div>
            {/* <div className="mt-3">
              <button className="bg-[#3e5cb8] w-full text-white p-4 rounded-md font-semibold" onClick={() => navigate("/complete")}>
                Continue Payment
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
