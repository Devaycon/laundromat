import React from "react";
import { machine_seethrough } from "../assets/images";
import { Link } from "react-router-dom";
import { footerLinkData } from "../data/footerLinkData";
import { RiPaintBrushFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-primary py-20 px-4 relative">
      <img
        src={machine_seethrough}
        alt="machine washinner"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-15"
      />
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 relative">
        <div className="col-span-2 flex flex-col gap-1">
          <Link to={"/"} className="flex gap-3 items-center ">
            <RiPaintBrushFill className="text-white text-xl md:text-2xl" />
            <h1 className="text-white font-bold text-xl md:text-2xl">
              Laundromat
            </h1>
          </Link>
          <p className="text-white text-base md:text-lg leading-loose py-2">
            Laudromat is your one stop shop for dry cleaning service lovers out
            there Who love having the neatest and iron clothes in the room.
          </p>
        </div>
        <div className="flex flex-col md:pt-4">
          {footerLinkData[0].map((el) => (
            <Link
              key={el.id}
              to={el.link}
              className="text-white text-base md:text-lg hover:translate-x-2 py-1 px-2"
            >
              {el.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:pt-4">
          {footerLinkData[1].map((el) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              key={el.id}
              to={el.link}
              className="text-white text-base md:text-lg hover:translate-x-2 py-1 px-2"
            >
              {el.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
