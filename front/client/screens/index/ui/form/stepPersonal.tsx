import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import InputMask from 'react-input-mask'

import Select from '#/components/select'
import CrossIcon from '~/icon/cross.svg'

const options = [
  {
    id: 1,
    value: 'Фермер'
  },
  {
    id: 2,
    value: 'Творческая и научная интеллигенция'
  },
  {
    id: 3,
    value: 'Рабочий с/х'
  },
  {
    id: 4,
    value: 'Без определенного места жительства'
  }
]

const StepPersonal = (props: any) => {
  const [
    successName,
    setSuccessName
  ] = useState(false)
  const [
    successSurname,
    setSuccessSurname
  ] = useState(false)
  const [
    successPatronymic,
    setSuccessPatronymic
  ] = useState(false)
  const [
    successSocial,
    setSuccessSocial
  ] = useState(false)
  const [
    successPhone,
    setSuccessPhone
  ] = useState(false)
  const [
    successEmail,
    setSuccessEmail
  ] = useState(false)
  
  return <Container step={props.step}>
    <TextField>
      <Placeholder>Имя</Placeholder>

      <InputContainer>
        <Input
          onChange={(event: any) => {

            props.setName(event.target.value)

            if(event.target.value.length >= 2) setSuccessName(true)
            else setSuccessName(false)
           
          }}
          onBlur={(event: any) => {

            if(props.errorName) setSuccessName(false)
            if(event.target.value.length <= 2) props.setErrorName(true)
            
          }}
          onFocus={() => props.setErrorName(false)}
          error={props.errorName}
        />
        <TextError error={props.errorName}>Пожалуйста, указывайте полностью, без сокращений</TextError>

        <ErrorIcon error={props.errorName}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L17.9998 17.9998" stroke="#952F2F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.00017 17.9998L18 6" stroke="#952F2F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ErrorIcon>
            
        <SuccessIcon success={successName}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.2766 6.85311C18.511 6.92811 18.8719 7.27967 18.9703 7.53749C19.0828 7.83749 19.0735 8.22655 18.9422 8.49842C18.7922 8.80311 11.0766 16.4625 10.7297 16.6547C10.3922 16.8328 9.99845 16.8328 9.66095 16.65C9.46408 16.5469 5.91095 13.364 5.30626 12.75C5.0672 12.5109 4.95001 12.2203 4.9547 11.8828C4.96408 11.175 5.48439 10.6969 6.18751 10.7437C6.35626 10.7578 6.56251 10.8 6.6422 10.8469C6.76876 10.9078 9.13595 13.0406 9.9047 13.7766L10.125 13.9922L13.6313 10.4906C15.5578 8.56874 17.1985 6.96092 17.2828 6.91874C17.6063 6.75467 17.8969 6.73592 18.2766 6.85311Z" fill="#55965B"/>
          </svg>
        </SuccessIcon>
      </InputContainer>
    </TextField>

    <TextField>
      <Placeholder>Фамилия</Placeholder>
      <InputContainer>
        <Input
          onChange={(event: any) => {

            props.setLastname(event.target.value)

            if(event.target.value.length >= 2) setSuccessSurname(true)
            else setSuccessSurname(false)

          }}
          onBlur={(event: any) => {

            if(props.errorSurname) setSuccessSurname(false)
            if(event.target.value.length <= 2) props.setErrorSurname(true)

          }}
          onFocus={() => props.setErrorSurname(false)}
          error={props.errorSurname}
        />
        <TextError error={props.errorSurname}>Пожалуйста, указывайте полностью, без сокращений</TextError>

        <ErrorIcon error={props.errorSurname}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L17.9998 17.9998" stroke="#952F2F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.00017 17.9998L18 6" stroke="#952F2F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ErrorIcon>
            
        <SuccessIcon success={successSurname}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.2766 6.85311C18.511 6.92811 18.8719 7.27967 18.9703 7.53749C19.0828 7.83749 19.0735 8.22655 18.9422 8.49842C18.7922 8.80311 11.0766 16.4625 10.7297 16.6547C10.3922 16.8328 9.99845 16.8328 9.66095 16.65C9.46408 16.5469 5.91095 13.364 5.30626 12.75C5.0672 12.5109 4.95001 12.2203 4.9547 11.8828C4.96408 11.175 5.48439 10.6969 6.18751 10.7437C6.35626 10.7578 6.56251 10.8 6.6422 10.8469C6.76876 10.9078 9.13595 13.0406 9.9047 13.7766L10.125 13.9922L13.6313 10.4906C15.5578 8.56874 17.1985 6.96092 17.2828 6.91874C17.6063 6.75467 17.8969 6.73592 18.2766 6.85311Z" fill="#55965B"/>
          </svg>
        </SuccessIcon>
      </InputContainer>
    </TextField>

    <TextField>
      <Placeholder>Отчество</Placeholder>
      <InputContainer>
        <Input
          onChange={(event: any) => {

            props.setPatronymic(event.target.value)

            if(event.target.value.length >= 2) setSuccessPatronymic(true)
            else setSuccessPatronymic(false)

          }}
          onBlur={(event: any) => {

            if(props.errorPatronymic) setSuccessPatronymic(false)
            if(event.target.value.length <= 2) props.setErrorPatranomyc(true)

          }}
          onFocus={() => props.setErrorPatranomyc(false)}
          error={props.errorPatronymic}
        />
        <TextError error={props.errorPatronymic}>Пожалуйста, указывайте полностью, без сокращений</TextError>

        <ErrorIcon error={props.errorPatronymic}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L17.9998 17.9998" stroke="#952F2F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.00017 17.9998L18 6" stroke="#952F2F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ErrorIcon>
            
        <SuccessIcon success={successPatronymic}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.2766 6.85311C18.511 6.92811 18.8719 7.27967 18.9703 7.53749C19.0828 7.83749 19.0735 8.22655 18.9422 8.49842C18.7922 8.80311 11.0766 16.4625 10.7297 16.6547C10.3922 16.8328 9.99845 16.8328 9.66095 16.65C9.46408 16.5469 5.91095 13.364 5.30626 12.75C5.0672 12.5109 4.95001 12.2203 4.9547 11.8828C4.96408 11.175 5.48439 10.6969 6.18751 10.7437C6.35626 10.7578 6.56251 10.8 6.6422 10.8469C6.76876 10.9078 9.13595 13.0406 9.9047 13.7766L10.125 13.9922L13.6313 10.4906C15.5578 8.56874 17.1985 6.96092 17.2828 6.91874C17.6063 6.75467 17.8969 6.73592 18.2766 6.85311Z" fill="#55965B"/>
          </svg>
        </SuccessIcon>
      </InputContainer>
    </TextField>

    <Select 
      answers={options} 
      tooltip='123' 
      placeholder='Социальный статус'
      onChange={props.setSocial}
    />

    <TextField>
      <Placeholder>Электронная почта</Placeholder>
      <InputContainer>
        <Input
          type='email'
          onChange={(event: any) => {

            props.setEmail(event.target.value)

            if(event.target.value.length >= 2 && event.target.value.includes('@')) setSuccessEmail(true)
            else setSuccessEmail(false)

          }}
          onBlur={(event: any) => {

            if(props.errorEmail) setSuccessEmail(false)
            if(event.target.value.length <= 2 || !event.target.value.includes('@')) props.setErrorEmail(true)

          }}
          onFocus={() => props.setErrorEmail(false)}
          error={props.errorEmail}
        />
        <TextError error={props.errorEmail}>Не корректная почта</TextError>

        <ErrorIcon error={props.errorEmail}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L17.9998 17.9998" stroke="#952F2F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.00017 17.9998L18 6" stroke="#952F2F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ErrorIcon>
            
        <SuccessIcon success={successEmail}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.2766 6.85311C18.511 6.92811 18.8719 7.27967 18.9703 7.53749C19.0828 7.83749 19.0735 8.22655 18.9422 8.49842C18.7922 8.80311 11.0766 16.4625 10.7297 16.6547C10.3922 16.8328 9.99845 16.8328 9.66095 16.65C9.46408 16.5469 5.91095 13.364 5.30626 12.75C5.0672 12.5109 4.95001 12.2203 4.9547 11.8828C4.96408 11.175 5.48439 10.6969 6.18751 10.7437C6.35626 10.7578 6.56251 10.8 6.6422 10.8469C6.76876 10.9078 9.13595 13.0406 9.9047 13.7766L10.125 13.9922L13.6313 10.4906C15.5578 8.56874 17.1985 6.96092 17.2828 6.91874C17.6063 6.75467 17.8969 6.73592 18.2766 6.85311Z" fill="#55965B"/>
          </svg>
        </SuccessIcon>
      </InputContainer>
    </TextField>

    <TextField>
      <Placeholder>Контактный телефон</Placeholder>
      <InputContainer>
        <InputPhone
          className='input-phone'
          mask='+7(999)999-99-99'
          placeholder='+7(___)___-__-__'
          onChange={(event) => {

            props.setPhone(event.target.value)

            if(!event.target.value.includes('_') && event.target.value.length > 1) setSuccessPhone(true)
            else setSuccessPhone(false)

          }}
          onBlur={(event) => {

            if(props.errorPhone) setSuccessPhone(false)
            if(event.target.value.includes('_') || event.target.value.length < 1) props.setErrorPhone(true)
            console.log(event.target.value)

          }}
          onFocus={() => props.setErrorPhone(false)}
          error={props.errorPhone}
        />
        <TextError error={props.errorPhone}>Не корректный номер</TextError>

        <ErrorIcon error={props.errorPhone}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L17.9998 17.9998" stroke="#952F2F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.00017 17.9998L18 6" stroke="#952F2F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ErrorIcon>
            
        <SuccessIcon success={successPhone}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.2766 6.85311C18.511 6.92811 18.8719 7.27967 18.9703 7.53749C19.0828 7.83749 19.0735 8.22655 18.9422 8.49842C18.7922 8.80311 11.0766 16.4625 10.7297 16.6547C10.3922 16.8328 9.99845 16.8328 9.66095 16.65C9.46408 16.5469 5.91095 13.364 5.30626 12.75C5.0672 12.5109 4.95001 12.2203 4.9547 11.8828C4.96408 11.175 5.48439 10.6969 6.18751 10.7437C6.35626 10.7578 6.56251 10.8 6.6422 10.8469C6.76876 10.9078 9.13595 13.0406 9.9047 13.7766L10.125 13.9922L13.6313 10.4906C15.5578 8.56874 17.1985 6.96092 17.2828 6.91874C17.6063 6.75467 17.8969 6.73592 18.2766 6.85311Z" fill="#55965B"/>
          </svg>
        </SuccessIcon>
      </InputContainer>
    </TextField>
  </Container>

}

const Container = styled.div<any>`
    opacity: ${({ step }) => step == 2 ? '1' : '0'};
    position: ${({ step }) => step == 2 ? 'static' : 'absolute'};
    pointer-events: ${({ step }) => step == 2 ? 'auto' : 'none'};

    display: flex;
    flex-direction: column;
    gap: 28px 0;
    margin-bottom: 60px;
    max-width: 75%;
`

const TextField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0 60px;
`

const Placeholder = styled.p`
    width: 225px;
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
`

const Input = styled.input<any>`
    width: 100%;
    height: 48px;
    padding: 15px 25px;
    border: 1.5px solid ${({ error }) => error ? '#952F2F' : 'rgba(50, 50, 50, 0.5)'};
    border-radius: 8px;
    transition: .4s;

    outline: none;

    font-weight: 400;
    font-size: 13px;
    color: #323232;

    &:focus {
        transition: .4s;
        border-color: #2F4395;
    }
`

const InputPhone = styled(InputMask)<any>`
  width: 100%;
    height: 48px;
    padding: 15px 25px;
    border: 1.5px solid ${({ error }) => error ? '#952F2F' : 'rgba(50, 50, 50, 0.5)'};
    border-radius: 8px;
    transition: .4s;

    outline: none;

    font-weight: 400;
    font-size: 13px;
    color: #323232;

    &:focus {
        transition: .4s;
        border-color: #2F4395;
    }
`

const InputContainer = styled.div`
    position: relative;
    width: 100%;
`

const TextError = styled.p<any>`
  color: #952F2F;
  position: absolute;
  margin-bottom: 0;
  bottom: ${({ error }) => error ? '-17px' : '-13px'};
  font-size: 13px;
  left: 16px;
  opacity: ${({ error }) => error ? '1' : '0'};
  pointer-events: none;
  transition: .4s;
`

const ErrorIcon = styled.div<any>`
  position: absolute;
  opacity: ${({error}) => error ? '1' : '0'};
  transform: ${({error}) => error ? 'scale(1)' : 'scale(0.8)'};
  top: 15px;
  right: 12px;
  transition: .4s;
`

const SuccessIcon = styled.div<any>`
  position: absolute;
  opacity: ${({success}) => success ? '1' : '0'};
  transform: ${({error}) => error ? 'scale(1)' : 'scale(0.8)'};
  top: 12px;
  right: 12px;
  transition: .4s;
`

export default StepPersonal
