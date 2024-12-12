import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="lg:w-11/12 mx-auto w-full md:w-full">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
