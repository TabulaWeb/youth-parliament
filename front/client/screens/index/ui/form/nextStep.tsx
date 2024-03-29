import process, { off } from 'process'

import React from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

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
  setUnicNumber,
  errorName,
  errorSurname,
  errorPatronymic,
  errorSocial,
  errorEmail,
  errorPhone,
  errorAdress,
  errorTheme,
  errorTitle,
  errorAppeal,
  setErrorName,
  setErrorSurname,
  setErrorPatranomyc,
  setErrorSocial,
  setErrorPhone,
  setErrorEmail,
  setErrorAdress,
  setErrorTheme,
  setErrorTitle,
  setErrorAppeal
}:any) => {

  const next = (step:any) => step >= 4 ? step : step+1

  return <NextButton aria-label='continue' type='button' onClick={() => {

    if(step == 1) {

      setStep(next)
    
    }

    if(step == 2) {

      if(name == '' || name == undefined) return setErrorName(true)
      if(lastname == '' || lastname == undefined) return setErrorSurname(true)
      if(patronymic == '' || patronymic == undefined) return setErrorPatranomyc(true)
      if(social == '' || social == undefined) return setErrorSocial(true)
      if(email == '' || email == undefined) return setErrorEmail(true)
      if(phone == '' || phone == undefined) return setErrorPhone(true)
      
      return setStep(next)
    
    }

    if(step == 3) {

      if (address == '' || address == undefined) return setErrorAdress(true)
      if (theme == '' || theme == undefined) return setErrorTheme(true)
      if (title == '' || title == undefined) return setErrorTitle(true)
      if (textAppeals == '' || textAppeals == undefined) return setErrorAppeal(true)

      return axios.post(`${process.env.NEXT_PUBLIC_API}/appeals`, { data: {
        name: name,
        surname: lastname,
        patronymic: patronymic,
        social: social,
        phone: phone,
        adress: address,
        theme: theme,
        title: title,
        appeal: textAppeals,
        publish: false
      } })
        .then((response) => {

          setStep(next)
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
