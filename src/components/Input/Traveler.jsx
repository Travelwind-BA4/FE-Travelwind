import { useState } from "react";
import { Dropdown } from "antd";
const Traveler = () => {
  const [traveler, setTraveler] = useState("3");
  const [open, setOpen] = useState(false);

  const addTravler = () => {
    if (traveler >= 6) {
      setTraveler("6");
    } else {
      setTraveler(`${parseInt(traveler) + 1}`);
    }
  };
  const minTraveler = () => {
    if (traveler <= 1) {
      setTraveler("1");
    } else {
      setTraveler(`${parseInt(traveler) - 1}`);
    }
  };

  const items = [
    {
      label: (
        <div className="  flex justify-between items-center">
          <h1 className="text-base pr-8">Traveler</h1>
          <div>
            <span className="border-[1px] px-1 border-[#3e5cb8] text-[#3e5cb8]" onClick={addTravler}>
              +
            </span>
            <span className="p-2">{traveler}</span>{" "}
            <span className="border-[1px] px-1 border-[#3e5cb8] text-[#3e5cb8]" onClick={minTraveler}>
              -
            </span>
          </div>
        </div>
      ),
      key: "0",
    },
  ];
  return (
    <div>
      <Dropdown menu={{ items }} trigger={["click"]} open={open}>
        <input type="button" className="border-none outline-0 text-gray-400 cursor-pointer" value={`${traveler} traveler`} onClick={() => setOpen(!open)} />
      </Dropdown>
    </div>
  );
};

export default Traveler;
