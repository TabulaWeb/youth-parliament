// Import global npm modules
import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useSwiper } from 'swiper/react';

const SliderButton = ({image, next}: any) => {
    const swiper = useSwiper()
    
    return next ? 
    <ButtonNext
        aria-label='next slide'
        onClick={() => {
            swiper.slideNext(); 
        }} 
        onTouchEnd={() => console.log(123123)}
    >
        <svg width="64" height="12" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-2.5356e-07 6.34951C-2.20355e-07 7.08947 0.59985 7.68932 1.33981 7.68932L57.5845 7.68932L55.9007 8.76117C55.6693 8.90673 55.4458 9.04938 55.2407 9.18149C54.6473 9.56364 54.4863 10.355 54.8731 10.9454C55.257 11.5314 56.0363 11.7044 56.6297 11.332C58.8356 9.94776 63.7177 6.87487 63.9617 6.64078C64.1932 6.40777 63.4355 5.73204 60.0259 3.16893C58.8249 2.26231 57.7144 1.44349 56.9238 0.865382C56.2917 0.40316 55.4008 0.605721 55.0248 1.29261C54.7079 1.87134 54.8732 2.59543 55.4073 2.9828C55.7199 3.2095 56.0777 3.47041 56.4269 3.72816L58.1948 5.00971L1.33981 5.00971C0.599853 5.00971 -2.86764e-07 5.60956 -2.5356e-07 6.34951Z" fillOpacity="0.5"/>
        </svg>
    </ButtonNext>
    :
    <ButtonPrev
        aria-label='next slide'
        onClick={() => {
            swiper.slidePrev()
        }} 
    >
        <svg width="64" height="12" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 6.34951C64 7.08947 63.4002 7.68932 62.6602 7.68932L6.41551 7.68932L8.09926 8.76117C8.33067 8.90673 8.55419 9.04938 8.75931 9.18149C9.3527 9.56364 9.51368 10.355 9.12691 10.9454C8.74302 11.5314 7.96366 11.7044 7.37028 11.332C5.16441 9.94776 0.282279 6.87487 0.0383041 6.64078C-0.193212 6.40777 0.564476 5.73204 3.97407 3.16893C5.17514 2.26231 6.28558 1.44349 7.07617 0.865382C7.70828 0.40316 8.59923 0.605721 8.97525 1.29261C9.29207 1.87134 9.12678 2.59543 8.59268 2.9828C8.28011 3.2095 7.92231 3.47041 7.57309 3.72816L5.80515 5.00971L62.6602 5.00971C63.4001 5.00971 64 5.60956 64 6.34951Z" fillOpacity="0.5"/>
        </svg>
    </ButtonPrev>
}

const ButtonNext = styled.button`
    background: none;
    border: none;
    

    & svg path {
        transition: .4s;
        fill: #323232;
    }

    &:hover{
        cursor: pointer;
        
        & svg path {
            transition: .4s;
            fill: #2F4395;
            fill-opacity: 1;
        }
    }
`

const ButtonPrev = styled.button`
    background: none;
    border: none;

    & svg path {
        transition: .4s;
        fill: #323232;
    }

    &:hover{
        cursor: pointer;

        & svg path {
            transition: .4s;
            fill-opacity: 1;
          }
        }
        `
        // fill: ${(props) => props.noActive ? 'red' : 'blue'};;

export default SliderButton