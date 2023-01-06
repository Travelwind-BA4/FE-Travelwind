import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useNotification = () => {
  const [notif, setNotif] = useState([]);
  const [status, setStatus] = useState([]);
  const navigate = useNavigate();
  const postNotification = async (userId) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/notification/get?userId=${userId}`, config);
      setNotif(data.data.content);
    } catch (error) {
      return error;
    }
  };

  const updateNotif = async (userId, notificationId) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const payload = {};

      const { data } = await axios.put(`${process.env.REACT_APP_URL_API}/notification/update-status?userId=${userId}&notificationId=${notificationId}`, payload, config);
      setStatus(data.data);
    } catch (error) {
      return error;
    }
  };

  return { postNotification, notif, updateNotif, status };
};

export default useNotification;
