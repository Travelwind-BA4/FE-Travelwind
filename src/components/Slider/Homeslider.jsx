// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { bali } from "../../assets/images/home";

const Homeslider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="rounded-lg" src={bali} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={bali} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={bali} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Homeslider;
