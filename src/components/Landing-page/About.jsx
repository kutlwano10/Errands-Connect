import React from "react";

const About = () => {
  return (
    <div className="text-center my-12">
      <h1 className="font-extrabold text-gray-800 text-4xl">About Us</h1>
      <p className="text-gray-400 text-md px-[9%] my-12 lg:px-[15%]">
        Errand Connect is a reliable and convenient errand running service
        designed to make your life easier. We provide a wide range of services,
        from grocery shopping and dry cleaning to picking up prescriptions and
        delivering packages. Our mission is to simplify your daily tasks,
        freeing up your time and energy for what truly matters.
      </p>

      <div className="flex flex-col md:flex-row gap-5 px-[9%] ">
          <div className="border h-[200px] justify-center shadow-md text-center border-[#8766f5] p-4 rounded-xl ">
            <h2 className="font-semibold text-xl  text-gray-600 my-4">Save Time</h2>
            <p className="text-md text-gray-500 px-4">We handle your errands, so you can focus on other things.</p>
          </div>
          <div className="border h-[200px] justify-center shadow-md text-center border-[#8766f5] p-4 rounded-xl ">
            <h2 className="font-semibold text-xl  text-gray-600 my-4">Reduce Stress</h2>
            <p className="text-md text-gray-500 px-4">
              Let us take care of the errands, so you don't have to worry about
              them.
            </p>
          </div>
          <div className="border h-[200px] justify-center shadow-md text-center border-[#8766f5] p-4 rounded-xl ">
            <h2 className="font-semibold text-xl  text-gray-600 my-4">Enjoy Convenience</h2>
            <p className="text-md text-gray-500 px-4">
              We make it easy to get your errands done, without you having to lift a
              finger.
            </p>
          </div>
      </div>
    </div>
  );
};

export default About;
