import axios from "axios";
import { useCallback, useState } from "react";
import timeConverter from "../../utils/timeConverter";

const useSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  const getSchedule = useCallback(
    async ({ departureAirport, arrivalAirport, departureDate }) => {
      try {
        const data = await axios.get(`${process.env.REACT_APP_URL_API}/schedule/get-all/airport/${departureAirport}/${arrivalAirport}/date/${timeConverter(departureDate)}`);
        setSchedule(data.data.data);
      } catch (error) {
        return error;
      }
    },
    [schedule]
  );

  return { getSchedule, schedule };
};

export default useSchedule;
