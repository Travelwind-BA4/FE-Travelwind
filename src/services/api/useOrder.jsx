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
      const res = await axios.get(`${process.env.REACT_APP_URL_API}/order/get-all/user/${user.userId}`, config);
      setOrdersUser(res.data.data);
      console.log(res.data.data)
    } catch (error) {
      return error;
    }
  });

  const [orderByOrderId, setOrderByOrderId] = useState([]);

  const getOrderByOrderId = useCallback(async (orderId) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = JSON.parse(localStorage.getItem('token'));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.get(`${process.env.REACT_APP_URL_API}/order/id/${orderId}`, config)
      setOrderByOrderId(res.data.data)
    } catch (error) {
      console.log(error)
    }
  })

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

  return { addOrder, getOrderUser, ordersUser };
};

export default useOrder;
