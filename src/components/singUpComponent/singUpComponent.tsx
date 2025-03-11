import Input from "../shared/input";
import SINGUPBUTTON from "../shared/sinUpButton";
import SunLoader from "../shared/sun";
import AlmondBlossoms from '../../assets/Almond Blossoms2.jpg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../shared/loader";

export default function SingUpComponent() {
    const [loader, setLoader] = useState(false)

    const navigator = useNavigate();
    const singupHandler = (): void => {
        setLoader(true);

        setTimeout(() => {
            setLoader(false);
            navigator("/weatherApp");
        }, 5000);
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
            <div className="z-0 flex flex-col justify-center items-center w-1/2 p-24 ml-4 mt-3 text-center bg-sky-100 h-screen rounded-full border border-sky-500 border-8 border-dashed">
                <div>
                    <Input label="Enter your E-mail:" placeholder="email@gmail.com" type="email" className="w-64 px-4 py-2 border border-sky-700 text-md text-sky-400 bg-sky-200 rounded-full shadow-lg focus:outline-none" />
                    <Input label="Enter your Password:" placeholder="123456789" type="password" className="w-64 px-4 py-2 border border-sky-700 text-md text-sky-400 bg-sky-200 rounded-full shadow-lg focus:outline-none" />
                    <p className="mt-4 mb-10 text-sky-700">have you SinUp before? so <span onClick={loginHandler} className="cursor-pointer text-blue-800 hover:text-blue-300">Login!</span></p>
                    <SINGUPBUTTON onClick={singupHandler} />
                </div>
                <div className="flex gap-10 z-10 m-2 items-baseline">

                </div>
            </div>
            <div className="w-1/2 h-screen bg-amber-100 rounded-full pt-20 -mt-32 -ml-52 flex justify-center items-center border border-amber-500 border-8 border-dashed">
                <SunLoader />
            </div>
        </div>
    )
}
