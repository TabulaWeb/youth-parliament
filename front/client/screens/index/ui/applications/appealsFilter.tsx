import React, { useState } from 'react'
import styled from '@emotion/styled'
import get from 'axios'

const AppealsFilter = ({setFilter, changeResponse, page}: any) => {
  
  const [
    active,
    setActive
  ] = useState('Все')

  const handleChange = (event:any) => {
    setActive(event.target.value)
    setFilter(event.target.value)
    if(event.target.value != 'Все') {
      changeResponse(event.target.value, page)
    }
  }

  return <Container>
    <Wrapper>
      <FilterItem>
        <FilterInput type='radio' name='filter' value={'Все'} checked={active == 'Все'} onChange={handleChange}/>
        <FilterName className='name'>Все</FilterName>
        <FilterCount>{}</FilterCount>
        <Span></Span>
      </FilterItem>

      <FilterItem>
        <FilterInput type='radio' name='filter' value={'Комитет по труду и социальной политике'} checked={active == 'Комитет по труду и социальной политике'} onChange={handleChange}/>
        <FilterName className='name'>Комитет по труду и социальной политике</FilterName>
        <FilterCount>{}</FilterCount>
        <Span></Span>
      </FilterItem>

      <FilterItem>
        <FilterInput type='radio' name='filter' value={'Комитет по бюджету, финансам и налоговой политики'} checked={active == 'Комитет по бюджету, финансам и налоговой политики'} onChange={handleChange}/>
        <FilterName className='name'>Комитет по бюджету, финансам и налоговой политики</FilterName>
        <FilterCount>{}</FilterCount>
        <Span></Span>
      </FilterItem>

      <FilterItem>
        <FilterInput type='radio' name='filter' value={'Комитет по законодательству и местному самоуправлению'} checked={active == 'Комитет по законодательству и местному самоуправлению'} onChange={handleChange}/>
        <FilterName className='name'>Комитет по законодательству и местному самоуправлению</FilterName>
        <FilterCount>{}</FilterCount>
        <Span></Span>
      </FilterItem>

      <FilterItem>
        <FilterInput type='radio' name='filter' value={'Комитет по экономической политике агропромышленному комплексу экологии и природопользованию'} checked={active == 'Комитет по экономической политике агропромышленному комплексу экологии и природопользованию'} onChange={handleChange}/>
        <FilterName className='name'>Комитет по экономической политике агропромышленному комплексу экологии и природопользованию</FilterName>
        <FilterCount>{}</FilterCount>
        <Span></Span>
      </FilterItem>
    </Wrapper>
  </Container>

}

const Container = styled.div`
    max-width: 328px;
    width: 100%;

    @media screen and (max-width: 991px) {
        display: none;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px 0;
    -webkit-box-shadow: -1px 0px 0px 0px rgba(50, 50, 50, 0.1); 
    -moz-box-shadow: -1px 0px 0px 0px rgba(50, 50, 50, 0.1); 
    box-shadow: -1px 0px 0px 0px rgba(50, 50, 50, 0.1);
`

const FilterItem = styled.label`
    padding-left: 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    cursor: pointer;
`

const FilterInput = styled.input`
    &:checked ~ p.name {
        color: #2F4395;
        transition: .4s;
    }

    &:checked ~ p {
        color: rgba(47, 67, 149, 0.5);
        transition: .4s;
    }

    &:checked ~ span {
        width: 1px;
        height: 100%;
        background-color: #2F4395;
        transition: .4s;
    }
`

const FilterName = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #323232;
    line-height: 24px;
    max-width: 260px;
    margin: 0;
    transition: .4s;
`

const FilterCount = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(50, 50, 50, 0.5);
    margin: 0;
    transition: .4s;
`

const Span = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    transition: .4s;
`

export default AppealsFilter