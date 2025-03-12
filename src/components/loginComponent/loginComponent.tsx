import Input from "../shared/input";
import SunLoader from "../shared/sun";
import LOGINBUTTON from "../shared/loginButton";
import starryNight from "../../assets/starry night2.jpg"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../shared/loader";
import axios from "axios";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const RegexPassword = /^\d{8,}$/;
export default function LoginComponent() {
  const [loader, setLoader] = useState(false)
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigator = useNavigate();

  const logInHandler =async (e:any) => {
    e.preventDefault();
    setIsSubmitted(true)
    if (!emailRegex.test(email)) {
      setEmailError("wrong email address")
    } else {
      setEmailError("")
    }
    if (!RegexPassword.test(password)) {
      setPasswordError("Password must be at least 8 digits")
    } else {
      setPasswordError("")
    }

    if (emailRegex.test(email) && RegexPassword.test(password)) {
      try {
        setLoader(true);
        const response = await axios.get(
          `https://676ac00c863eaa5ac0df824c.mockapi.io/tinatodolist/contacts?email=${email}`
        );

        // جستجو در تمام داده‌های API برای پیدا کردن ایمیل و رمز عبور
        const user = response.data.find((user) => user.email === email);

        if (user) {
          // اگر ایمیل پیدا شد، رمز عبور را بررسی می‌کنیم
          if (user.password === password) {
            // اگر رمز عبور صحیح بود، به صفحه weatherApp هدایت می‌کنیم
            navigator("/weatherApp");
          } else {
            // اگر رمز عبور اشتباه بود
            setPasswordError("رمز عبور اشتباه است");
          }
        }

      } catch (error) {
        console.error("خطا در ارتباط:", error);
        if (axios.isAxiosError(error) && error.response) {
          // بررسی اگر status 404 باشد
          if (error.response.status === 404) {
            navigator("/signUp");
          } else {
            // اگر خطای دیگری باشد
            setLoader(false);
          }
        } else {
          // در صورت هر نوع خطای دیگر (مثل مشکلات شبکه یا سرور)
          setLoader(false);
        }
      } 
    }
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
      <div data-aos="fade-right" className="w-full p-0 flex">
              <div className="w-1/2 h-screen bg-amber-100 rounded-full pt-20 ml-10 -mt-32 -mr-52 flex justify-center items-center border border-amber-500 border-8 border-dashed">
        <SunLoader />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 p-24 ml-4 mt-3 text-center bg-sky-100 h-screen rounded-full border border-sky-500 border-8 border-dashed">
        <form onSubmit={logInHandler}>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} label="Enter your E-mail:" placeholder="email@gmail.com" type="email" className="w-64 px-4 py-2 border border-sky-700 text-md text-sky-400 bg-sky-200 rounded-full shadow-lg focus:outline-none" />
          {isSubmitted && emailError && <p className="text-xs text-red-500">{emailError}</p>}

          <Input value={password} onChange={(e) => setPassword(e.target.value)} label="Enter your Password:" placeholder="123456789" type="password" className="w-64 px-4 py-2 border border-sky-700 text-md text-sky-400 bg-sky-200 rounded-full shadow-lg focus:outline-none" />
          {isSubmitted && passwordError && <p className="text-xs text-red-500">{passwordError}</p>}

          <p className="mt-4 mb-10 text-sky-700">have'nt you SinUp before? so <span onClick={singUpHandler} className="cursor-pointer text-blue-800 hover:text-blue-300">SinUp!</span></p>
          <LOGINBUTTON type="submit" />
        </form>
      </div>
      </div>


    </div>
  )
}

