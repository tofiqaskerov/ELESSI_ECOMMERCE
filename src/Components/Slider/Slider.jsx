import React, { useEffect, useState } from "react";
import "./slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, EffectFade, A11y } from 'swiper';
import BannerImg from "../../Assets/Img/bike-slide1.webp";
import { Container } from "@mui/material";
import { BASE_URL } from "../../Config/api";
import SliderItem from "../SliderItem/SliderItem";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  const [sliderItem, setSliderItem] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/slider/getall`)
      .then((res) => res.json())
      .then((data) => setSliderItem(data.data));
  }, []);
  return (
    <>
      
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,EffectFade, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true, }}
      navigation={true}
      effect="fade"
      fadeEffect= {{crossFade: true}}
     className="swiper"
      onSlideChange={() => console.log('slide change')}
    >
       {sliderItem?.map((item, index) => (
          <SwiperSlide className="swiper__slide" key={index}>
             <SliderItem   position={index} title={item.title} subtitle={item.subtitle} img={item.photoUrl} />
          </SwiperSlide>
        ))}
    
    </Swiper>
    </>
  );
}

export default Slider;
