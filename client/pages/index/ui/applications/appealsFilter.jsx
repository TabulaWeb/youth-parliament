import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const AppealsFilter = () => {

    const data = [
        {id: 1, name: 'Все', count: 100},
        {id: 2, name: 'По труду и социальной политике ', count: 20},
        {id: 3, name: 'По бюджету и финансам и налоговой политики', count: 30},
        {id: 4, name: 'По законодательству и местному самоуправлению', count: 15},
        {id: 5, name: 'По экономической политике агропромышленному комплексу экологии и природопользованию', count: 35},
    ]
    const [active, setActive] = useState('Все')


    const handleChange = event => {
        setActive(event.target.value);
    };

    return <Container>
        <Wrapper>
        {data.map((item, itemId) => {
            return <FilterItem key={item.id}>
                <FilterInput type='radio' name='filter' value={item.name} checked={active == item.name} onChange={handleChange}/>
                <FilterName className='name'>{item.name}</FilterName>
                <FilterCount>{item.count}</FilterCount>

                <Span></Span>
            </FilterItem>
        })}
        </Wrapper>
    </Container>
}

const Container = styled.div`
    max-width: 328px;
    width: 100%;
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