import axios from "axios";
import { useCallback, useState } from "react";

const useOrders = () => {
    const [ordersUser, setOrdersUser] = useState([]);
  
    const getOrderUser = useCallback(async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = JSON.parse(localStorage.getItem('token'));
        const config = { headers: `Bearer ${token}` }

        const response = await axios.get(`https://api-flight.up.railway.app/order/get-all/user/${user.userId}`, config);
        setOrdersUser(response.data.data);
      } catch (error) {
        return error;
      }
    });
  

    return { getOrderUser, ordersUser };
  };
  
  export default useOrders;