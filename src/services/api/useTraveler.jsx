import axios from "axios";

const useTraveler = () => {
  const addTravelerByOrder = async (payloads) => {
    try {
      await axios.post(`${process.env.REACT_APP_URL_API}/traveler-list/add/from-order`, payloads);
    } catch (error) {
      return error;
    }
  };

  return { addTravelerByOrder };
};

export default useTraveler;
