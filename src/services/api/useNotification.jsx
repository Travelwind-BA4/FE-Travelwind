import axios from "axios";
import { useState } from "react";

const useNotification = () => {
  const [notif, setNotif] = useState([]);

  const postNotification = async (userId) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/notification/get/${userId}`, config);
      setNotif(data.data.content);
    } catch (error) {
      return error;
    }
  };

  return { postNotification, notif };
};

export default useNotification;
