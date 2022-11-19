// Import global npm modules
import React from 'react'
import styled from '@emotion/styled'

// Import local ui modules
import Container from '../container'
import News from './news'

const NewsSection = () => {
    return <Container>

        <StainImageSix>
            <svg width="1220" height="1305" viewBox="0 0 1220 1305" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
            <g filter="url(#filter0_f_188_2462)">
            <path d="M608.107 820.812C632.264 785.49 757.317 598.126 751.349 513.285C751.215 511.375 750.774 509.733 750.083 507.947C714.15 415.01 705.787 43.6303 351.475 107.34C-95.5597 187.722 169.128 635.886 283.127 760.836C384.931 872.42 560.885 837.169 597.364 828.35C601.819 827.273 605.52 824.595 608.107 820.812Z" fill="#A7FFDA"/>
            </g>
            <g filter="url(#filter1_f_188_2462)">
            <path d="M151.425 434.845C156.489 469.688 191.292 698.173 239.735 745.89C241.796 747.92 244.28 749.059 247.034 749.942C317.374 772.485 524.892 941.437 768.249 628.24C994.145 337.513 476.827 136.083 351.526 170.096C236.432 201.337 163.409 394.796 152.275 426.107C151.245 429.004 150.982 431.802 151.425 434.845Z" fill="#F9FCFF" fillOpacity="0.7"/>
            </g>
            <g filter="url(#filter2_f_188_2462)">
            <path d="M373.601 752.263C391.396 940.271 722.911 1071.05 871.37 987.184C872.241 986.692 873.088 986.107 873.869 985.482C1202.14 722.487 1036.29 444.753 1020.15 419.494C1019.27 418.116 1018.35 417.108 1017.1 416.052C999.834 401.461 863.823 292.256 742.263 364.848C547.483 481.164 355.753 563.707 373.601 752.263Z" fill="#EBD9FF"/>
            </g>
            <g filter="url(#filter3_f_188_2462)">
            <path d="M286.431 774.76C301.398 976.99 656.698 1224.5 823.296 1191.2C826.822 1190.49 829.873 1188.76 832.458 1186.26C938.325 1083.89 1145.03 921.866 1002.55 641.174C874.688 389.265 884.445 497.911 739.873 535.592C523.365 592.023 271.305 570.367 286.431 774.76Z" fill="#FFFCF9" fillOpacity="0.7"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_f_188_2462" x="0.956787" y="0.0341797" width="850.599" height="940.582" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2462"/>
            </filter>
            <filter id="filter1_f_188_2462" x="51.2185" y="66.3535" width="873.427" height="849.239" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2462"/>
            </filter>
            <filter id="filter2_f_188_2462" x="272.444" y="240.165" width="903.819" height="872.915" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2462"/>
            </filter>
            <filter id="filter3_f_188_2462" x="185.782" y="379.784" width="965.237" height="914.447" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2462"/>
            </filter>
            </defs>
            </svg>
        </StainImageSix>

        <Wrapper>
            <News />
        </Wrapper>
    </Container>
}

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 120px;
    position: relative;
`

const StainImageSix = styled.div`
    position: absolute;
    top: 0;
    left: -100px;
    z-index: -1;
`

// Export default Container ui
export default NewsSection
