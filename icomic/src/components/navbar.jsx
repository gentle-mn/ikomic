import React from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossedSabres } from "react-icons/gi";

export default function navbar() {
  return (
    <nav
      className="relative bg-blue-400 bg-opacity-10 backdrop-blur-md flex flex-wrap
      w-full shadow-md justify-between items-center lg:flex-wrap
      lg:justify-start rounded-b-lg font-comic"
    >
      <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6 ">
        <a href="./">
          <img
            src={logo}
            alt="ICOMIC Logo"
            className="block border-0 py-2 px-2.5 h-[100px]  "
          />
        </a>
        <ul className=" flex  justify-between font-bold text-4xl text-white items-center font-comic  ">
          <li>
            <a
              href="/"
              className="px-2 mx-1 hover:bg-white hover:text-black  rounded"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="/comic"
              className="px-2 mx-1 hover:bg-white hover:text-black rounded"
            >
              COMIC
            </a>
          </li>
          <li>
            <a
              href="/manga"
              className="px-2 mx-1 hover:bg-white hover:text-black rounded"
            >
              MANGA
            </a>
          </li>
          <li>
            <a
              href="/merchandise"
              className="px-2 mx-1 hover:bg-white hover:text-black rounded"
            >
              MERCH
            </a>
          </li>
        </ul>
        <button className="text-bold  text-red-500 border-2 rounded px-2 py-1.5 mx-1 hover:bg-red-600 hover:text-white  border-red-600 ">
          Sign-IN/Sign-UP
        </button>
        <span className="mx-4 px-4  flex justify-between h-[28px] ">
          <input
            type="text"
            placeholder='Search "Naruto"'
            className="rounded-tl-lg rounded-bl-lg mx-2 w-[12rem] p-2 h-9  my-[-4px]"
          />
          <button className="text-red-500 px-2 my-[-4px] text-center font-extrabold  rounded-tr-lg rounded-br-lg border-2 border-red-600  h-9 hover:bg-red-700 hover:text-white">
            Search
          </button>
        </span>
      </div>
    </nav>
  );
}
