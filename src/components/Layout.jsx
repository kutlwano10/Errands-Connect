import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
    <div className="">
      <Header/>
      <main className="">
        <Outlet/>
      </main>
      <div className="" ><Footer/></div>
    </div>
    
    </>
  );
};

export default Layout;
