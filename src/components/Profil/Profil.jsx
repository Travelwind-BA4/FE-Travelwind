import { FiUser } from "react-icons/fi";
const Profil = () => {
  return (
    <div className="bg-[#fff] px-10 py-4 rounded-lg ">
      <div>
        <h1 className="flex items-center text-2xl ">
          <FiUser className="mr-4" /> Profile
        </h1>
        <hr className="my-4" />
        <div className="flex flex-col gap-y-3">
          <div className="">
            <h1 className="text-[#a5a5a8] mb-1">Name</h1>
            <p>Muhammad Nizar Fazari</p>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Mobile Phone</h1>
              <p>021301203</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Email</h1>
              <p>test@gmail.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Gender</h1>
              <p>Laki - laki</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Nationality</h1>
              <p>Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
