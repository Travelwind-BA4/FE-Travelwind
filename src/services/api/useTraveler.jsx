import axios from "axios";

const useTraveler = () => {
  const addTravelerByOrder = async (payloads) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = await axios.post(`${process.env.REACT_APP_URL_API}/traveler-list/add/from-order`, payloads, config);

      console.log(data);
    } catch (error) {
      return error;
    }
  };

  return { addTravelerByOrder };
};

export default useTraveler;
