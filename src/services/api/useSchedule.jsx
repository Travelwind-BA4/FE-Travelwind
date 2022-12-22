import axios from "axios";
import { useCallback, useState } from "react";
import qs from "qs";
const useSchedule = () => {
  const [schedules, setSchedules] = useState([]);

  const getSchedule = useCallback(
    async (payload) => {
      try {
        const data = await axios.get(`${process.env.REACT_APP_URL_API}/schedule/search?${qs.stringify(payload)}`);
        setSchedules(data.data.data);
      } catch (error) {
        return error;
      }
    },
    [schedules]
  );

  const getScheduleById = useCallback(async (idSchedule) => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_URL_API}/schedule/id?id=${idSchedule}`);
      localStorage.setItem("schedule", JSON.stringify(data.data.data));
      setSchedules(data.data.data);
    } catch (error) {
      return error;
    }
  }, []);

  return { getSchedule, getScheduleById, schedules };
};

export default useSchedule;
