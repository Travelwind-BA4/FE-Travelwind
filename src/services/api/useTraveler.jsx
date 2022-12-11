import axios from "axios";
import { useCallback } from "react";
import timeConverter from "../../utils/timeConverter";

const useTraveler = () => {
  const addTravelerByOrder = useCallback(async (value) => {
    try {
      const payload = {
        type: value.title,
        title: value.title,
        firstName: value["First Name"],
        lastName: value["Last Name"],
        birthDate: timeConverter(value.dateBirth),
        nationality: value.Nationality,
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        idCardNumber: value["ID Card Number"],
        idCardExpiry: timeConverter(value.cardExpired),
        idCardCountry: value["Card Country"],
        passportNumber: value["ID Passport"],
        passportExpiry: value["Passport Country"],
        passportCardCountry: timeConverter(value.cardExpired),
      };
      await axios.post(`${process.env.REACT_APP_URL_API}traveler-list/add/from-order`, payload);
    } catch (error) {
      return error;
    }
  }, []);

  return { addTravelerByOrder };
};

export default useTraveler;
