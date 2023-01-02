import { Grid, Pagination } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "../UI/ProductItem/ProductItem";
import ProductList from "../UI/ProductList/ProductList";
import "./equiment_slider.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
function EquimentSlider({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        navigation={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
      >
        <Grid container columnSpacing={2} rowSpacing={2}>
          {data?.map((item, index) => (
            <SwiperSlide className="equiment__swiper__slide" key={index}>
              <ProductItem item={item} />
            </SwiperSlide>
          ))}
        </Grid>
      </Swiper>
    </>
  );
}

export default EquimentSlider;
