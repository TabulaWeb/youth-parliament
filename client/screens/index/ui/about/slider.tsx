// Import global npm modules
import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import SliderButton from './sliderButton'

// Import Swiper styles
import 'swiper/css'

const slide = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1564381800757-0425455b541d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    text: 'qwerty'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1564381800757-0425455b541d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    text: 'qwe'
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

  const [
    indexSlide,
    setIndexSlide
  ] = useState(1)
    
  return <>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => setIndexSlide(swiper.realIndex+1)}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      className='sliderAbout'
    >
      <SlideNav slot="container-start">
        <SliderButton image={'назад'} next={false}/>
        <SliderButton image={'вперед'} next={true}/>
      </SlideNav>
        
      {slide.map(item => {

        return <SwiperSlide key={item.id} className='slideAbout'>
          {({ isActive }) => (
            <>
              <SlideContainer className='slideImageAbout' active={isActive}>
                <SliderBackground src={item.image} width={100} height={100} alt='slider background' />
              </SlideContainer>
                        
              <SlideText>{item.text}</SlideText>
            </>
          )}
        </SwiperSlide>
      
      })}
        
      <ProgressBar max={slide.length} value={indexSlide} />
      <ProgressNumber>{indexSlide} / {slide.length}</ProgressNumber>
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

    @media screen and (max-width: 991px) {
        display: none;
    }
`

const SliderBackground = styled(Image)`
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
    height: auto;

    @media screen and (max-width: 991px) {
        width: 100px;
    }
`

const SlideContainer = styled.div<any>`
    position: relative;
    width: ${({ isActive }) => isActive ? '50%' : '100%'};
    height: 500px;
    border-radius: 20px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media screen and (max-width: 991px){
        height: clamp(150px, 50vw, 500px);
    }
`

const SlideText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #323232;
    text-align: center;
    margin-bottom: 24px;
`

const ProgressBar = styled.progress`
    display: none;
    border: 0;
    border-radius: 100px;
    max-width: 160px;
    height: 6px;
    width: 100%;
    background-color: rgba(50, 50, 50, 0.1);
    margin: 0 auto;
    accent-color: #2F4395;
    margin-bottom: 8px;

    &::-webkit-progress-value{
        border-radius: 100px;
    }

    &::-moz-progress-bar{
        border-radius: 100px;   
    }

    @media screen and (max-width: 991px){
        display: block;
    }
`

const ProgressNumber = styled.p`
    display: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(50, 50, 50, 0.5);
    text-align: center;

    @media screen and (max-width: 991px){
        display: block;
    }
`

export default Slider