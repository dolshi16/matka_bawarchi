import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box } from "@mui/material";

export default function HeroSection() {
  return (
    <Box sx={{ height: "80vh" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2023/06/20/17/30/youtube-banner-8077450_1280.jpg"
            alt=""
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://designhub.co/wp-content/uploads/2020/10/Food1-CM.jpg"
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://designhub.co/wp-content/uploads/2020/10/FoodEF-1.jpg"
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://designhub.co/wp-content/uploads/2020/10/Food7EF.jpg"
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
