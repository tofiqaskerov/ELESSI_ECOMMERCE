import { Grid } from '@mui/material'
import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import BlogSliderItem from '../BlogSliderItem/BlogSliderItem'
import './blog__slider.scss'
function BlogSlider({data}) {
  return (
    <>
    <Swiper
      slidesPerView={3}
      navigation={true}
      spaceBetween={30}
      loop
      pagination={{ clickable: true }}
      modules={[Navigation]}
      className="blog__swiper"
      breakpoints={{
        0: {
            slidesPerView: 1,
          },
          650: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
         
      }}
    >
      <Grid container columnSpacing={2} rowSpacing={2}>
        {data?.map((item, index) => (
          <SwiperSlide className='blog__swiper__slide' key={index}>
            <BlogSliderItem item={item}/>
          </SwiperSlide>
        ))}
      </Grid>
    </Swiper>
  </>
  )
}

export default BlogSlider