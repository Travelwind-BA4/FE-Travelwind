import { Segmented } from "antd";
const Trip = () => {
  const trips = [
    {
      label: <button className=" py-3 px-6 rounded-full">One Trip</button>,
      value: "user1",
    },
    {
      label: <button className=" py-3 px-6 rounded-full">Round Trip</button>,
      value: "user2",
    },
  ];
  return <Segmented block={true} className="max-w-[300px]  bg-[#f0f0f0] rounded-full p-4" options={trips} />;
};

export default Trip;
