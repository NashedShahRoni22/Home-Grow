import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";

const Main = () => {
  return (
    <section>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </section>
  );
};

export default Main;
