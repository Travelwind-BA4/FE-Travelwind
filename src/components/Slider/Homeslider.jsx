// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdLocationOn } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper";
import { location_1, location_2, location_3, location_4, location_5 } from "../../assets/images/home";

const Homeslider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
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
          1440: {
            slidesPerView: 4,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="shadow-lg rounded-xl  py-5">
            <div className="flex justify-center">
              <img className="rounded-lg" src={location_1} alt="waterfall" />
            </div>
            <div className="px-5 pb-4">
              <h1 className="mt-4 font-semibold">Greates Mountain</h1>
              <p className="flex items-center">
                <MdLocationOn className="text-[#7b7b7b] mr-1" />
                magelang,Indonesia
              </p>
              <div className="flex justify-between items-center mt-5">
                <p className="text-[#7b7b7b]">
                  <span className="font-semibold text-black">Rp.10.000</span> / person
                </p>
                <button className="bg-[#3e5cb8] text-white px-4 py-2 rounded-lg">Book</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg rounded-xl  py-5">
            <div className="flex justify-center">
              <img className="rounded-lg" src={location_2} alt="waterfall" />
            </div>
            <div className="px-5 pb-4">
              <h1 className="mt-4 font-semibold">High Ground</h1>
              <p className="flex items-center">
                <MdLocationOn className="text-[#7b7b7b] mr-1" />
                lombok,Indonesia
              </p>
              <div className="flex justify-between items-center mt-5">
                <p className="text-[#7b7b7b]">
                  <span className="font-semibold text-black">Rp.12.000</span> / person
                </p>
                <button className="bg-[#3e5cb8] text-white px-4 py-2 rounded-lg">Book</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg rounded-xl  py-5">
            <div className="flex justify-center">
              <img className="rounded-lg" src={location_3} alt="waterfall" />
            </div>
            <div className="px-5 pb-4">
              <h1 className="mt-4 font-semibold">Lemon River </h1>
              <p className="flex items-center">
                <MdLocationOn className="text-[#7b7b7b]" />
                bali,Indonesia
              </p>
              <div className="flex justify-between items-center mt-5">
                <p className="text-[#7b7b7b]">
                  <span className="font-semibold text-black">Rp.10.000</span> / person
                </p>
                <button className="bg-[#3e5cb8] text-white px-4 py-2 rounded-lg">Book</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg rounded-xl  py-5">
            <div className="flex justify-center">
              <img className="rounded-lg" src={location_4} alt="waterfall" />
            </div>
            <div className="px-5 pb-4">
              <h1 className="mt-4 font-semibold">Dinosaurus Land</h1>
              <p className="flex items-center">
                <MdLocationOn className="text-[#7b7b7b]" />
                kupang,Indonesia
              </p>
              <div className="flex justify-between items-center mt-5">
                <p className="text-[#7b7b7b]">
                  <span className="font-semibold text-black">Rp.15.000</span> / person
                </p>
                <button className="bg-[#3e5cb8] text-white px-4 py-2 rounded-lg">Book</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg rounded-xl  py-5">
            <div className="flex justify-center">
              <img className="rounded-lg" src={location_5} alt="waterfall" />
            </div>
            <div className="px-5 pb-4">
              <h1 className="mt-4 font-semibold">Waterfall Haven</h1>
              <p className="flex items-center">
                <MdLocationOn className="text-[#7b7b7b]" />
                yogyakarta,Indonesia
              </p>
              <div className="flex justify-between items-center mt-5">
                <p className="text-[#7b7b7b]">
                  <span className="font-semibold text-black">Rp.16.000</span> / person
                </p>
                <button className="bg-[#3e5cb8] text-white px-4 py-2 rounded-lg">Book</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Homeslider;
