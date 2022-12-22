import { Alert } from "antd";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useOrder from "../services/api/useOrder";
import usePayments from "../services/api/usePayments";

const Payment = () => {
  const { getPayment, payments } = usePayments();
  const { addOrder, status } = useOrder();

  let [searchParams, setSearchParams] = useSearchParams();
  const methodPay = searchParams.get("method");

  const paymentOrder = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const schedule = JSON.parse(localStorage.getItem("schedule"));

    const payload = {
      userId: user.userId,
      paymentId: payments.paymentId,
      scheduleId: [schedule.scheduleId],
    };

    addOrder(payload);
  };

  useEffect(() => {
    getPayment(methodPay);
  }, [methodPay]);

  return (
    <div>
      <form className="container mx-auto py-10 px-10 min-h-screen" onSubmit={(e) => paymentOrder(e)}>
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
            <p>1000000</p>
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
    </div>
  );
};

export default Payment;
