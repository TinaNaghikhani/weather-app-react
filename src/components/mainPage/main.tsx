import { useEffect, useState } from "react";
import Loader from "../shared/loader";
import yellowTree from "../../assets/yellowTree.jpg"
import Input from "../shared/input";
import Card from "../shared/wethearBox";
import axios from "axios";

//for delay on calling api
const useDebounce = (value, dealay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const setTimeOut = setTimeout(() => {
      setDebounceValue(value)
    }, dealay);
    return () => {
      clearTimeout(setTimeOut);
    };
  }, [value, dealay])
  return debounceValue;
};


export default function Main() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  //user typing debounce
  const typingDelay = useDebounce(city, 1000)
  //get weather
  const fetchWeather = async (searchCity: string) => {
    if (!searchCity.trim()) return

    setLoading(true)
    try {
      const APIKEY = "e547d101022438d9c784ff7d24b103b8"
      const respons = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIKEY}&units=metric`)

      setWeatherData(respons.data)
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again.");
    } finally {
      setLoading(false); // غیرفعال کردن لودر
    }
  }

  useEffect(() => {
    if (typingDelay) {
      fetchWeather(typingDelay)

    } else {
      setWeatherData(null)

    }
  }, [typingDelay]);

  return (
    <div className="relative p-4 overflow-hidden p-0 m-0 flex gap-20 flex-col" >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${yellowTree})`, opacity: 0.70 }}
      ></div>
      <div className="z-10 flex justify-between">
        <div className="flex flex-col gap-4 items-center">

        </div>
        <div className="w-1/3 flex flex-col items-center gap-40">
          <Input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="z-10 w-96 rounded-full p-4 focus:outline-none text-yellow-700 font-mono text-xl" placeholder="search" />

          {loading ? (
            <Loader /> // نمایش لودر در حال بارگذاری
          ) : weatherData ? (
            <Card weatherData={weatherData} /> // نمایش اطلاعات آب و هوا در کارت
          ) : null}
        </div>
        <div className="flex flex-col gap-4 ">

        </div>
      </div>
    </div>
  )
}
