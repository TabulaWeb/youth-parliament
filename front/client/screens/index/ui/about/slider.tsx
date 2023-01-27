'use client'

// Import global npm modules
import process from 'process'

import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import ContentLoader from 'react-content-loader'

import SliderButton from './sliderButton'

// Import Swiper styles
import 'swiper/css'
import get from 'axios'

const Slider = () => {

  const [
    slide,
    setSlide
  ] = useState([])
  const [
    loader,
    setLoader
  ] = useState(false)

  useEffect(() => {

    setLoader(false)
    get(`${process.env.NEXT_PUBLIC_API}/events?populate=slide`).then((res) => {

      setSlide(res.data.data)
      setLoader(true)
    
    })
    
  }, [])

  const [
    indexSlide,
    setIndexSlide
  ] = useState(1)

  // const data = Array.isArray(slide) ? slide : []

  return loader ? <>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => setIndexSlide(swiper.realIndex + 1)}
      onSwiper={(swiper) => { }}
      loop={true}
      className='sliderAbout'
    >
      <SlideNav slot="container-start">
        <SliderButton image={'назад'} next={false} />
        <SliderButton image={'вперед'} next={true} />
      </SlideNav>

      {slide.map((item:any) => {

        return <SwiperSlide key={item.id} className='slideAbout'>
          {({ isActive }) => (
            <>
              <SlideContainer className='slideImageAbout' active={isActive}>
                <SliderBackground src={`https://admin.mp60.ru${item.attributes.slide.data.attributes.url}`}
                
                  fill
                  alt='sliderrr background' />
              </SlideContainer>
              <SlideText>{item.attributes.title}</SlideText>
            </>
          )}
        </SwiperSlide>

      })}
      {slide.length > 1 &&
        <>
          <ProgressBar max={slide.length} value={indexSlide} />
          <ProgressNumber>{indexSlide} / {slide.length}</ProgressNumber>
        </>
      }
      
    </Swiper>
  </>
    :
    <ContentLoader
      speed={2}
      width={'100%'}
      height={500}
    > 
      <rect x="0" y="0" rx="2" ry="2" width="100%" height="400" />
    </ContentLoader>

}

const SlideNav = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    
    z-index: 12;
    display: flex;
    width: 100%;
    
    justify-content: space-between;
    color: white;

    @media screen and (max-width: 991px) {
        display: none;
    }
`

const SliderBackground = styled(Image)`
  object-fit: cover;

    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

const SlideContainer = styled.div<any>`
    position: relative;
    width: ${({ isActive }) => isActive ? '50%' : '100%'};
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    z-index: 10;
    

    display: flex;
    justify-content: center;
    align-items: center;

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