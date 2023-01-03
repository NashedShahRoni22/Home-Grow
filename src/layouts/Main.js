import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";

const Main = () => {
  return (
    <section>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Main;
