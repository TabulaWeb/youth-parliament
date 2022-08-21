// Import global npm modules
import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import SliderButton from './sliderButton'

// Import Swiper styles
import 'swiper/css';

const Slider = () => {
    

    return <>
    <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        
        <SliderButton image={'вперед'} next={true}/>
        <SliderButton image={'назад'} next={false}/>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  </>
}

export default Slider