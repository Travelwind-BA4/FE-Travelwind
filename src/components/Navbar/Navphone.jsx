import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navphone = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <GiHamburgerMenu onClick={() => setActive(!active)} />
      <div className="absolute top-[50px] right-[0px] text-white">
        <ul className={`bg-[#3d74eb] px-5 py-2  transition-all ${active ? "translate-x-0 opacity-100" : "translate-x-44 opacity-0"}`}>
          <li className="my-4">Login</li>
          <li className="my-4">Register</li>
          <li className="my-4">Flight</li>
          <li className="my-4">Order</li>
        </ul>
      </div>
    </div>
  );
};

export default Navphone;
