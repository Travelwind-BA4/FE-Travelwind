import axios from "axios";

const useOrder = () => {
  const addOrder = async (payload) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.post(`${process.env.REACT_APP_URL_API}/order/add`, payload, config);
    } catch (error) {
      return error;
    }
  };

  return { addOrder };
};

export default useOrder;
