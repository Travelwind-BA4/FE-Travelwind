import { error } from "../assets/images/error";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img src={error} alt="" />
      <h1 className="mt-4 text-4xl font-bold text-[#0e67b4]">PAGES 404 NOT FOUND</h1>
    </div>
  );
};

export default Error;
