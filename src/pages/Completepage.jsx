import { useNavigate } from "react-router-dom";
import { Sucess } from "../assets/images/complete";

const Completepage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center items-center flex-col py-20">
      <img src={Sucess} alt="" />
      <button className="mt-10 py-3 px-6 rounded-md text-white font-semibold bg-[#3e5cb8] " onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default Completepage;
