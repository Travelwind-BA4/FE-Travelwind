import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Resultpage from "../pages/Resultpage";

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result" element={<Resultpage />} />
      </Routes>
    </div>
  );
};

export default index;
