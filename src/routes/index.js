import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Detailpage from "../pages/Detailpage";
import Homepage from "../pages/Homepage";
import Resultpage from "../pages/Resultpage";
import Profilpage from "../pages/Profilpage";

const index = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results" element={<Resultpage />} />
        <Route path="/flight" element={<Detailpage />} />
        <Route path="/account/profile" element={<Profilpage />} />
        <Route path="/account/orders" element={<Profilpage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default index;
