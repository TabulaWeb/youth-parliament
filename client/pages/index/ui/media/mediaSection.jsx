// Import global npm modules
import React, {useState} from 'react'
import styled from 'styled-components'
import background from '../../../../../public/images/home/photo.png'
// Import local ui modules
import Container from '../container'
import SliderButton from './sliderButton'
import { Swiper, SwiperSlide } from 'swiper/react';

const slide = [
    {
        id:1,
        image: 'https://images.unsplash.com/photo-1661566306732-fe7ef26a8003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: 'Финал лиги дебатов «ИСТИНА»',
    },
    {
        id:2,
        image: 'https://images.unsplash.com/photo-1661566306732-fe7ef26a8003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: 'Слет молодежных советов «С властью на равных»',
    },
    {
        id:3,
        image: 'https://images.unsplash.com/photo-1661566306732-fe7ef26a8003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: 'Псковский велопарад Тинькофф',
    },
    {
        id:4,
        image: 'https://images.unsplash.com/photo-1661566306732-fe7ef26a8003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: 'Финал лиги дебатов «ИСТИНА»',
    },
    {
        id:5,
        image: 'https://images.unsplash.com/photo-1661566306732-fe7ef26a8003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: 'Финал лиги дебатов «ИСТИНА»',
    },
    {
        id:6,
        image: 'https://images.unsplash.com/photo-1661566306732-fe7ef26a8003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: 'Финал лиги дебатов «ИСТИНА»',
    },
    {
        id:7,
        image: 'https://images.unsplash.com/photo-1661566306732-fe7ef26a8003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: 'Финал лиги дебатов «ИСТИНА»',
    },
    {
        id:8,
        image: 'https://images.unsplash.com/photo-1661566306732-fe7ef26a8003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: 'Финал лиги дебатов «ИСТИНА»',
    },
    {
        id:9,
        image: 'https://images.unsplash.com/photo-1661566306732-fe7ef26a8003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: 'Финал лиги дебатов «ИСТИНА»',
    }
]

const MediaSection = () => {
    const [activeSlide, setActiveSlide] = useState(3)

    return <Container>
        <Wrapper>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={3}
                rewind={true}
            >
                <Header slot="container-start">
                    <Title>О нас пишут</Title>

                    <SlideNav>
                        <SliderButton next={false} image={<buttonPrev />} activeSlide={activeSlide} sliderLength={slide.length+1} />
                        <SliderButton next={true} image={<buttonNext />} activeSlide={activeSlide} sliderLength={slide.length+1} />
                    </SlideNav>
                </Header>
                {slide.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <SlideContainer>
                                <SliderBackground src={item.image} width='100%'  height='100%' />
                                <SlideText>{item.text}</SlideText>
                            </SlideContainer>
                        </SwiperSlide>
                    )
                })}
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

const SliderBackground = styled.img`
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
    width: 328px;
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

// Export default Container ui
export default MediaSection
