import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/errands-logo4.png";
import cart from "../assets/white-cart.png";
import profile from "../assets/white-profile.png";
const Header = () => {
  const toggleNavbar = () => {
    const dropDown = document.getElementById("navbar-dropdown");
    dropDown.classList.contains("hidden")
      ? dropDown.classList.remove("hidden")
      : dropDown.classList.add("hidden");
  };

 

  return (
    <header
      className={` py-6 fixed z-10 top-0 w-[100%] bg-black/85 `}
    >
      <nav className="text-[#F2F2F2] md:flex  items-center px-[9%] md:justify-between">
        <div className="hidden md:flex items-center gap-2  ">
          <div className="flex gap-1  items-center ">
            <img className="object-cover w-32" src={logo} alt="" />
            
          </div>
        </div>

        <div className="md:hidden flex  items-center ">
            <div className=" ">
              <img className="w-32" src={logo} alt="" />
              
            </div>
            
              <div className="md:hidden ml-auto">
                <svg
                  onClick={toggleNavbar}
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

        <div className="flex items-center gap-3 ">
          <NavLink className="hidden md:block">
            <img className="w-7" src={profile} alt="" />
          </NavLink>

          {/* DropDown Menu */}
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col top-10 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {/* <li>
                <Link
                  to=""
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Wishlist
                </Link>
              </li> */}
              <Link to="">
                <li className="hidden lg:block md:block relative">
                  <div className="t-0 absolute left-3 -top-4">
                    <p className="flex h-2 w-2 items-center  justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      2
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="file: h-6 w-6 stroke-white cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </li>
              </Link>
              <li>
                <Link
                  to=""
                  className="lg:hidden md:hidden py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Track Order
                </Link>
              </li>

              <li>
                <Link
                  to="login"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
