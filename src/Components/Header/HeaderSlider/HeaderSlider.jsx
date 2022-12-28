import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { headerData } from "../../../Assets/Data/HeaderData";
import HeaderSliderItem from "../HeaderSliderItem/HeaderSliderItem";
import './header_slider.scss'
function HeaderSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      spaceBetween={50}
      pagination={{ clickable: true, }}
      navigation={false}
      loop={true}
    >
        {
           headerData?.map((item, index) =>(
              <SwiperSlide className="swiper__slide" key={index}>
                 <HeaderSliderItem img={item.coverPhoto} hoverImage={item.images} name={item.name} price={item.price}  />
              </SwiperSlide>
           ))
        }
    </Swiper>
  );
}

export default HeaderSwiper;
