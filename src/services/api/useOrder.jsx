import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const useOrder = () => {
  const [ordersUser, setOrdersUser] = useState([]);

  const [status, setStatus] = useState(null);

  const navigate = useNavigate();
  const addOrder = async (payload) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = await axios.post(`${process.env.REACT_APP_URL_API}/order/add`, payload, config);
      console.log(data);
      if (data.status == 200) {
        localStorage.removeItem("schedule");
        localStorage.removeItem("traveler");
        navigate("/complete");
      }
    } catch (error) {
      setStatus(error);
    }
  };

  const getOrderUser = useCallback(async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.get(`${process.env.REACT_APP_URL_API}/order/findby-user?userId=${user.userId}`, config);
      setOrdersUser(res.data.data);
    } catch (error) {
      return error;
    }
  }, [ordersUser]);

  const getByOrderId = useCallback(async (orderId) => {
    try {
      console.log(orderId);
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.get(`${process.env.REACT_APP_URL_API}/order/detail?orderId=${orderId}`, config);
      setOrdersUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getByStatus = useCallback(async (status) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.get(`${process.env.REACT_APP_URL_API}/order/get-status?userId=${user.userId}&status=${status}`, config);
      setOrdersUser(res.data.data);
    } catch (error) {
      return error;
    }
  }, []);

  const generateInvoice = useCallback(async (orderId) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/invoice/generate?orderId=${orderId}`, config);
      console.log(data);
    } catch (error) {
      return error;
    }
  });

  return { addOrder, getOrderUser, getByOrderId, getByStatus, generateInvoice, ordersUser, status };
};

export default useOrder;
