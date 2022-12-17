import axios from "axios";
import { useCallback, useState } from "react";

const useOrder = () => {
  const [ordersUser, setOrdersUser] = useState([]);
  const [detailOrder, setDetailOrder] = useState([]);
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

  const getOrderUser = useCallback(async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = JSON.parse(localStorage.getItem('token'));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.get(`https://api-flight.up.railway.app/order/get-all/user/${user.userId}`, config);
      setOrdersUser(data.data);
      console.log(data.data)
    } catch (error) {
      return error;
    }
  });

  const getOrderId = useCallback(async () => {
    ordersUser.map((item) => {
      
    })
  })

  return { addOrder, getOrderUser, ordersUser };
};

export default useOrder;
