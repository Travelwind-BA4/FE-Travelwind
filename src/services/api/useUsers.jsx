import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import timeConverter from "../../utils/timeConverter";

const useUsers = () => {
  const navigate = useNavigate();
  const [msgError, setMsgError] = useState(null);
  const [users, setUsers] = useState([]);

  const postLogin = useCallback(async (value) => {
    try {
      await axios
        .post(`${process.env.REACT_APP_URL_API}/user/sign-in`, {
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
      setMsgError(error);
    }
  });

  const OauthGoogle = async () => {
    try {
      const res = await axios.get("https://be-flightticket-production.up.railway.app/oauth2/authorization/google");
      // console.log(res.data)
      localStorage.setItem("gtoken", JSON.stringify(res.data.data));
    } catch (error) {
      return error;
    }
  };

  const postRegister = useCallback(async (value) => {
    try {
      await axios
        .post(`${process.env.REACT_APP_URL_API}/user/sign-up`, {
          authProvider: "LOCAL",
          googleId: "",
          fullName: value.fullName,
          birthDate: timeConverter(value.birthDate),
          telephone: value.telephone,
          email: value.email,
          password: value.password,
          gender: value.gender,
        })
        .then((res) => {
          localStorage.setItem("idUser", JSON.stringify(res.data.data.userId));
          navigate("/login");
        });
    } catch (error) {
      setMsgError(error);
    }
  });

  const editUser = useCallback(async (payload, userId, token) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const res = await axios.put(`${process.env.REACT_APP_URL_API}/user/update?userId=${userId}`, payload, config);

      if (res.status == 200) {
        window.location.reload();
      }
    } catch (error) {
      return error;
    }
  });

  const getMe = useCallback(async (id, token) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/user/findby-id?userId=${id}`, config);
      setUsers(data.data);
    } catch (error) {
      console.log("error");
    }
  });

  return { postLogin, msgError, postRegister, editUser, getMe, users, OauthGoogle };
};

export default useUsers;
