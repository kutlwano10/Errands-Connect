import React from "react";
import { Link } from "react-router-dom";
import PickUpButton from "./PickUpButton";

const CardServices = ({title, image, description, }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-5 items-center p-6 px-[9%] bg-white rounded-lg ">
        {/* Left Section: Icon, Heading, and Description */}
        <div className="flex-1 md:mr-6">
          <h2 className="text-3xl text-gray-800 font-semibold mb-8 text-center ">
            {title}
          </h2>
          <p className="text-gray-600 text-center">
            {description}
          </p>
          <PickUpButton />
        </div>
        {/* Right Section: Image */}
        <div className="flex-1 mt-6 md:mt-0 ">
          <img src={image} alt={title} className="rounded-lg " />
        </div>
      </div>
      <div className="px-[9%]">
        <hr className="border-t-2 mx-auto border-gray-300 my-4  w-[70%] "/>
      </div>
    </>
  );
};

export default CardServices;
