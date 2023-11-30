import { useEffect, useState } from "react";
import { getCookie } from "../helpers/cokieesFunc";

export const useUserIp = () => {
    const [ip, setUserIp] = useState("");
    const [country, setCountry] = useState("gb");
    console.log(ip, country);

    useEffect(() => {
        const userIp = getCookie("user-ip") || "";
        const countryAdress = getCookie("user-country") || "";
        setUserIp(userIp);
        setCountry(countryAdress)
    }, []);

    return { ip, country };
};
