import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import timeConverter from "../../utils/timeConverter";

const useAuth = () => {
    const navigate = useNavigate();
    const postLogin = useCallback(async (value) => {
        try {
            await axios.post(`https://api-flight.up.railway.app/user/sign-in`, {
        email: value.email,
        password: value.password,
    }).then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data.data.token));
        localStorage.setItem('user', JSON.stringify(response.data.data));
        navigate('/');
    });
        } catch (error) {
            console.log(error)
        }
    });

    const postRegister = useCallback(async (value) => {
        try {
            console.log(value.email);
            await axios.post(`https://api-flight.up.railway.app/user/sign-up`, {
                fullName: value.fullName,
                birthDate: timeConverter(value.birthDate),
                telephone: value.telephone,
                email: value.email,
                password: value.password,
                gender: value.gender,
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