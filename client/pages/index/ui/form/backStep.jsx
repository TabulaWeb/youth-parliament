import React from 'react'
import styled from 'styled-components'

const BackStep = ({ step, setStep }) => {

    const back = (step) => step == 0 ? step : step-1

    return <BackButton aria-label='next step' step={step} type="button" onClick={() => setStep(back)}>
        <svg width="27" height="10" viewBox="0 0 27 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 4.70874C27 4.09211 26.5001 3.59223 25.8835 3.59223L5.24905 3.59223L6.62667 2.69903C6.81915 2.57571 7.00497 2.45489 7.17508 2.34327C7.65833 2.02618 7.78968 1.3798 7.47701 0.893679C7.15915 0.399501 6.5041 0.253765 6.00902 0.570214C4.19433 1.73014 0.230176 4.27171 0.0313394 4.46602C-0.158083 4.66019 0.461844 5.2233 3.25151 7.35922C4.22321 8.10628 5.12241 8.78181 5.76778 9.2626C6.2935 9.65425 7.04142 9.48464 7.35179 8.90719C7.60726 8.43188 7.47262 7.84098 7.03857 7.52039C6.78089 7.33007 6.48494 7.11029 6.19616 6.8932L4.74967 5.82524L25.8835 5.82524C26.5001 5.82524 27 5.32537 27 4.70874Z" fill="#323232" fillOpacity="0.16"/>
        </svg>
    </BackButton>
}

const BackButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    -webkit-box-shadow: 0px 0px 0px 3px rgba(50, 50, 50, 0.16); 
    -moz-box-shadow: 0px 0px 0px 3px rgba(50, 50, 50, 0.16); 
    box-shadow: 0px 0px 0px 3px rgba(50, 50, 50, 0.16);

    width: 68px;
    height: 68px;
    border-radius: 100%;
    border: none;
    background: none;
    opacity: ${({ step }) => step > 1 ? '1' : '0'};
    position: ${({ step }) => step > 1 ? 'static' : 'absolute'};
    pointer-events: ${({ step }) => step > 1 ? 'auto' : 'none'};

    cursor: pointer;
`

export default BackStep