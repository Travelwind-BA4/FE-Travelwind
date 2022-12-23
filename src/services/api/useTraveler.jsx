import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const useTraveler = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const addTravelerByOrder = async (payloads) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = await axios.post(`${process.env.REACT_APP_URL_API}/traveler-list/add/from-order`, payloads, config);
      if (data.status == 200) {
        navigate("/payments");
      }
      console.log(data);
    } catch (error) {
      setStatus(error);
    }
  };

  const [travelers, setTravelers] = useState([]);

  const getTraveler = useCallback(async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.get(`${process.env.REACT_APP_URL_API}/traveler-list/findby-userId?userId=${user.userId}`, config);
      setTravelers(res.data.data);
    } catch (error) {}
  });

  const addTraveler = async (payloads) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = await axios.post(`${process.env.REACT_APP_URL_API}/traveler-list/add`, payloads, config);

      console.log(data);
    } catch (error) {
      return error;
    }
  };

  return { addTravelerByOrder, getTraveler, travelers, status };
};

export default useTraveler;
