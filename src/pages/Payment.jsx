import { useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import usePayments from "../services/api/usePayments"

const Payment = () => {
 const { getPayment,payments } = usePayments()
 console.log(payments);
 let [searchParams, setSearchParams] = useSearchParams();
 const methodPay = searchParams.get("method");


 useEffect(() => {
  getPayment(methodPay)
 },[methodPay])


  return (
   <div>
   <div className="container mx-auto py-10 px-10 min-h-screen">
     <div className="grid lg:grid-cols-3 grid-cols-2 ">
       <div className="col-span-2 bg-[#f1f5f5] px-8 pb-8 rounded-md">
         <h1 className="text-3xl mt-8 font-medium text-gray-600">Payment Methods</h1>
         <div className="mt-10">
           <h2>Virtual Account</h2>
           <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
           <div className=" mt-4 rounded-lg">
              <img className="w-72 h-36 bg-white" src={payments.imagePath} />
            </div>
             {console.log(payments)}
           </div>
         </div>
       </div>
       <div className="lg:ml-5 lg:col-span-1 col-span-2">
         <div className="bg-[#f1f5f5] p-4 rounded-md mt-10 lg:mt-0">
           <div className="flex justify-between py-3  font-medium">
             <h1 className="text-xl">AirSanz Code</h1>
             <p>102301231</p>
           </div>
           <div className="flex justify-between lg:flex-col flex-row xl:flex-row py-3 font-medium items-center">
             <h1 className="text-xl">Booking Status</h1>
             <button className="px-3 py-2 bg-[#DF9947] rounded-full text-white my-4">Need Payment</button>
           </div>
         </div>
         <div className="bg-[#f1f5f5] p-4 rounded-md mt-8">
           <h1 className="font-medium text-xl">Total Price</h1>
           <div className="flex justify-between py-3  font-medium">
             <p>Depart (CGK to DPS)</p>
             <p>Rp. 2.137.740</p>
           </div>
         </div>
         <div className="mt-3">
           <button className="bg-[#3e5cb8] w-full text-white p-4 rounded-md font-semibold" >
             Continue Payment
           </button>
         </div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default Payment