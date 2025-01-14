import React from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft } from "react-icons/fa";

import { FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
// CSS
import "../../assets/styles/heroslider.css";
// Import Swiper styles

const sliderData = [
  {
    background_image: slider1,
  },
  {
    background_image: slider2,
  },
];

function HeroSlider() {
  return (
    <div className={`top-slides container}`}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {sliderData?.map((slide, index) => (
          <SwiperSlide key={index} className="p-0 rounded-bottom-5">
            <img src={`${slide?.background_image}`} alt="Banner 1" />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <div className="custom-prev">
        <FaChevronLeft />
      </div>
      <div className="custom-next">
        <FaChevronRight />
      </div>
    </div>
  );
}

export default HeroSlider;
