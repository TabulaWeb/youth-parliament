// Import global npm modules
import process from 'process'

import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import ContentLoader from 'react-content-loader'
import { Swiper, SwiperSlide } from 'swiper/react'
import get from 'axios'
import { flexbox } from '@mui/system'

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
    get(`${process.env.NEXT_PUBLIC_SERVER}/writes?populate=image`).then((res) => {

      setSlide(res.data.data)
      console.log(res.data.data)
      setLoader(true)
    
    })
    
  }, [])

  const [
    activeSlide,
    setActiveSlide
  ] = useState(3)

  return <Container>

    <StainImageFive>
      <svg width="1407" height="1432" viewBox="0 0 1407 1432" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <g filter="url(#filter0_f_188_2457)">
            <path d="M536.768 602.105C468.078 752.322 436.715 867.539 436.047 1000.94C436.012 1008.09 439.913 1014.71 446.219 1018.08C709.551 1158.75 1068.06 1034.76 1090.89 757.435C1119.79 406.308 995.376 330.453 932.889 296.762C786.309 217.732 607.435 447.567 536.768 602.105Z" fill="#A9AEF4"/>
          </g>
          <g filter="url(#filter1_f_188_2457)">
            <path d="M288 642.5C270.23 788.65 405.013 854.737 482.821 847.56C484.213 847.432 485.482 847.141 486.822 846.745C566.825 823.118 809.322 915.953 803.983 688.703C797.256 402.305 620.829 327.116 502.5 403.5C384.171 479.884 310.41 458.189 288 642.5Z" fill="#FFB6FB" fillOpacity="0.5"/>
          </g>
          <g filter="url(#filter2_f_188_2457)">
            <path d="M562.078 1143.5C779.908 1116.22 812.1 995.669 860.17 874.566C861.711 870.684 862.049 866.534 861.064 862.476L860.767 861.255C833.918 750.631 768.566 481.376 517.431 599.316C437.303 636.947 328.428 780.429 303.71 813.961C300.385 818.473 299.239 824.118 300.549 829.568C313.345 882.778 389.58 1165.1 562.078 1143.5Z" fill="#FFFCF9" fillOpacity="0.5"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_188_2457" x="336.047" y="180.677" width="859.126" height="995.765" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2457"/>
          </filter>
          <filter id="filter1_f_188_2457" x="186.404" y="275.52" width="717.667" height="672.567" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2457"/>
          </filter>
          <filter id="filter2_f_188_2457" x="200.02" y="470.044" width="761.6" height="774.633" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2457"/>
          </filter>
        </defs>
      </svg>
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

          <SlideNav>
            <SliderButton next={false} activeSlide={activeSlide} sliderLength={slide.length+1} />
            <SliderButton next={true} activeSlide={activeSlide} sliderLength={slide.length+1} />
          </SlideNav>
        </Header>

        {loader ? slide.map((item:any) => {
          
          return (
            <SwiperSlide key={item.id} className='slideMedia'>
              <SlideContainer className='slideMediaContainer'>
                {/* <SliderBackground src={`${process.env.NEXT_PUBLIC_SERVER}${item.attributes.image.data.attributes.url}`} fill alt='slider background' /> */}
                <SliderBackground src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} fill alt='slider background' />
                <SlideText>{item.attributes.title}</SlideText>
              </SlideContainer>
            </SwiperSlide>
          )
        
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
    position: absolute;
    top: -400px;
    right: -550px;
    z-index: -1;
`

// Export default Container ui
export default MediaSection
