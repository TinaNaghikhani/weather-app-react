import { useEffect, useState } from "react";
import Loader from "../shared/loader";
import yellowTree from "../../assets/yellowTree.jpg";
import Input from "../shared/input";
import Card from "../shared/wethearBox";
import axios from "axios";

//for delay on calling api
const useDebounce = <T,>(value: T, delay: number): T => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounceValue;
};


export default function Main() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [savedWeatherData, setSavedWeatherData] = useState([]);
  const typingDelay = useDebounce(city, 1000);

  // Get weather data from API
  const fetchWeather = async (searchCity: string) => {
    if (!searchCity.trim()) return;
    setLoading(true);
    try {
      const APIKEY = "e547d101022438d9c784ff7d24b103b8";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIKEY}&units=metric`
      );
      setWeatherData(response.data);
      console.log(response)
      const savedData: any[] = JSON.parse(localStorage.getItem("searchedCities") || "[]");
      if (savedData.length >= 7) {
        savedData.shift(); // حذف اولین آیتم (قدیمی‌ترین)
      }
      const updatedData = [...savedData, response.data];
      localStorage.setItem("searchedCities", JSON.stringify(updatedData));
      setSavedWeatherData(updatedData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again.");
    } finally {
      setLoading(false); // Disable loader
    }
  };

  useEffect(() => {
    if (typingDelay) {
      fetchWeather(typingDelay);
    } else {
      setWeatherData(null);
    }
  }, [typingDelay]);

  useEffect(() => {
    // Load saved data from localStorage on component mount
    const data: any[] = JSON.parse(localStorage.getItem("searchedCities") || "[]");
    setSavedWeatherData(data);
  }, []);

  return (
    <div className="w-full min-h-screen p-4 m-0 flex gap-20 flex-col inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${yellowTree})`, opacity: 0.7 }}>
      <div className="z-10 flex justify-around">
        <div className="flex flex-col gap-4">
          {savedWeatherData.slice(4, 7).map((data, index) => (
            <Card data-aos="zoom-out-left" key={index} weatherData={data} />
          ))}
        </div>
        <div className="w-1/3 flex flex-col items-center gap-40">
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            className="z-10 w-96 rounded-full p-4 focus:outline-none text-yellow-700 font-mono text-xl"
            placeholder="search"
          />
          {loading ? (
            <Loader />
          ) : weatherData ? (
            <Card data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500" weatherData={weatherData} />
          ) : null}
        </div>
        <div className="flex flex-col gap-4">
          {savedWeatherData.slice(0, 3).map((data, index) => (
            <Card data-aos="zoom-out-right" key={index} weatherData={data} />
          ))}
        </div>
      </div>
    </div>
  )
}