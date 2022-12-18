import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Detailpage from "../pages/Detailpage";
import Homepage from "../pages/Homepage";
import BookingPage from "../pages/Bookingpage";

import Loginpage from "../pages/Loginpage";
import Registerpage from "../pages/Registerpage";
import Resultpage from "../pages/Resultpage";
import Profilpage from "../pages/Profilpage";
import Completepage from "../pages/Completepage";
import Payment from "../pages/Payment";
import Payments from "../pages/Payments";

const Index = () => {
  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/register" || pathname === "/") {
    return (
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Navbar nav="bg-[#fff] shadow-xl" />
      <Routes>
        <Route path="/results/search" element={<Resultpage />} />
        <Route path="/flight/:id" element={<Detailpage />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/complete" element={<Completepage />} />
        <Route path="/payment" element={<Payment />} />

        <Route path="/account/profile" element={<Profilpage />} />
        <Route path="/account/traveler" element={<Profilpage />} />
        <Route path="/account/orders" element={<Profilpage />} />
        <Route path="/account/orders/:order" element={<Profilpage />} />
        <Route path="/account/changepass" element={<Profilpage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Index;
