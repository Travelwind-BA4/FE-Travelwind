import axios from "axios";
import { useCallback, useState } from "react";

const useOrder = () => {
  const [ordersUser, setOrdersUser] = useState([]);
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
      const res = await axios.get(`${process.env.REACT_APP_URL_API}/order/get-all/user/${user.userId}`, config);
      setOrdersUser(res.data.data);
    } catch (error) {
      return error;
    }
  }, [ordersUser]);


  const getByOrderId = useCallback(async (orderId) => {
    try {
      console.log(orderId);
      const token = JSON.parse(localStorage.getItem('token'));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.get(`${process.env.REACT_APP_URL_API}/order/id/${orderId}`, config)
      setOrdersUser(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getByStatus = useCallback(async (status) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = JSON.parse(localStorage.getItem('token'));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.get(`${process.env.REACT_APP_URL_API}/order/get-all/user/${user.userId}/status/${status}`, config)
      setOrdersUser(res.data.data)
    } catch (error) {
      return error;
    }
  }, [])


  return { addOrder, getOrderUser, getByOrderId , ordersUser };
};

export default useOrder;
