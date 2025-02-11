import { SiJira } from "react-icons/si";
import { LuFileSpreadsheet } from "react-icons/lu";
import { SiPostman } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiAppium } from "react-icons/si";
import KatalonIcon from "../assets/katalon.png";
import { SiDbeaver } from "react-icons/si";
import { SiQase } from "react-icons/si";
import { SiApachejmeter } from "react-icons/si";

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJira className="text-7xl text-blue-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <LuFileSpreadsheet className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCypress className="text-7xl " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAppium className="text-7xl text-red-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={KatalonIcon} alt="Katalon" className="w-20 h-20" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDbeaver className="text-7xl text-brown-900" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiQase className="text-7xl text-blue-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiApachejmeter className="text-7xl text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
