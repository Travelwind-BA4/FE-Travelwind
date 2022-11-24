import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Homepage from "../pages/Homepage";
import Resultpage from "../pages/Resultpage";

const index = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result" element={<Resultpage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default index;
