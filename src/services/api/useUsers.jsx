import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import timeConverter from "../../utils/timeConverter";

const useUsers = () => {
  const navigate = useNavigate();
  const [msgError, setMsgError] = useState(false);
  const postLogin = useCallback(async (value) => {
    try {
      await axios
        .post(`https://api-flight.up.railway.app/user/sign-in`, {
          email: value.email,
          password: value.password,
        })
        .then((response) => {
          localStorage.setItem("token", JSON.stringify(response.data.data.token));
          localStorage.setItem("user", JSON.stringify(response.data.data));
          navigate("/");
        });
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status == 401) {
        alert("User not found , Please check your email and password again!");
      }
    }
  });

  const postRegister = useCallback(async (value) => {
    try {
      console.log(value.email);
      await axios
        .post(`https://api-flight.up.railway.app/user/sign-up`, {
          fullName: value.fullName,
          birthDate: timeConverter(value.birthDate),
          telephone: value.telephone,
          email: value.email,
          password: value.password,
          gender: value.gender,
          rolesId: 2,
        })
        .then((res) => {
          localStorage.setItem("idUser", JSON.stringify(res.data.data.userId));
          navigate("/login");
        });
    } catch (error) {
      console.log(error);
    }
  });

  const ChangePassword = useCallback(async (value) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("token"));
      // console.log(token);
      const config = { headers: `Bearer ${token}` };
      const payload = {
        fullName: user.fullName,
        email: user.email,
        password: value.password,
        telephone: user.telephone,
        birthDate: user.birthDate,
        gender: user.gender,
        rolesId: 2,
      };
      console.log(payload);
      await axios.put(`https://api-flight.up.railway.app/user/update/${user.fullName}`, payload, config);
    } catch (error) {
      console.log("error");
    }
  });

  return { postLogin, msgError, postRegister, ChangePassword };
};

export default useUsers;
