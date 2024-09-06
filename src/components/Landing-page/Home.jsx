import React from "react";
import Hero from "./Hero";
import CardServices from "./CardServices";

import clicks from "../../assets/clicks.png";
import pnp from "../../assets/pnp.png";
import shoprite from "../../assets/shoprite.png";
import skip from "../../assets/skip.png";
import grocery from "../../assets/grocery-image.png";
import runner from "../../assets/delivery-service.png";

import laundry from "../../assets/laundry.jpg";
import delivery from "../../assets/delivery-man.png";
import deliveryMan from "../../assets/delivery-man-icon.png"
import About from "./About";

const Home = () => {
  return (
    <div className="">
      <Hero className="" />
      <div className=" px-[9%] bottom-0 absolute w-full ">
        
        <div className=" overflow-auto ">
          <div className="flex justify-center animate-scroll gap-6 ">
            <img
              className="w-[150px] h-[60px] object-contain rounded-lg shadow-lg"
              src={clicks}
              alt=""
            />
            <img
              className="w-[150px] h-[60px] object-contain rounded-lg shadow-lg"
              src={pnp}
              alt=""
            />
            <img
              className="w-[150px] h-[60px] object-contain rounded-lg shadow-lg"
              src={shoprite}
              alt=""
            />
            <img
              className="w-[150px] h-[60px] object-contain rounded-lg shadow-lg"
              src={clicks}
              alt=""
            />
            <img
              className="w-[150px] h-[60px] object-contain rounded-lg shadow-lg"
              src={skip}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="">
        <CardServices
          title="Dry Cleaning"
          description="We'll pick up your dry cleaning and deliver it back
to you, ready to wear."
          image={laundry}
        />
        <div className="my-4">
          <CardServices
            title="Package Delivery"
            description="We can pick up and deliver packages could be a prescription or any package, saving you
time and hassle."
            image={delivery}
          />
        </div>
        <div className="my-4">
          <CardServices
            title="Grocery Delivery"
            description="We can pick up your groceries from your
preferred store and deliver them right to your
doorstep."
            image={grocery}
          />
        </div>
      </div>
      <div>
        <About className=" " />
        <div className="px-[9%]">
          <hr className="border-t-2 mx-auto border-gray-300 my-4  w-[70%] " />
        </div>
      </div>
      <div className="text-center px-[9%] my-12 text-gray-600 bg-[#f2f2f2] pb-10">
        <h1 className="font-extrabold text-gray-800 text-4xl py-10">
          Earn Money As Errand Runner
        </h1>

        <p className="text-gray-600 text-sm mb-6 lg:px-10">
          Our team of dedicated errand runners is committed to providing you
          with the best possible service. They are reliable, friendly, and
          experienced in handling all sorts of errands. Each runner is carefully
          screened and trained to ensure your satisfaction.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <img
            className="w-[90%] md:w-[60%] lg:w-[50%] object-cover"
            src={runner}
            alt=""
          />
          <div className="flex flex-col md:flex-row lg:flex-col lg:px-[5%]">
            <div>
              <h2 className="font-semibold text-gray-700  ">
                Background Checks
              </h2>
              <p className="text-gray-500 p-4 ">
                We perform background checks on all our runners to ensure your
                safety and peace of mind.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-700 ">
                Customer Satisfaction
              </h2>
              <p className="text-gray-500 p-4 ">
                We are committed to providing the highest level of customer
                service, and our runners are dedicated to exceeding your
                expectations.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-700 ">
                Friendly & Professional
              </h2>
              <p className="text-gray-500 p-4 ">
                Our runners are friendly, professional, and always ready to go
                the extra mile for you.
              </p>
            </div>
          </div>
          
        </div>
        <div className="">
            {/* <a className='bg-[#5e6ed9] py-3 px-8 rounded-3xl font-medium inline-block mr-4 hover:bg-transparent duration-300 border hover:border-[#8766f5] hover:border border-transparent' href="">Order Now</a> */}
            <a
              href=""
              className="bg-[#8766f5] py-3 px-8  rounded-3xl font-medium inline-block  hover:bg-transparent duration-300 border hover:border-[#8766f5]  hover:border border-transparent text-[#ffffff]"
            >
              <img className="w-8 inline-block mr-2" src={deliveryMan} alt=""  />
              Become a Runner{" "}

              {/* <span className="rotate-90 inline-block text-lg ">&#10148;</span> */}
            </a>
            {/* <PickUpButton className=""/> */}
          </div>
      </div>
    </div>
  );
};

export default Home;
