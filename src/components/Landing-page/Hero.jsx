import React from "react";
// import image from "../../assets/grocery-image.png";
import background from "../../assets/Image.png";


const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <img className="object-cover absolute  w-full bg-center bg-cover h-screen" src={background} alt=""  />
      <div className="absolute  flex items-center justify-center px-[9%] top-[200px] ">
        <div className="text-white max-w-xl text-center md:text-left  ">
          <h1 className="text-3xl lg:text-6xl font-semibold leading-10 mb-6 ">
            Package
            <br />
            Delivery in <span className="font-light">15 min</span>
          </h1>
          <p>
            Save time and stress with Errand Connect. We handle your errands, so
            you can focus on what matters most.
          </p>
          <div className="my-10">
            {/* <a className='bg-[#5e6ed9] py-3 px-8 rounded-3xl font-medium inline-block mr-4 hover:bg-transparent duration-300 border hover:border-[#8766f5] hover:border border-transparent' href="">Order Now</a> */}
            <a
              href=""
              className="bg-[#8766f5] py-3 px-8 rounded-3xl font-medium inline-block  hover:bg-transparent duration-300 border hover:border-[#8766f5] hover:border border-transparent "
            >
              Download App{" "}
              <span className="rotate-90 inline-block text-lg ">&#10148;</span>
            </a>
            {/* <PickUpButton className=""/> */}
          </div>
      
        </div>
        {/* <img className=" w-[50%] lg:w-[40%] object-cover hidden md:block relative" src={image} alt="" /> */}
      </div>
    </div>
  );
};

export default HeroSection;
