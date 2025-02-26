import Input from "../shared/input";
import SunLoader from "../shared/sun";
import LOGINBUTTON from "../shared/loginButton";
import starryNight from "../../assets/starry night2.jpg"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../shared/loader";
import Raining from "../shared/elements/rainig";
import Sunny from "../shared/elements/sunny";
import Cloudy from "../shared/elements/cloudy";

export default function LoginComponent() {
  const [loader, setLoader] = useState(false)

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
          <Input label="Enter your E-mail:" placeholder="email@gmail.com" type="email" className="w-64 px-4 py-2 border border-sky-700 text-md text-sky-400 bg-sky-200 rounded-full shadow-lg focus:outline-none" />
          <Input label="Enter your Password:" placeholder="123456789" type="password" className="w-64 px-4 py-2 border border-sky-700 text-md text-sky-400 bg-sky-200 rounded-full shadow-lg focus:outline-none" />
          <p className="mt-4 mb-10 text-sky-700">have'nt you SinUp before? so <span onClick={singUpHandler} className="cursor-pointer text-blue-800 hover:text-blue-300">SinUp!</span></p>
          <LOGINBUTTON onClick={logInHandler} />
        </div>
        <div className="flex gap-10 z-10 m-2 items-baseline">

        </div>
      </div>

    </div>
  )
}

