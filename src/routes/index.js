import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Detailpage from "../pages/Detailpage";
import Homepage from "../pages/Homepage";

import Loginpage from "../pages/loginPage/Loginpage";
import Registerpage from "../pages/registerPage/Registerpage";
import Resultpage from "../pages/Resultpage";
import Profilpage from "../pages/Profilpage";
import Paymentpage from "../pages/Paymentpage";

const Index = () => {
  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/register" || pathname === "/") {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
        </Routes>
      </div>
    );
  }
  return (
    <div>
      <Navbar nav="bg-[#fff] shadow-xl" />
      <Routes>
        <Route path="/results" element={<Resultpage />} />
        <Route path="/flight" element={<Detailpage />} />
        <Route path="/payment" element={<Paymentpage />} />
        <Route path="/account/profile" element={<Profilpage />} />
        <Route path="/account/orders" element={<Profilpage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Index;
