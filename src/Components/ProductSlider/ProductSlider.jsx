import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import './product_slider.scss'
import ProductSliderItem from '../ProductSliderItem/ProductSliderItem';
function ProductSlider({data}) {
  return (
    <>
        <Swiper
        slidesPerView={2}
        centeredSlides={true}
        
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
       
      >
        {
            data?.map((item, index) => (
               <SwiperSlide  key={index}><ProductSliderItem  id={item.id} img={item.coverPhoto} title={item.title} price={item.price}/></SwiperSlide>
            ))
        }
        
      </Swiper>
    </>
  )
}

export default ProductSlider