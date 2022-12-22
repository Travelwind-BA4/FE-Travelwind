import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const useOrder = () => {
  const [ordersUser, setOrdersUser] = useState([]);
  const [status, setStatus] = useState(null);
  const [detailOrder, setDetailOrder] = useState([]);
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
      const res = await axios.get(`${process.env.REACT_APP_URL_API}/order/get-all/user/${user.userId}`, config);
      setOrdersUser(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      return error;
    }
  });

  const [orderByOrderId, setOrderByOrderId] = useState([]);

  const getOrderByOrderId = useCallback(async (orderId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.get(`${process.env.REACT_APP_URL_API}/order/id/${orderId}`, config);
      setOrderByOrderId(res.data.data);
    } catch (error) {
      console.log(error);
    }
  });

  // ordersUser.map((item) => {
  //   const getOrderId = useCallback(async (item.orderId) => {
  //     try {
  //     const user = JSON.parse(localStorage.getItem('user'));
  //     const token = JSON.parse(localStorage.getItem('token'));
  //     const config = {
  //       headers: { Authorization: `Bearer ${token}` },
  //     };
  //     const res = await axios.get(`${process.env.REACT_APP_URL_API}/order/id/${item.orderId}`, config)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })
  // })

  // const getOrderByOrderId = useCallback(async (orderId) => {
  //   try {
  // const user = JSON.parse(localStorage.getItem('user'));
  // const token = JSON.parse(localStorage.getItem('token'));
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  // ordersUser.map((item) => {
  //   await axios.get(``${process.env.REACT_APP_URL_API}/order/id/${item.orderId}`, config`)
  // })
  //   } catch (error) {

  //   }
  // })

  return { addOrder, getOrderUser, ordersUser, status };
};

export default useOrder;
