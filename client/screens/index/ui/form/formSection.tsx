// Import global npm modules
import React, { useState } from 'react'
import styled from '@emotion/styled'

// Import local ui modules
import Text from './text'
import Form from './form'

import Container from '../container'

const FormSection = () => {

  const [
    step,
    setStep
  ] = useState(1)

  return <Container>

    <StainImageSeven>
      <svg width="1253" height="1274" viewBox="0 0 1253 1274" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <g filter="url(#filter0_f_188_2422)">
            <path d="M592.649 1019.37C752.861 917.978 808.411 514.947 729.167 386.632C727.068 383.233 723.934 380.856 720.176 379.396C603.11 333.935 406.671 230.906 222.583 474.716C56.8747 694.184 149.422 800.343 149.609 800.557C149.615 800.563 149.604 800.551 149.609 800.557C149.797 800.772 430.331 1122.09 592.649 1019.37Z" fill="#9FC4FC"/>
          </g>
          <g filter="url(#filter1_f_188_2422)">
            <path d="M682.219 689.203C779.258 725.685 920.167 598.95 943.342 577.218C945.574 575.125 947.179 572.755 948.202 569.974C958.608 541.667 1012.77 375.12 874.179 307.721C684.538 215.495 581.506 202.767 572.779 342.412C564.052 482.057 682.216 689.202 682.219 689.203Z" fill="#A7FFDA"/>
          </g>
          <g opacity="0.6" filter="url(#filter2_f_188_2422)">
            <path d="M846.114 624.666C818.51 601.668 640.796 455.551 572.355 447.797C569.367 447.459 566.659 448.045 563.901 448.919C494.847 470.814 212.635 438.535 341.587 784.407C506.112 1225.69 798.411 1024.49 870.792 929.582C937.111 842.623 864.226 661.58 851.554 631.868C850.35 629.046 848.592 626.73 846.114 624.666Z" fill="#FFFCF9"/>
          </g>
          <g opacity="0.6" filter="url(#filter3_f_188_2422)">
            <path d="M1018.73 445.912C997.296 428.124 889.093 339.843 844.745 332.911C841.768 332.446 838.849 333.093 836.053 333.879C788.876 347.131 611.411 329.222 693.857 550.358C800.248 835.717 989.265 705.607 1036.07 644.236C1077.95 589.327 1033.99 476.407 1024.27 453.235C1023.09 450.407 1021.21 447.972 1018.73 445.912Z" fill="#FFFCF9"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_188_2422" x="23.6772" y="218.561" width="841.236" height="921.066" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2422"/>
          </filter>
          <filter id="filter1_f_188_2422" x="472.319" y="137.919" width="595.003" height="657.838" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2422"/>
          </filter>
          <filter id="filter2_f_188_2422" x="208.274" y="347.7" width="790.01" height="810.901" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2422"/>
          </filter>
          <filter id="filter3_f_188_2422" x="572.315" y="232.755" width="581.533" height="594.912" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2422"/>
          </filter>
        </defs>
      </svg>
    </StainImageSeven>

    <Wrapper id={'form'}>
      <Text />
      <Form step={step} setStep={setStep} />
    </Wrapper>

    <StainImageEight>
      <svg width="1424" height="1417" viewBox="0 0 1424 1417" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <g filter="url(#filter0_f_188_2417)">
            <path d="M816.163 492.672C682.493 397.108 421.053 520.562 373.138 544.587C368.238 547.044 364.73 551.26 363.433 556.586C349.299 614.576 275.187 966.964 540.721 1041.57C902.686 1143.28 1007.46 1028.37 1055.47 969.764C1168.07 832.282 963.684 598.139 816.163 492.672Z" fill="#A9AEF4"/>
          </g>
          <g filter="url(#filter1_f_188_2417)">
            <path d="M942.815 480.191C951.069 204.888 627.152 248.945 602.723 252.658C601.653 252.82 600.696 253.081 599.673 253.434C338.095 343.906 477.642 613.714 502.373 657.494C504.659 661.54 508.05 664.274 512.486 665.656C566.479 682.487 933.658 785.598 942.815 480.191Z" fill="#FFB6FB" fillOpacity="0.5"/>
          </g>
          <g filter="url(#filter2_f_188_2417)">
            <path d="M524.051 301.239C413.437 265.467 375.009 376.463 369.298 438.377C369.17 439.769 369.199 441.051 369.372 442.438C377.681 508.942 392.643 706.561 569.648 736.635C793.17 774.613 845.045 768.848 803.552 665.394C762.058 561.939 663.865 346.454 524.051 301.239Z" fill="#FFFCF9" fillOpacity="0.5"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_188_2417" x="243.233" y="356.896" width="944.75" height="825.171" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2417"/>
          </filter>
          <filter id="filter1_f_188_2417" x="343.096" y="147.9" width="699.873" height="647.988" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2417"/>
          </filter>
          <filter id="filter2_f_188_2417" x="269.219" y="194.293" width="647.406" height="663.837" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2417"/>
          </filter>
        </defs>
      </svg>
    </StainImageEight>
  </Container>
    
}

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 120px;
    position: relative;
`

const StainImageSeven = styled.div`
    position: absolute;
    left: -350px;
    top: -70px;
    z-index: -1;
`

const StainImageEight = styled.div`
    position: absolute;
    right: -800px;
    bottom: -300px;
    z-index: -1;
`

// Export default Container ui
export default FormSection
