import React from "react";
import Carousel from "../components/Carousel";
import Card from "../components/card";

export default function Home() {
  return (
    <div className=" flex items-center justify-center bg-strip bg-scroll w-full h-screen relative ">
      <div className=" container  w-full  mx-2 rounded-lg  flex justify-center items-center bg-white backdrop-blur-md bg-opacity-10">
        <div className=" bg-blue-400 backdrop-blur-lg bg-opacity-10">
        <Carousel/>
        </div>
        <Card />

      </div>
    </div>
  );
}
