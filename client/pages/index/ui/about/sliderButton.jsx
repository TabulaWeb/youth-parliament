// Import global npm modules
import React from 'react'
import styled from 'styled-components'
import { useSwiper } from 'swiper/react';

const SliderButton = ({image, next}) => {
    const swiper = useSwiper()
    
    return next ? 
    <ButtonNext  onClick={() => swiper.slideNext()}>
        {image}
    </ButtonNext>
    :
    <ButtonPrev onClick={() => swiper.slidePrev()}>
        {image}
    </ButtonPrev>
}

const ButtonNext = styled.button`
    position: absolute;
    right: 0;
`

const ButtonPrev = styled.button`
    position: absolute;
    left: 0;
`

export default SliderButton