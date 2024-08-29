import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/white-cart.png";
import profile from "../assets/white-profile.png";
const Header = () => {
  return (
    <header className="py-5">
      <nav className="text-[#F2F2F2] flex items-center justify-between">
        <div className="flex items-center gap-2 ">
          <img className="w-8 md:w-10" src={logo} alt=""/>
          <Link className="text-2xl font-semibold">Errands</Link>
        </div>

        {/* center */}
        <div className="flex items-center gap-3 ">
          
          <div className=" hidden md:flex gap-4">
            <NavLink>Track Order</NavLink>
            <NavLink>Contact Us</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>Our Services</NavLink>
          </div>
        </div>

        {/* Left */}
        <div className="flex items-center gap-3 ">
        
          <NavLink>
            <img className="w-7" src={profile} alt="" />
          </NavLink>
          <div className="md:hidden">
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
