import React from 'react'
import image from "../../assets/grocery-image.png"

const HeroSection = () => {
  return (
    <div className='flex  items-center'>
      <div className='text-white max-w-xl'>
        <h1 className='text-3xl lg:text-6xl font-semibold leading-10 mb-6'>Package<br/>Delivery in <span className='font-light'>15 min</span></h1>
        <p>Save time and stress with Errand Connect. We handle your errands, so you can focus on what matters most.</p>
        <div className='my-8'>
          <a className='bg-[#5e6ed9] py-3 px-8 rounded-3xl font-medium inline-block mr-4 hover:bg-transparent duration-300 border hover:border-[#8766f5] hover:border border-transparent' href="">Order Now</a>
          <a href="">Download App <span className='rotate-90 inline-block text-lg'>&#10148;</span></a>
        </div>
        
      
      </div>
      <img className=' w-[50%]  hidden md:block ' src={image} alt=""  />
    </div>
  )
}

export default HeroSection
