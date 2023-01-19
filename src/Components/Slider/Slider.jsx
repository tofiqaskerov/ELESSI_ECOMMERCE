import "./slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,  EffectFade,   } from 'swiper';
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
