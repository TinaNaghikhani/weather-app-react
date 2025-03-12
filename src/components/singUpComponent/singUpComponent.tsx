import Input from "../shared/input";
import SINGUPBUTTON from "../shared/sinUpButton";
import SunLoader from "../shared/sun";
import AlmondBlossoms from '../../assets/Almond Blossoms2.jpg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../shared/loader";
import axios from "axios";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const RegexPassword = /^\d{8,}$/;
export default function SingUpComponent() {
    const [loader, setLoader] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigator = useNavigate();
    const singupHandler =async (e:any) => {
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
            setLoader(true);
            try {
                setLoader(true);

                // ارسال دادهها به API
                const response = await axios.post(
                    "https://676ac00c863eaa5ac0df824c.mockapi.io/tinatodolist/contacts",
                    { email, password }
                );

                // در صورت موفقیت
                alert("ثبت نام موفق");
                setLoader(false);
                navigator("/weatherApp");
            } catch (error) {
                // در صورت خطا
                console.error("خطا در ثبت نام:", error);
                setLoader(false);
                alert("خطا در ارتباط با سرور. لطفا دوباره تلاش کنید.");
            }
        }
    };

    const loginHandler = (): void => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
            navigator("/login");
        }, 3000);
    }
    return (
        <div className="max-h-screen h-screen overflow-hidden p-0 m-0 flex gap-20  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${AlmondBlossoms})` }}>
            {loader && (
                <div className="bg-black h-screen w-full absolute inset-0 flex items-center justify-center  bg-opacity-50 z-50">
                    <Loader />
                </div>
            )}
            <div data-aos="fade-left" className="w-full p-0 flex">
                <div className="z-0 flex flex-col justify-center items-center w-1/2 p-24 ml-4 mt-3 text-center bg-sky-100 h-screen rounded-full border border-sky-500 border-8 border-dashed">
                    <form onSubmit={singupHandler}>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} label="Enter your E-mail:" placeholder="email@gmail.com" type="email" className="w-64 px-4 py-2 border border-sky-700 text-md text-sky-400 bg-sky-200 rounded-full shadow-lg focus:outline-none" />
                        {isSubmitted && emailError && <p className="text-xs text-red-500">{emailError}</p>}

                        <Input value={password} onChange={(e) => setPassword(e.target.value)} label="Enter your Password:" placeholder="123456789" type="password" className="w-64 px-4 py-2 border border-sky-700 text-md text-sky-400 bg-sky-200 rounded-full shadow-lg focus:outline-none" />
                        {isSubmitted && passwordError && <p className="text-xs text-red-500">{passwordError}</p>}

                        <p className="mt-4 mb-10 text-sky-700">have you SinUp before? so <span onClick={loginHandler} className="cursor-pointer text-blue-800 hover:text-blue-300">Login!</span></p>
                        <SINGUPBUTTON type="submit" />
                    </form>
                </div>
                <div className="w-1/2 h-screen bg-amber-100 rounded-full pt-20 -mt-32 -ml-52 flex justify-center items-center border border-amber-500 border-8 border-dashed">
                    <SunLoader />
                </div>
            </div>

        </div>
    )
}
