import { useMemo } from "react";
import Loader from "../shared/loader";
import SunLoader from "../shared/sun";
import yellowTree from "../../assets/yellowTree.jpg"
import Input from "../shared/input";
import Card from "../shared/wethearBox";
import { weatherGet } from "../context/get/get";

export default function Main() {
  useMemo
  weatherGet()
  return (
    <div className="relative p-4 overflow-hidden p-0 m-0 flex gap-20 flex-col" >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${yellowTree})`, opacity: 0.70 }}
      ></div>
      <div className="z-10 flex justify-between">
        <div className="flex flex-col gap-4 items-center"> 
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-1/3 flex flex-col items-center gap-40">
          <Input type="text" className="z-10 w-96 rounded-full p-4 focus:outline-none text-yellow-700 font-mono text-xl" placeholder="search" />

          <Card />
        </div>
        <div className="flex flex-col gap-4 ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
