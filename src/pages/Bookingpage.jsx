import { useNavigate } from "react-router-dom";
import Select1 from "../components/Booking/Contact";
import Title1 from "../components/Booking/Title1";

const BookingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-10 px-10 h-screen">
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-8">
        <div className="col-span-2 bg-[#f1f5f5]  px-8 pb-8  rounded-md">
          <div>
            <form class="mt-5 w-full max-w-lg">
              <p className="font-semibold text-xl mb-5">Contact Information</p>
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
                    <Title1 placeholder={"Mr"}></Title1>
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
                    class="appearance-none block w-full bg-[#f1f5f5] border-b-2 border-gray-300 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    placeholder="Sasha"
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
                    class="appearance-none block w-full bg-[#f1f5f5] border-b-2 border-gray-300 text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Grey"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Country <span className="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-[#f1f5f5] border-b-2 border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Indonesia (+62) </option>
                      <option>America (+1)</option>
                      <option>China (+86)</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="appearance-none block w-full bg-[#f1f5f5] border-b-2 border-gray-300 text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                    class="appearance-none block w-full bg-[#f1f5f5] border-b-2 border-gray-300 text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Enter Your Email"
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
              onClick={() => navigate("/booking")}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingPage;
