import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { header_1 } from "../../assets/images/home";
const Homeslider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        style={{ maxHeight: "400px" }}
        className="homeSlider rounded-lg cursor-pointer"
      >
        <SwiperSlide>
          <div className="">
            <img src={header_1} alt="" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={header_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={header_1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Homeslider;
