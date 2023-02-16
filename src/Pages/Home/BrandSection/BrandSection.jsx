import { Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { brands } from "../../../Assets/Data/BrandData";
import "./brand_section.scss";

function BrandSection() {
  return (
    <section className="brand">
      <Container maxWidth="lg" >
        <Swiper
          slidesPerView={6}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints= {{
             0:{
                slidesPerView:3,
             },
             768:{
                slidesPerView:4,
             },
             992:{
                slidesPerView:6,
             },
          }}
        >
          <Grid container columnSpacing={2} rowSpacing={2}>
            {brands?.map((item, index) => (
              <SwiperSlide className="brand__swiper__slide" key={index}>
                <Grid
                  className="brand__item"
                  xs={2}
                  sm={2}
                  md={2}
                  lg={2}
                  xl={2}
                  xxl={2}
                  item
                >
                  <Link to="/">
                    <img src={item.logo} alt="" />
                  </Link>
                </Grid>
              </SwiperSlide>
            ))}
          </Grid>
        </Swiper>
      </Container>
    </section>
  );
}

export default BrandSection;
