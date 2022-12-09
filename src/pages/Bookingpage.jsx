import { useNavigate } from "react-router-dom";
import Select1 from "../components/Booking/Contact";
import Title1 from "../components/Booking/Title1";
import Country from "../components/Booking/Ctry";
import Birth from "../components/Booking/DateBirth";
import DocID from "../components/Booking/DocID";

const BookingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-10 px-10">
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-8">
        {/* Contact Information */}
        <div className="col-span-2 bg-[#f1f5f5]  px-8 pb-8  rounded-md">
          <div>
            <div className="border-b border-gray-300 mt-5">
              <p className="font-semibold text-xl mb-5">Contact Information</p>
            </div>
            <form class="mt-5 w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Select Contact
                  </label>
                  <div class="relative">
                    <Select1 placeholder={"Contact 1"}></Select1>
                  </div>
                </div>
                <div class="w-full mt-3 md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Title <span className="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <Title1 placeholder={"Mr/Mrs"}></Title1>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="appearance-none block w-full bg-[#f1f5f5] text-sm border-b border-gray-300 text-gray-700 py-1.5 px-4 leading-tight focus:outline-none "
                    id="grid-city"
                    type="text"
                    placeholder="John"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="appearance-none block w-full bg-[#f1f5f5] text-sm border-b border-gray-300 text-gray-700 py-1.5 px-4 leading-tight focus:outline-none "
                    id="grid-city"
                    type="text"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="appearance-none block w-full bg-[#f1f5f5] text-sm border-b border-gray-300 text-gray-700 py-1.5 px-4 leading-tight focus:outline-none "
                    id="grid-city"
                    type="text"
                    placeholder="0"
                  />
                </div>
                <div class="w-full px-3 mt-6">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="appearance-none block w-full bg-[#f1f5f5] text-sm border-b border-gray-300 text-gray-700 py-1.5 px-4 leading-tight focus:outline-none"
                    id="grid-city"
                    type="text"
                    placeholder="Ex.Binar@Airsans.com"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:ml-5 lg:col-span-1 col-span-2">
          <div className="bg-[#f1f5f5] p-4 rounded-md">
            <h1 className="font-medium text-xl">Total Price</h1>
            <div className="flex justify-between py-3  font-medium">
              <p>Depart (CGK to DPS)</p>
              <p>Rp. 2.137.740</p>
            </div>
          </div>
          <div className="mt-3">
            <button
              className="bg-[#3e5cb8] w-full text-white p-4 rounded-md font-semibold"
              onClick={() => navigate("/payment")}
            >
              Continue To Payment
            </button>
          </div>
        </div>

        {/* Traveler Information */}
        <div className="col-span-2 bg-[#f1f5f5]  px-8 pb-8  rounded-md">
          <div className="border-b border-gray-300 mt-5">
            <p className="font-semibold text-xl mb-5">Traveler Information</p>
          </div>
          <div className="border shadow-md py-5 px-3">
            <p className="font-semibold text-xl mb-3">
              Traveler 1 <span className="text-3xl font-light pb-2">|</span>{" "}
              Adult
            </p>
            <div className=" border-b border-gray-300"></div>
            <p className="mt-2 text-sm px-3 text-orange-400 font-semibold">
              Name according to ID Card/Passport without title and punctuation
            </p>
            <form class="mt-3 w-full max-w-lg px-3">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Title <span className="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <Title1 placeholder={"Mr/Mrs"}></Title1>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="appearance-none block w-full bg-[#f1f5f5] text-sm border-b border-gray-300 text-gray-700 py-1.5 px-4 leading-tight focus:outline-none"
                    id="grid-city"
                    type="text"
                    placeholder="John"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="appearance-none block w-full bg-[#f1f5f5] text-sm border-b border-gray-300 text-gray-700 py-1.5 px-4 leading-tight focus:outline-none"
                    id="grid-city"
                    type="text"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Date Birth <span className="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <Birth></Birth>
                  </div>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="appearance-none block w-full bg-[#f1f5f5] text-sm border-b border-gray-300 text-gray-700 py-1.5 px-4 leading-tight focus:outline-none"
                    id="grid-city"
                    type="text"
                    placeholder="Indonesia"
                  />
                </div>
                <div class="w-full px-3 mt-6">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Document Type <span className="text-red-500">*</span>
                  </label>
                  <DocID></DocID>
                  <p class="text-gray-400 text-xs mb-3 italic mt-1">
                    If you are a foreigner, please select a passport.
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    ID Card Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="appearance-none block w-full bg-[#f1f5f5] text-sm border-b border-gray-300 text-gray-700 py-1.5 px-4 leading-tight focus:outline-none"
                    id="grid-city"
                    type="text"
                    placeholder="ex. 1702192905990001"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    ID Card Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="appearance-none block w-full bg-[#f1f5f5] text-sm border-b border-gray-300 text-gray-700 py-1.5 px-4 leading-tight focus:outline-none"
                    id="grid-city"
                    type="text"
                    placeholder="Indonesia"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
