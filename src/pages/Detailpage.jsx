import { BsArrowRight, BsCircle } from "react-icons/bs";
import Button2 from "../components/Buttons/Button2";
const Detailpage = () => {
  return (
    <div>
      <div className="container mx-auto py-10 h-screen">
        <div className="grid grid-cols-3">
          <div className="col-span-2 bg-[#fff]  px-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="mt-4">Departure Flight</p>
                <h6 className="flex items-center">
                  Jakarta (CGK) <BsArrowRight className="mx-5 my-3" /> Bali Denpasar (DPS)
                </h6>
                <p>1 Pax | Direct</p>
              </div>
              <div>
                <Button2 name="Change Flight" style="rounded-lg " />
              </div>
            </div>
            <hr className="my-4" />
            <div className="grid grid-cols-4 ">
              <div>
                <img />
                <p>Lion Air JT24 Boeing 737</p>
              </div>
              <div className="col-span-2 flex">
                <div className="py-10">
                  <BsCircle />
                  <div className="w-0.5 h-full bg-[#c4c4c4] mx-auto"></div>
                  <BsCircle />
                </div>
                <div className="grid grid-cols-3">
                  <div className="col-span-1">
                    <p>16:00</p>
                    <p>24 Nov 2022</p>
                  </div>
                  <div className="col-span-2">
                    <div>
                      <h6>Jakarta ( CGK )</h6>
                      <p>Soekarno Hatta International Airport Terminal 2E</p>
                    </div>
                    <div className="mt-10">
                      <h6>Jakarta ( CGK )</h6>
                      <p>Soekarno Hatta International Airport Terminal 2E</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
