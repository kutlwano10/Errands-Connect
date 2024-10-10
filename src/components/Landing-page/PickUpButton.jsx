import React from 'react'
import { Link , NavLink} from 'react-router-dom'

const PickUpButton = () => {
  return (
    <div className=" flex items-center justify-between p-4 mt-10  rounded-full shadow-lg py-3  font-medium  hover:bg-transparent duration-300 border hover:border-[#8766f5]  hover:border border-transparent">
    {/* Pickup Section */}
    <div className="flex flex-col items-start text">
      <span className="font-semibold text-sm text-gray-900">Pickup</span>
      <span className="text-gray-500 text-xs">Add Address</span>
    </div>

    {/* Divider */}
    <div className="border-l h-8 "></div>

    {/* Where Section */}
    <div className="flex flex-col items-start ">
      <span className="font-semibold text-sm text-gray-900">Where</span>
      <span className="text-gray-500 text-xs">Add address</span>
    </div>

    {/* Arrow Button */}
    <NavLink
      to="https://errands-connect-app.vercel.app/"
      className="flex items-center justify-center w-12 h-12 bg-[#8766f5] rounded-full text-white"
    >
      ➔
    </NavLink>
  </div>
  )
}

export default PickUpButton
