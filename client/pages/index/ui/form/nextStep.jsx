import React from 'react'
import styled from 'styled-components'

const NextStep = ({ step, setStep }) => {

    const next = (step) => step >= 4 ? step : step+1

    return <NextButton type='button' onClick={() => setStep(next)}>ПРОДОЛЖИТЬ</NextButton>
}

const NextButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 260px;
    height: 68px;
    width: 100%;

    -webkit-box-shadow: 0px 0px 0px 3px rgba(47, 67, 149, 1); 
    -moz-box-shadow: 0px 0px 0px 3px rgba(47, 67, 149, 1); 
    box-shadow: 0px 0px 0px 3px rgba(47, 67, 149, 1);

    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #2F4395;

    border: none;
    border-radius: 100px;
    background: none;

    cursor: pointer;
`

export default NextStep;
