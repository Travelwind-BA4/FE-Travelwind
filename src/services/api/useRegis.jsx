import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import timeConverter from "../../utils/timeConverter";

const useRegis = () => {
    const navigate = useNavigate();
    const postRegister = useCallback(async ({ fullName, birthDate, telephone, gender, email, password }) => {
        try {
            console.log(email);
            await axios.post(`https://api-flight.up.railway.app/user/sign-up`, {
                fullName: fullName,
                birthDate: timeConverter(birthDate),
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

    return { postRegister }
}
export default useRegis;