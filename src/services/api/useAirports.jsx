import axios from "axios";
import { useCallback, useState } from "react";

const useAirports = () => {
  const [airports, setAirports] = useState([]);
  const getAirports = useCallback(async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_URL_API}/airports/get-all`);
      setAirports(data.data.data);
    } catch (error) {
      return error;
    }
  });

  const searchAirport = useCallback(async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_URL_API}/airports/get-all`);

      setAirports(data.data.data);
    } catch (error) {
      return error;
    }
  });

  return { getAirports, airports };
};

export default useAirports;
