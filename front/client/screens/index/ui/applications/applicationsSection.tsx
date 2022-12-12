// Import global npm modules
import process from 'process'

import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

// Import local ui modules
import get from 'axios'

import Text from './text'
import Appeals from './appeals'
import AppealsFilter from './appealsFilter'

const ApplicationsSection = () => {

  const [
    data,
    setData
  ] = useState([])
  const [
    filter,
    setFilter
  ] = useState('')
  const [
    page,
    setPage
  ] = useState()
  const [
    currentPage,
    setCurrentPage
  ] = useState(1)
  const [
    loader,
    setLoader
  ] = useState(false)

  const [
    modal,
    setModal
  ] = useState(false)
  const [
    active,
    setActive
  ] = useState('Все')

  useEffect(() => {

    setLoader(false)
    get(`${process.env.NEXT_PUBLIC_SERVER}/appeals?pagination[page]=1&pagination[pageSize]=6`).then(res => {

      setData(res.data.data)
      setPage(res.data.meta.pagination.pageCount)
      setLoader(true)
    
    })

  }, [])

  const changeResponse = (filter:any, page:any) => {

    setLoader(false)

    if(filter == '') {

      get(`${process.env.NEXT_PUBLIC_SERVER}/appeals?pagination[page]=${page}&pagination[pageSize]=6`).then(res => {

        setData(res.data.data)
        setPage(res.data.meta.pagination.pageCount)
        setLoader(true)
      
      })
    
    } else {

      get(`${process.env.NEXT_PUBLIC_SERVER}/appeals?filters[adress][$eq]=${filter}&pagination[page]=${page}&pagination[pageSize]=6`).then(res => {

        setData(res.data.data)
        setPage(res.data.meta.pagination.pageCount)
        setLoader(true)
      
      })
    
    }
    
  }

  const FilterChange = (event:any) => {

    setActive(event.target.innerText)
    setFilter(event.target.innerText)
    setCurrentPage(1)

    if(event.target.innerText != 'Все') {

      changeResponse(event.target.innerText, 1)
    
    } else {

      changeResponse('', 1)
    
    }
  
  }

  return<> <Main>
    <Wrap>
      <StainImageNine>
        <svg width="1182" height="1269" viewBox="0 0 1182 1269" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6">
            <g filter="url(#filter0_f_188_2712)">
              <path d="M951.204 667.644C899.13 790.456 790.468 845.514 773.305 853.585C771.731 854.326 770.391 854.734 768.664 854.948C735.5 859.052 362.086 895.89 472.265 457.194C538.347 194.078 753.211 145.175 874.831 275.654C996.451 406.133 997.001 559.638 951.204 667.644Z" fill="#A7FFDA" fillOpacity="0.6"/>
            </g>
            <g filter="url(#filter1_f_188_2712)">
              <path d="M554.79 546.183C666.917 639.922 781.851 839.764 721.514 933.282C719.178 936.902 715.562 939.335 711.453 940.625C618.605 969.779 388.197 1080.49 266.29 871.683C168.224 703.709 222.855 577.676 236.48 551.295C238.255 547.857 241.11 545.316 244.656 543.768C277.321 529.506 451.476 459.813 554.79 546.183Z" fill="#FFB6FB"/>
            </g>
            <g filter="url(#filter2_f_188_2712)">
              <path d="M725.33 762.714C725.33 882.913 609.278 941.835 587.003 952.037C584.58 953.147 582.102 953.645 579.44 953.527C549.025 952.175 348.975 936.698 289.586 762.713C213.32 539.286 514.861 566.901 546.217 570.35C548.085 570.556 549.622 570.995 551.331 571.778C572.804 581.618 725.331 655.288 725.33 762.714Z" fill="#FFFCF9" fillOpacity="0.5"/>
            </g>
            <g filter="url(#filter3_f_188_2712)">
              <path d="M442.82 693.473C493.607 549.844 673.77 307.895 735.947 326.022C737.698 326.532 739.151 327.471 740.572 328.615C795.162 372.556 962.165 491.18 856.27 707.128C724.194 976.468 743.666 896.136 620.864 934.325C617.218 935.459 613.236 935.655 609.578 934.561C574.154 923.966 384.365 858.792 442.82 693.473Z" fill="#FFFCF9" fillOpacity="0.5"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_188_2712" x="351.998" y="106.065" width="727.237" height="851.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2712"/>
            </filter>
            <filter id="filter1_f_188_2712" x="109.013" y="403.694" width="729.133" height="692.353" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2712"/>
            </filter>
            <filter id="filter2_f_188_2712" x="177.268" y="467.483" width="648.063" height="586.061" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2712"/>
            </filter>
            <filter id="filter3_f_188_2712" x="331.722" y="225.059" width="658.997" height="810.228" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2712"/>
            </filter>
          </defs>
        </svg>
      </StainImageNine>

      <Wrapper>
        <Text setModal={setModal} />

        <Content>
          <Appeals data={data} loader={loader} page={page} changeResponse={changeResponse} filter={filter} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <AppealsFilter setFilter={setFilter} changeResponse={changeResponse} page={page} setPage={setPage} setCurrentPage={setCurrentPage}/>
        </Content>
      </Wrapper>

      <StainImageTen>
        <svg width="963" height="970" viewBox="0 0 963 970" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6">
            <g filter="url(#filter0_f_188_2448)">
              <path d="M589.311 495.292C503.298 525.404 490.093 682.868 488.378 711.964C488.199 715.011 488.746 717.933 490.09 720.673C504.075 749.194 592.753 915.71 730.202 856.339C866.345 797.533 893.548 629.836 828.336 545.746C765.992 465.352 684.167 462.085 589.311 495.292Z" fill="#A9AEF4"/>
            </g>
            <g filter="url(#filter1_f_188_2448)">
              <path d="M599.28 481.106C543.653 495.972 472.812 624.376 483.47 655.368C483.925 656.69 484.701 657.747 485.597 658.82C508.511 686.278 589.155 789.114 670.936 753.994C759.724 715.864 775.067 607.988 777.666 576.784C778.123 571.296 776.019 566.096 771.963 562.371C748.022 540.38 660.151 464.838 599.28 481.106Z" fill="#FFFCF9" fillOpacity="0.5"/>
            </g>
            <g filter="url(#filter2_f_188_2448)">
              <path d="M146.967 509.689C218.855 661.542 431.844 694.281 470.077 698.988C473.959 699.466 477.697 698.739 481.099 696.808C526.714 670.916 857.607 471.905 654.95 255.513C391.967 -25.2927 187.287 184.522 174.471 198.222C174.035 198.688 173.703 199.088 173.334 199.609C165.57 210.567 71.0651 349.359 146.967 509.689Z" fill="#9FC4FC"/>
            </g>
            <g filter="url(#filter3_f_188_2448)">
              <path d="M217.039 534.811C296.885 682.919 474.176 659.509 591.103 637.889C593.587 637.43 595.822 636.576 597.899 635.14C624.008 617.107 802.763 481.919 607.645 283.427C470.812 144.228 357.745 196.261 343.11 203.916C342.005 204.494 341.172 205.084 340.248 205.921C323.199 221.353 140.062 392.024 217.039 534.811Z" fill="#FFFCF9" fillOpacity="0.5"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_188_2448" x="388.345" y="375.465" width="573.81" height="593.572" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2448"/>
            </filter>
            <filter id="filter1_f_188_2448" x="382.396" y="378.83" width="495.332" height="482.391" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2448"/>
            </filter>
            <filter id="filter2_f_188_2448" x="17.6411" y="10.082" width="802.431" height="789.048" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2448"/>
            </filter>
            <filter id="filter3_f_188_2448" x="98.2356" y="88.0918" width="699.477" height="665.76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2448"/>
            </filter>
          </defs>
        </svg>
      </StainImageTen>
    </Wrap>
    
  </Main>

  <Modal modal={modal}>
    <ModalHeader>
      <ModalTitle>Комитеты</ModalTitle>
      <ModalClose onClick={() => setModal(false)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6L17.9998 17.9998" stroke="#323232" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.00017 17.9998L18 6" stroke="#323232" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </ModalClose>
    </ModalHeader>

    <ModalBody>
      <FilterItem
        onClick={(event) => {

          FilterChange(event)
          setModal(false)
        
        }}
        className={active == 'Все' ? 'active' : ''}
      >Все</FilterItem>
      <FilterItem
        onClick={(event) => {

          FilterChange(event)
          setModal(false)
        
        }}
        className={active == 'Комитет по труду и социальной политике' ? 'active' : ''}
      >Комитет по труду и социальной политике</FilterItem>
      <FilterItem
        onClick={(event) => {
 
          FilterChange(event)
          setModal(false)
        
        }}
        className={active == 'Комитет по бюджету, финансам и налоговой политики' ? 'active' : ''}
      >Комитет по бюджету, финансам и налоговой политики</FilterItem>
      <FilterItem
        onClick={(event) => {

          FilterChange(event)
          setModal(false)
        
        }}
        className={active == 'Комитет по законодательству и местному самоуправлению' ? 'active' : ''}
      >Комитет по законодательству и местному самоуправлению</FilterItem>
      <FilterItem
        onClick={(event) => {

          FilterChange(event)
          setModal(false)
        
        }}
        className={active == 'Комитет по экономической политике агропромышленному комплексу экологии и природопользованию' ? 'active' : ''}
      >Комитет по экономической политике агропромышленному комплексу экологии и природопользованию</FilterItem>
    </ModalBody>
  </Modal>
  </>

}

// Create Main styled component
const Main = styled.section`
    position: relative;
    overflow: hidden;
`

// Create Wrapper styled component
const Wrap = styled.div`
    max-width: 1200px;
    padding: 0 4%;
    margin: 0 auto;
    position: relative;
`

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 120px;
    position: relative;
`

const Content = styled.div`
    display: flex;
    gap: 0 40px;
    justify-content: space-between;
`

const StainImageNine = styled.div`
    position: absolute;
    top: 0;
    left: -400px;
    z-index: -1;
`

const StainImageTen = styled.div`
    position: absolute;
    top: 550px;
    right: -300px;
    z-index: -1;
`

const Modal = styled.div<any>`
  width: 96%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  background: #FFFCF9;
  box-shadow: -8px 0px 20px rgba(56, 56, 56, 0.2);
  transition: .4s;
  padding-top: 24px;
  padding-left: 4%;
  padding-right: 4%;
  transform: ${({ modal }) => modal ? 'translateX(0%)' : 'translateX(100%)'};
   opacity: ${({ modal }) => modal ? '1' : '0'};
`

const ModalHeader = styled.div`
  position: relative;
  display: felx;
  align-items: center;
`

const ModalTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 42px;
  text-transform: uppercase;
`

const ModalClose = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  top: 0;
  right: 0;
  cursor: pointer;
`

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
`

const FilterItem = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;

  &.active {
    color: #2F4395;
  }
`

// Export default Container ui
export default ApplicationsSection
