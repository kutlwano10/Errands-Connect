import React from 'react'
import laundry from '../../assets/laundry.jpg'
import { Link } from 'react-router-dom'

const OrderServices = () => {
  return (
    <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
      {/* Left Section: Icon, Heading, and Description */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-2">Dry Cleaning</h2>
        <p className="text-gray-600">
          Convenient pickup and delivery to save you time. High-quality cleaning
          to keep you looking your best.
        </p>
        <Link to='/pickup' className='bg-[#5e6ed9] mt-8 py-3 px-8 rounded-3xl font-medium inline-block mr-4 hover:bg-transparent duration-300 border hover:border-[#8766f5] hover:border border-transparent'>Request Pick-up</Link>
      </div>
      {/* Right Section: Image */}
      <div className="flex-1">
        {/* Replace 'imageUrl' with the path to your actual image */}
        <img
          src={laundry}
          alt="Dry Cleaning Service"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

export default OrderServices
