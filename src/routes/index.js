import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Homepage from "../pages/Homepage";
import Loginpage from "../pages/loginPage/Loginpage";
import Registerpage from "../pages/registerPage/Registerpage";
import Resultpage from "../pages/resultPage/Resultpage";

const index = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result" element={<Resultpage />} />
        <Route path="/login" element={<Loginpage/>} />
        <Route path="/register" element={<Registerpage/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default index;
