import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Hero from "./Landing-page/Hero";
import OrderServices from "./Landing-page/CardServices";
const Layout = () => {
  return (
    <div>
      <div className="md:min-h-full bg-[url('./assets/Image.png')] bg-center bg-cover px-[9%] relative">
        <Header />
        <Hero />
      </div>
      <div className="">
        <OrderServices />
        <div className="">
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
