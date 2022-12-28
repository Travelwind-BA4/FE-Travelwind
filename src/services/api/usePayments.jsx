import axios from "axios";
import { useCallback, useState } from "react";

const usePayments = () => {
  const [payments, setPayments] = useState([]);

  const getPayments = useCallback(async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/payment/get-all`, config);
      setPayments(data.data);
    } catch (error) {
      return error;
    }
  });

  const getPayment = async (name) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/payment/findby-name?paymentName=${name}`, config);
      setPayments(data.data);
    } catch (error) {
      return error;
    }
  };
  return { payments, getPayments, getPayment };
};

export default usePayments;
