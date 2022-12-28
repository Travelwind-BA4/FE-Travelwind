import axios from "axios";
import { useCallback, useState } from "react";

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const getCountries = useCallback(async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/countries/get-all`);

      setCountries(data.data);
    } catch (error) {
      return error;
    }
  });

  return { countries, getCountries };
};

export default useCountries;
