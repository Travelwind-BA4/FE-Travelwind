import Countries from "../Dropdown/Countries";
import Text from "../Input/Text";
import Title from "../Dropdown/Title";
import Date from "../Input/Date";
import { useEffect } from "react";
import useCountries from "../../services/api/useCountries";
const AddTraveler = ({ type, index }) => {
  const { getCountries, countries } = useCountries();
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <>
      <div className="border shadow-md py-5 px-3">
        {type ? (
          <>
            <p className="font-semibold text-xl mb-3">Traveler {index + 1}</p>
            <div className=" border-b border-gray-300 mb-4"></div>
          </>
        ) : (
          ""
        )}
        <p className=" text-sm px-3 text-orange-400 font-semibold">Name according to ID Card/Passport without title and punctuation</p>
        <div className="mt-3 w-full max-w-2xl px-3">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Title <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Title
                  placeholder={"Mr/Mrs"}
                  styles="w-[100px] border-b border-gray-300"
                  name={["title", index]}
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
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Text name={["First Name", index]} placeholder="Jhon" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Text name={["Last Name", index]} placeholder="Smith" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Date Birth <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Date style="border-b border-gray-300" name={["dateBirth", index]} />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Countries name={["Nationality", index]} countries={countries} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Text name={["ID Passport", index]} placeholder="ex. 1702192905990001" />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <Countries name={["Passport Country", index]} countries={countries} />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Passport Expiry <span className="text-red-500">*</span>
              </label>
              <Date style="border-b border-gray-300" name={["passportExpired", index]} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Text name={["ID Card Number", index]} placeholder="ex. 1702192905990001" />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <Countries name={["Card Country", index]} countries={countries} />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Card Expiry <span className="text-red-500">*</span>
              </label>
              <Date style="border-b border-gray-300" name={["cardExpired", index]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTraveler;
