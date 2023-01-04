import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import timeConverter from "../../utils/timeConverter";

const useAuth = () => {
    const navigate = useNavigate();
    const postLogin = useCallback(async (val) => {
        try {
            await axios.post(`https://be-flightticket-production.up.railway.app/user/sign-in`, {
        email: val.email,
        password: val.password,
    }).then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data.data.token));
        localStorage.setItem('user', JSON.stringify(response.data.data));
        navigate('/');
    });
        } catch (error) {
            console.log(error)
        }
    });



    return { postLogin };
}

export default useAuth;