// Import global npm modules
import React from 'react'
import styled from '@emotion/styled'

// Import local ui modules
import Container from '../container'
import Slider from './slider'
import Text from './text'

const AboutSection = () => {
    return <Container>

        <StainImageFour>
            <svg width="952" height="992" viewBox="0 0 952 992" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
            <g filter="url(#filter0_f_188_2453)">
            <path d="M123.286 723.688C208.229 842.76 535.723 913.06 638.634 857.497C642.424 855.451 645.066 852.04 646.629 848.026C680.438 761.171 755.354 617.099 556.639 479.657C376.249 354.89 423.42 418.999 339.935 474.804C214.911 558.377 36.7247 602.348 123.286 723.688Z" fill="#9FC4FC"/>
            </g>
            <g filter="url(#filter1_f_188_2453)">
            <path d="M412.255 437.147C344.23 490.525 392.046 554.595 387.209 614.384C386.179 627.116 393.786 640.514 406.344 642.848C494.641 659.263 674.584 696.702 736.904 579.131C822.962 416.776 837.304 330.328 716.489 329.631C595.674 328.935 489.564 376.484 412.255 437.147Z" fill="#A7FFDA"/>
            </g>
            <g filter="url(#filter2_f_188_2453)">
            <path d="M709.242 396.695C702.505 369.358 661.666 208.469 625.82 175.341C623.47 173.169 620.346 172.182 617.24 171.41C566.33 158.756 419.207 39.6716 350.823 323.684C262.485 690.567 515.414 657.645 596.802 618.159C670.9 582.21 704.074 431.423 709.422 404.703C709.964 401.997 709.902 399.374 709.242 396.695Z" fill="#FFFCF9"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_f_188_2453" x="0.413574" y="307.789" width="788.51" height="669.031" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2453"/>
            </filter>
            <filter id="filter1_f_188_2453" x="275.36" y="229.624" width="628.931" height="532.117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2453"/>
            </filter>
            <filter id="filter2_f_188_2453" x="232.358" y="35.937" width="577.429" height="705.37" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2453"/>
            </filter>
            </defs>
            </svg>
        </StainImageFour>

        <Wrapper>
            <Text />
            <Slider />
        </Wrapper>
    </Container>
}

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 120px;
    position: relative;
`

const StainImageFour = styled.div`
    position: absolute;
    left: -550px;
    bottom: 0;
    z-index: -1;
`

// Export default Container ui
export default AboutSection
