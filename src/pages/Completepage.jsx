import { Sucess } from "../assets/images/complete";

const Completepage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <img src={Sucess} alt="" />
      <button className="mt-10 py-3 px-6 rounded-md text-white font-semibold bg-[#3e5cb8]">Back to Home</button>
    </div>
  );
};

export default Completepage;
