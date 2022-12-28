import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";

const Navphone = () => {
  const [active, setActive] = useState(false);
  const token = JSON.parse(localStorage.getItem('token'));
  const navigate = useNavigate();
  return (
    <div>
      <GiHamburgerMenu onClick={() => setActive(!active)} />
      <div className="absolute top-[50px] right-[0px] text-white">
        { token ? 
          <ul className={`bg-[#3d74eb] px-5 py-2 cursor-pointer  transition-all ${active ? "translate-x-0 opacity-100" : "translate-x-44 opacity-0"}`}>
            <li className="my-4" onClick={() => navigate('/')}>Flight</li>
            <li className="my-4" onClick={() => navigate('/account/profile')}>Profile</li>
            <li className="my-4" onClick={() => navigate('/account/orders')}>Order</li>
          </ul> 
          : 
          <ul className={`bg-[#3d74eb] px-5 py-2 cursor-pointer transition-all ${active ? "translate-x-0 opacity-100" : "translate-x-44 opacity-0"}`}>
            <li className="my-4" onClick={() => navigate('/')}>Flight</li>
            <li className="my-4" onClick={() => navigate('/login')}>Login</li>
            <li className="my-4" onClick={() => navigate('/register')}>Register</li>
          </ul> 
        }
        
      </div>
    </div>
  );
};

export default Navphone;
