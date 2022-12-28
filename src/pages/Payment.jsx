import { Alert } from "antd";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useOrder from "../services/api/useOrder";
import usePayments from "../services/api/usePayments";

const Payment = () => {
  const { getPayment, payments } = usePayments();
  const { addOrder, status } = useOrder();
  const schedule = JSON.parse(localStorage.getItem("schedule"));
  const qty = localStorage.getItem("traveler");
  let [searchParams, setSearchParams] = useSearchParams();
  const methodPay = searchParams.get("method");

  const paymentOrder = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const traveler = parseInt(JSON.parse(localStorage.getItem("traveler")));
    
    const datas = []
    for (let a = 0; a < traveler; a++) {
      datas.push(schedule.scheduleId)
    }

    const payload = {
      userId: user.userId,
      paymentId: payments.paymentId,
      scheduleId: datas,
    };

    addOrder(payload);
  };

  useEffect(() => {
    getPayment(methodPay);
  }, [methodPay]);

  return (
    <div className="container mx-auto py-10 px-10 min-h-screen">
      <div className="grid lg:grid-cols-3 grid-cols-2 ">
        <form className="col-span-2" onSubmit={(e) => paymentOrder(e)}>
          {status ? <Alert message={status.message} type="error" className="mb-7" /> : ""}
          <div className="bg-[#f1f5f5] px-8 py-8 rounded-md shadow-md">
            <h1 className="text-3xl mt-8 font-medium text-gray-600 ">Payment Methods</h1>
            <div className=" mt-4 rounded-lg mt-8">
              <img className="" src={payments.imagePath} />
            </div>
            <hr className="my-4" />
            <h1 className="mt-5">
              {payments.paymentName} | {payments.paymentType}
            </h1>
            <hr className="my-4" />
            <ul>
              <li>Payment Instruction : </li>
              <li className="mt-3">1. Login to your virtual account.</li>
              <li className="mt-1">2. Open virtual account mobile application.</li>
              <li className="mt-1">3. Copy the payment code.</li>
              <li className="mt-1">4. Click pay</li>
            </ul>
            <hr className="my-4" />
            <div className="flex justify-between">
              <h1>Total Price</h1>
              <p>{schedule.price * qty}</p>
            </div>
          </div>
          <div className="flex justify-between mt-5 items-center">
            <h1>Orther Select</h1>
            <div>
              <button className="bg-[#3e5cb8] w-full text-white p-4 rounded-md font-semibold" type="submit">
                Continue Payment
              </button>
            </div>
          </div>
        </form>
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
              <p>Rp. {schedule.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
