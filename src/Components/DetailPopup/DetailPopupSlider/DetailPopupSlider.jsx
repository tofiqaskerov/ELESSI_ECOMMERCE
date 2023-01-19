import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./detail_popup_slider.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img5 from "../../../Assets/Img/Salsa_Mukluk_Carbon_GX_Eagle_2019_Carousel-3_360x.webp";
function DetailPopupSlider(props) {
  console.log(props.productImages.coverPhoto);
  const { coverPhoto, productPictures } = props.productImages;
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="popup__slider"
        slidesPerView={1}
        loop={true}
        spaceBetween={50}
      >
        <SwiperSlide>
          <div className="box">
            <img src={coverPhoto} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={productPictures} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default DetailPopupSlider;
