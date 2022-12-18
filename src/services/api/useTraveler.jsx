import axios from "axios";
import React, { useCallback, useState } from "react";

const useTraveler = () => {
  const addTravelerByOrder = async (payloads) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = await axios.post(`${process.env.REACT_APP_URL_API}/traveler-list/add/from-order`, payloads, config);

      console.log(data);
    } catch (error) {
      return error;
    }
  };

  const [travelers, setTravelers] = useState([]);

  const getTraveler = useCallback(async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = JSON.parse(localStorage.getItem('token'));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.get(`${process.env.REACT_APP_URL_API}/traveler-list/get-all/user/${user.userId}`, config);
      setTravelers(res.data.data);
    } catch (error) {
      
    }
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
  }

  return { addTravelerByOrder, getTraveler, travelers };
};

export default useTraveler;
