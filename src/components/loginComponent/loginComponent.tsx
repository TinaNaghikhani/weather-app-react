import Input from "../shared/input";
import SunLoader from "../shared/sun";
import LOGINBUTTON from "../shared/loginButton";
import starryNight from "../../assets/starry night2.jpg"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../shared/loader";
import Raining from "../shared/elements/rainig";
import Sunny from "../shared/elements/sunny";
import Cloudy from "../shared/elements/cloudy";

const RegexPassword = /^[1-9]{8,}$/
export default function LoginComponent() {
  const [loader, setLoader] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (RegexPassword.test(value)) {
      setIsValid(true);
      setIsDisabled(false);
    } else {
      setIsValid(false);
      setIsDisabled(true);
    }
  }, [value]);

  const navigator = useNavigate();
  const logInHandler = (): void => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      navigator("/weatherApp");
    }, 5000);
  };
  const singUpHandler = (): void => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigator("/signUp");
    }, 3000);
  }
  return (

    <div className="max-h-screen h-screen overflow-hidden p-0 m-0 flex gap-20  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${starryNight})` }}>
      {loader && (
        <div className="bg-black h-screen w-full absolute inset-0 flex items-center justify-center  bg-opacity-50 z-50">
          <Loader />
        </div>
      )}
      <div className="w-1/2 h-screen bg-amber-100 rounded-full pt-20 ml-10 -mt-32 -mr-52 flex justify-center items-center border border-amber-500 border-8 border-dashed">
        <SunLoader />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 p-24 ml-4 mt-3 text-center bg-sky-100 h-screen rounded-full border border-sky-500 border-8 border-dashed">
        <div>
          <Input value={value} label="Enter your E-mail:" placeholder="email@gmail.com" type="email" className="w-64 px-4 py-2 border border-sky-700 text-md text-sky-400 bg-sky-200 rounded-full shadow-lg focus:outline-none" />
          <Input value={value} label="Enter your Password:" placeholder="123456789" type="password" className="w-64 px-4 py-2 border border-sky-700 text-md text-sky-400 bg-sky-200 rounded-full shadow-lg focus:outline-none" />
          {isValid && <p className="text-xs text-green-500">That's right!</p>}
          {!isValid && <p className="text-xs text-red-500">Please Choose 5 to 10</p>}
          <p className="mt-4 mb-10 text-sky-700">have'nt you SinUp before? so <span onClick={singUpHandler} className="cursor-pointer text-blue-800 hover:text-blue-300">SinUp!</span></p>
          <LOGINBUTTON onClick={logInHandler} />
        </div>
        <div className="flex gap-10 z-10 m-2 items-baseline">

        </div>
      </div>

    </div>
  )
}

