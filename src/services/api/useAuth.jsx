import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import timeConverter from "../../utils/timeConverter";

const useAuth = () => {
    const navigate = useNavigate();
    const postLogin = useCallback(async ({ email, password }) => {
        try {
            console.log(email);
            console.log(password);
            await axios.post(`${process.env.REACT_APP_URL_API}/user/sign-in`, {
        email: email,
        password: password,
    }).then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data.data.token));
        localStorage.setItem('user', JSON.stringify(response.data.data));
        navigate('/');
    });
        } catch (error) {
            console.log(error)
        }
    });

    const postRegister = useCallback(async ({ fullName, birthDate, telephone, gender, email, password }) => {
        try {
            console.log(email);
            await axios.post(`${process.env.REACT_APP_URL_API}/user/sign-up`, {
                fullName: fullName,
                birthDate: birthDate,
                telephone: telephone,
                email: email,
                password: password,
                gender: gender,
                rolesId : 2,
            }).then((res) => {
                localStorage.setItem('idUser', JSON.stringify(res.data.data.userId));
                navigate('/login')
            })
        } catch (error) {
            console.log(error);
        }
    })

    return { postLogin, postRegister };
}

export default useAuth;