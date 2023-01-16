import React, { useEffect, useState } from "react";
import "./slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, EffectFade, A11y, Autoplay } from 'swiper';
import BannerImg from "../../Assets/Img/bike-slide1.webp";
import { Container } from "@mui/material";
import { BASE_URL } from "../../Config/api";
import SliderItem from "../SliderItem/SliderItem";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider({data}) {

  return (
    <>
      
      <Swiper
      spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{clickable: true,}}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
        onScroll={() =>{
          
        }}
    >
       {data?.map((item, index) => (
          <SwiperSlide className="swiper__slide" key={index}>
             <SliderItem   position={index} title={item.title} subtitle={item.subtitle} img={item.photoUrl} />
          </SwiperSlide>
        ))}
    
    </Swiper>
    </>
  );
}

export default Slider;
