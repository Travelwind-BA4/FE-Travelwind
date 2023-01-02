import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const useTraveler = () => {
  const navigate = useNavigate();
  const passengers = [];
  const [status, setStatus] = useState(null);
  // const [passengers, setPassenger] = useState([]);
  console.log(passengers);

  const addTravelerByOrder = async (payloads) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.post(`${process.env.REACT_APP_URL_API}/traveler-list/add/from-order`, payloads, config);

      data.data.forEach((e) => {
        passengers.push(e.travelerId);
        // setPassenger([...passengers, e.travelerId]);
      });

      console.log(passengers);
      localStorage.setItem("travelersPicked", JSON.stringify(passengers));

      if (data.status == 200) {
        // navigate("/payments", { state: passengers });
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
      await axios.post(`${process.env.REACT_APP_URL_API}/traveler-list/add/from-order`, payloads, config);
      setStatus(false);
    } catch (error) {
      setStatus(error);
    }
  };


  const editTraveler = async (payloads, userId, token) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.put(`${process.env.REACT_APP_URL_API}/traveler-list/update?userId=${userId}`, payloads, config)
    } catch (error) {
      
    }
  }

  return { addTravelerByOrder, getTraveler, travelers, status, addTraveler, passengers };
};

export default useTraveler;
