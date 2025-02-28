import axios from "axios"
import { clipPath } from "framer-motion/client";

const APIKEY = " e547d101022438d9c784ff7d24b103b8"


export const weatherGet = async () => {
    try {
        const respons = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIKEY}&units=metric`);
        console.log(respons)
    }
    catch (error) {
        console.error(error);

    }
}
