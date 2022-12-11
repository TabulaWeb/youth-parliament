import React from 'react'
import styled from '@emotion/styled'
import axios from "axios";

const NextStep = ({
  step,
  setStep,
  name,
  lastname,
  patronymic,
  email,
  phone,
  social,
  address,
  theme,
  title,
  textAppeals,
  setUnicNumber
}:any) => {

  const next = (step:any) => step >= 4 ? step : step+1

  return <NextButton aria-label='continue' type='button' onClick={() => {

    setStep(next)

    if(step == 2) {

      console.log({
        name,
        lastname,
        patronymic,
        email,
        phone,
        social,
        address,
        theme,
        title,
        textAppeals 
      })
    
    }

    if(step == 3) {

      axios.post('http://localhost:1337/api/appeals', { data: {
        name: name,
        surname: lastname,
        patronymic: patronymic,
        social: social,
        phone: phone,
        adress: address,
        theme: theme,
        title: title,
        appeal: textAppeals
      }})
      .then((response) => {
          setUnicNumber(response.data.data.id)
        })
        .catch((error) => {
          console.log(error)
        })
    
    }
  
  }}>ПРОДОЛЖИТЬ</NextButton>

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

export default NextStep
