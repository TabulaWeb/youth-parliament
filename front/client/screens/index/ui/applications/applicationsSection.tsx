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
    get(`${process.env.NEXT_PUBLIC_API}/appeals?filters[publish][$eq]=true&pagination[page]=1&pagination[pageSize]=6`).then(res => {

      setData(res.data.data)
      setPage(res.data.meta.pagination.pageCount)
      setLoader(true)
    
    })

  }, [])

  const changeResponse = (filter:any, page:any) => {

    setLoader(false)

    if(filter == '') {

      get(`${process.env.NEXT_PUBLIC_API}/appeals?filters[publish][$eq]=true&pagination[page]=${page}&pagination[pageSize]=6`).then(res => {

        setData(res.data.data)
        setPage(res.data.meta.pagination.pageCount)
        setLoader(true)
      
      })
    
    } else {

      get(`${process.env.NEXT_PUBLIC_API}/appeals?filters[publish][$eq]=true&filters[adress][$eq]=${filter}&pagination[page]=${page}&pagination[pageSize]=6`).then(res => {

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
        <Circle className='green'></Circle>
        <Circle className='pink'></Circle>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="627" height="919" fill="none"><path fill="#A7FFDA" d="M-2 620c39 38 225 78 306 57 99-27 437-163 284-489C394-223 30 149-61 291c-82 127 17 290 59 329Z"/><path fill="#E0FDF4" d="M130 100C69 127-46 190-61 256c-17 77-112 315 253 469 340 143 400-409 335-521-53-91-219-117-280-124-15-2-103 14-117 20Z"/><path fill="#F7DDFF" d="M-30 376c-177 66-217 420-98 542l3 2c339 249 554 15 572-7 15-20 95-182-7-281C277 474 148 310-30 376Z"/><path fill="#EBD9FF" d="M-74 298c-193 67-356 485-261 631 106 162 338 239 575 26 211-189 108-151 34-281C164 479 120 230-74 298Z"/></svg> */}
      </StainImageNine>

      <Wrapper>
        <Text setModal={setModal} />

        <Content>
          <Appeals data={data} loader={loader} page={page} changeResponse={changeResponse} filter={filter} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <AppealsFilter setFilter={setFilter} changeResponse={changeResponse} page={page} setPage={setPage} setCurrentPage={setCurrentPage}/>
        </Content>
      </Wrapper>

      <StainImageTen>
        <Circle className='pink'></Circle>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="640" height="593" fill="none"><path fill="#FFB6FB" d="M221 100c-60 136 74 407 176 458 95 47 285 29 301-218 15-219-62-206-130-264-115-97-287-112-347 24Z"/><path fill="#A9AEF4" d="M49 558c37 91 180 112 248 63 126-72 167-236 61-338-131-128-184-125-271-41-142 138-74 225-38 316Z"/><path fill="#EBD9FF" d="M358 283c-51 76-52 219-22 258 55 70 241 120 299-6 64-140 36-207-10-249-16-14-52-27-73-34-57-18-145-41-194 31Z"/></svg> */}
      </StainImageTen>
    </Wrap>
    
  </Main>

  <Modal modal={modal}>
    <ModalHeader>
      <ModalTitle>Комитеты</ModalTitle>
      <ModalClose onClick={() => setModal(false)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6L17.9998 17.9998" stroke="#323232" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.00017 17.9998L18 6" stroke="#323232" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
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
filter: blur(50px);
    opacity: 0.5;
    position: absolute;
    top: 100px;
    left: -100px;
    z-index: -1;

  & .green {
    width: 300px;
    height: 300px;
    border-radius: 50px;
    background-color: #A7FFDA;
  }

  & .pink {
    width: 300px;
    height: 300px;
    border-radius: 50px;
    background-color: #EBD9FF;
  }
`

const StainImageTen = styled.div`
filter: blur(50px);
    opacity: 0.5;
    position: absolute;
    top: 250px;
    right: -100px;
    z-index: -1;

  & .pink {
    width: 500px;
    height: 500px;
    border-radius: 50px;
    background-color: #FFB6FB;
  }
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

const Circle = styled.div``

// Export default Container ui
export default ApplicationsSection
