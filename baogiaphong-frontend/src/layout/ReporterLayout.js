import React from "react";
import Header from "../components/Header";
import NavBarMenuReporter from "../reporter/components/Navbar.reporter";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function ReporterLayout() {
  return (
    <>
      <Header />
      <NavBarMenuReporter />
      <div className="container mt-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default ReporterLayout;
