// Import global npm modules
import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper, useSwiperSlide } from 'swiper/react';
import SliderButton from './sliderButton'

// Import Swiper styles
import 'swiper/css';

const slide = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1564381800757-0425455b541d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: 'qwerty'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1564381800757-0425455b541d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: ''
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1564381800757-0425455b541d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: ''
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1564381800757-0425455b541d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: ''
    }
]

const Slider = () => {
    
    return <>
    <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
    >
        <SlideNav slot="container-start">
            <SliderButton image={'назад'} next={false}/>
            <SliderButton image={'вперед'} next={true}/>
        </SlideNav>
        
        {slide.map(item => {
            return <SwiperSlide key={item.id}>
                {({ isActive }) => (
                    <>
                        <SlideContainer active={isActive}>
                            <SliderBackground src={item.image} width='80%'  height='100%' />
                        </SlideContainer>
                        
                        <SlideText>{item.text}</SlideText>
                    </>
                )}
            </SwiperSlide>
        })}
        
    
    </Swiper>
  </>
}

const SlideNav = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    display: flex;
    width: 100%;
    justify-content: space-between;

`

const SliderBackground = styled.img`
    position: absolute;
    height: -webkit-fill-available;
    max-height: 500px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    object-fit: cover;
    z-index: -1;
    transition: .4s;
    border-radius: 16px;
`

const SlideContainer = styled.div`
    position: relative;
    width: ${({isActive}) => isActive ? '50%' : '100%'};
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    padding: 24px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const SlideText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #323232;
    text-align: center;
`

export default Slider