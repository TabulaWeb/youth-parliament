// Import global npm modules
import process from 'process'

import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import ContentLoader from 'react-content-loader'
import { Swiper, SwiperSlide } from 'swiper/react'
import get from 'axios'

import SliderButton from './sliderButton'

import Container from '../container'

const MediaSection = () => {

  const [
    slide,
    setSlide
  ] = useState<any>([])
  const [
    loader,
    setLoader
  ] = useState(false)

  useEffect(() => {

    setLoader(false)
    get(`${process.env.NEXT_PUBLIC_API}/writes?populate=image`).then((res) => {

      setSlide(res.data.data)
      setLoader(true)
    
    })
    
  }, [])

  const [
    activeSlide,
    setActiveSlide
  ] = useState(3)

  return <Container>

    <StainImageFive>
      <Circle className='perple'></Circle>
      <Circle className='pink'></Circle>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="719" height="850" fill="none"><path fill="#A9AEF4" d="M288 321c-70 153-113 279-38 415l3 5c196 189 566 15 589-264 29-351-96-427-158-461-147-79-326 151-396 305Z"/><path fill="#D4B5F4" d="M1 390c-18 147 161 207 234 217 120 17 325 30 320-199-7-286-183-362-301-285C135 199 24 206 1 390Z"/><path fill="#E9D8F6" d="M321 848c221-28 292-136 292-265 0-109-80-400-337-279-70 33-145 165-175 222-9 17-25 57-12 122 16 78 77 219 232 200Z"/></svg> */}
    </StainImageFive>

    <Wrapper id={'media'}>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={3}
        breakpoints={{

          300: {
            slidesPerView: 1,
            slidesPerGroup: 1
          },

          640: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },

          800: {
            slidesPerView: 3,
            slidesPerGroup: 3
          }
        }}
        rewind={true}
        className='sliderMedia'
      >
        <Header slot="container-start">
          <Title>О нас пишут</Title>

          {slide.length > 1 &&
            <SlideNav>
              <SliderButton next={false} activeSlide={activeSlide} sliderLength={slide.length+1} />
              <SliderButton next={true} activeSlide={activeSlide} sliderLength={slide.length+1} />
            </SlideNav>
          }
        </Header>

        {loader ? slide.map((item:any) => {
          
          return <SwiperSlide key={item.id} className='slideMedia'>
              <SlideContainer className='slideMediaContainer'>
                {/* <SliderBackground src={`${process.env.NEXT_PUBLIC_API}${item.attributes.image.data.attributes.url}`} fill alt='slider background' /> */}
                <SliderBackground src={`https://admin.mp60.ru${item.attributes.image.data.attributes.url}`} fill alt='slider background' />
                <SlideText>{item.attributes.title}</SlideText>
              </SlideContainer>
            </SwiperSlide>
        })
          :
          <ContentLoader
            speed={1}
            width={'100%'}
            height={328}
          > 
            <rect x="0" y="0" rx="0" ry="0" width="328" height="328" />
            <rect x="368" y="0" rx="0" ry="0" width="328" height="328" />
            <rect x="736" y="0" rx="0" ry="0" width="328" height="328" />
          </ContentLoader>
        }
      </Swiper>
    </Wrapper>
  </Container>

}

const Empty = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const EmptyTitle = styled.p`
  width: max-content;
  border-radius: 16px;
  font-size: 20px;
  background: rgba(249, 246, 243, 0.6);
  border: 1px solid rgba(50, 50, 50, 0.08);
  box-shadow: 2px 2px 12px rgba(141, 141, 141, 0.2);
  padding: 20px 50px;
  -webkit-backdrop-filter: blur(60px);
`

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 120px;
    position: relative;
`

const Title = styled.h2`
    font-weight: 400;
    font-size: 44px;
    line-height: 52px;
    color: #323232;
    margin-bottom: 60px;
`

const SlideNav = styled.div`
    display: flex;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const SliderBackground = styled(Image)`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    object-fit: cover;
    z-index: -1;
    transition: .4s;
`

const SlideContainer = styled.div`
    position: relative;
    width: 100%;
    height: 328px;
    border-radius: 20px;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(30, 30, 30, 0.5) 100%);
    border-radius: 16px;
    padding: 24px;

    display: flex;
    align-items: flex-end;

    &:hover {
        cursor: pointer;

        & img{
            transition: .4s;
            width: 120%;
            height: 120%;
        }
    }
`

const SlideText = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FFFCF9;
`

const Pagination = styled.div`
    
`

const StainImageFive = styled.div`
filter: blur(50px);
    opacity: 0.6;
    position: absolute;
    top: -150px;
    right: -100px;
    z-index: -100;

  & .perple {
    width: 400px;
    height: 400px;
    background-color: #ACB0F5;
    border-radius: 50px;
  }

  & .pink {
    width: 400px;
    height: 400px;
    background-color: #E9D8F6;
    border-radius: 50px;
  }
`

const Circle = styled.div``

// Export default Container ui
export default MediaSection
