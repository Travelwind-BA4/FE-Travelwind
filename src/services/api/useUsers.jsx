import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import timeConverter from "../../utils/timeConverter";

const useUsers = () => {
  const navigate = useNavigate();
  const [msgError, setMsgError] = useState(false);
  const [users, setUsers] = useState([]);

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

  const editUser = useCallback(async (value, userId, token) => {
    try {

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const payload = {
        fullName: value.fullName,
        email: value.email,
        telephone: value.telephone,
        birthDate: timeConverter(value.birthDate),
        gender: value.gender,
      }
      const res = await axios.put(`${process.env.REACT_APP_URL_API}/user/update?userId=${userId}`, payload, config)
      console.log(payload);
    } catch (error) {
      return error;
    }
  });

  const getMe = useCallback(async (id, token) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.get(`https://api-flight.up.railway.app/user/findby-id?userId=${id}`, config);
      setUsers(data.data);
    } catch (error) {
      console.log("error");
    }
  });

  return { postLogin, msgError, postRegister, editUser, getMe, users };
};

export default useUsers;
