import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarEiC from "../EditorInChief/components/Navbar.EiC";

function EICLayout() {
  return (
    <>
      <Header />
      <NavbarEiC />
      <div className="container mt-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default EICLayout;
