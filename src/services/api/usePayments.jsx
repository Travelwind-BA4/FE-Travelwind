import axios from "axios";
import { useCallback, useState } from "react";

const usePayments = () => {
  const [payments, setPayments] = useState([]);
  const [datas, setDatas] = useState([]);

  const getPayments = useCallback(async (passengers) => {
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
      setDatas(["asdasd", "asdas"]);
    } catch (error) {
      return error;
    }
  };
  return { payments, getPayments, getPayment, datas };
};

export default usePayments;
