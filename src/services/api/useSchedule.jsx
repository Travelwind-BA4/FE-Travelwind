import axios from "axios";
import { useCallback, useState } from "react";

const useSchedule = () => {
  const [schedules, setSchedules] = useState([]);

  const getSchedule = useCallback(
    async ({ departureAirport, arrivalAirport, departureDate }) => {
      try {
        const data = await axios.get(`https://api-flight.up.railway.app/schedule/get-all/airport/${departureAirport}/${arrivalAirport}/date/${departureDate}`);
        setSchedules(data.data.data);
      } catch (error) {
        return error;
      }
    },
    [schedules]
  );

  const getScheduleById = useCallback(async (idSchedule) => {
    try {
      const data = await axios.get(`https://api-flight.up.railway.app/schedule/id/${idSchedule}`);
      setSchedules(data.data.data);
    } catch (error) {
      return error;
    }
  }, []);

  return { getSchedule, getScheduleById, schedules };
};

export default useSchedule;
