import React, { useState } from 'react'
import styled from '@emotion/styled'
import InputMask from 'react-input-mask'
import Select from '#/components/select'

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
    isOpen,
    setIsOpen
  ] = useState(false)
  const [
    selectedOption,
    setSelectedOption
  ] = useState(null)

  const [
    errorName,
    setErrorName
  ] = useState(false)
  const [
    errorLastname,
    setLastname
  ] = useState(false)
  const [
    errorPatronymic,
    setErrorPatronymic
  ] = useState(false)
  const [
    errorSocial,
    setErrorSocial
  ] = useState(false)
  const [
    errorEmail,
    setErrorEmail
  ] = useState(false)
  const [
    errorPhone,
    setErrorPhone
  ] = useState(false)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value: any) => () => {
    props.setSocial(value)
  }

  // Ошибка в имени
  const checkErrorName = (event: any) => {

    event.target.value.length < 2 ? setErrorName(true) : setErrorName(false)

  }

  // Ошибка в фамилии
  const checkErrorLastname = (event: any) => {

    event.target.value.length < 2 ? setLastname(true) : setLastname(false)

  }

  // Ошибка в социальном статусе

  // Ошибка в мыле
  const checkErrorEmail = (event: any) => {

    event.target.value.includes('@') ? setErrorEmail(false) : setErrorEmail(true)

  }

  // Ошибка в телефоне
  const checkErrorPhone = (event: any) => {

    event.target.value.includes('_') ? setErrorPhone(false) : setErrorPhone(true)

  }

  return <Container step={props.step}>
    <TextField>
      <Placeholder>Имя</Placeholder>

      <InputContainer>
        <Input
          onChange={(event) => props.setName(event.target.value)}
          onBlur={(event) => checkErrorName(event)}
          onFocus={() => setErrorName(false)}
        />
        <TextError>qwe</TextError>
      </InputContainer>
    </TextField>

    <TextField>
      <Placeholder>Фамилия</Placeholder>
      <InputContainer>
        <Input
          onChange={(event) => props.setLastname(event.target.value)}
          onBlur={(event) => checkErrorLastname(event)}
          onFocus={() => setLastname(false)}
        />
        <TextError>qwe</TextError>
      </InputContainer>
    </TextField>

    <TextField>
      <Placeholder>Отчество</Placeholder>
      <InputContainer>
        <Input
          onChange={(event) => props.setPatronymic(event.target.value)}
        />
        <TextError>qwe</TextError>
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
          onChange={(event) => props.setEmail(event.target.value)}
          onBlur={(event) => checkErrorEmail(event)}
          onFocus={() => setErrorEmail(false)}
        />
        <TextError>qwe</TextError>
      </InputContainer>
    </TextField>

    <TextField>
      <Placeholder>Контактный телефон</Placeholder>
      <InputContainer>
        <InputPhone
          className='input-phone'
          mask='+7(999)999-99-99'
          placeholder='+7(___)___-__-__'
          onChange={(event) => props.setPhone(event.target.value)}
          onBlur={(event) => checkErrorPhone(event)}
          onFocus={() => setErrorPhone(false)}
        />
        <TextError>qwe</TextError>
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

const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 15px 25px;
    border: 1.5px solid rgba(50, 50, 50, 0.5);
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

const InputPhone = styled(InputMask)`
  width: 100%;
    height: 48px;
    padding: 15px 25px;
    border: 1.5px solid rgba(50, 50, 50, 0.5);
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

const CustomSelect = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0 60px;
`

// Select
const DropDownContainer = styled.div`
    width: 100%;
    
`

const DropDownHeader = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 15px 25px;
    border: 1.5px solid rgba(50, 50, 50, 0.5);
    background-color: #fff;
    border-radius: 8px;
    cursor: pointer;

    font-weight: 400;
    font-size: 13px;
    color: #323232;
`

const DropDownMain = styled.div`
    width: 100%;
    position: relative;
`

const DropDownListContainer = styled.div<any>`
    transition: height .4s;
    position: absolute;
    z-index: 2;
    height: ${({ isOpen }) => isOpen ? '200' : '0'}px;
    overflow-y: scroll;
    background: #FFFCF9;
    box-shadow: 2px 2px 12px rgba(141, 141, 141, 0.2);
    border-radius: 8px;
    margin-top: 8px;
    width: 100%;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 10px 10px #C1BEBC;
        border: solid 3px transparent;
        border-radius: 100px;
    }
`

const DropDownList = styled.ul<any>`
    padding: 24px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px 0;
    margin-top: 0;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 10px 10px #C1BEBC;
        border: solid 3px transparent;
        border-radius: 100px;
    }

`

const ListItem = styled.li`
  padding-left: 0;
  list-style: none;
`

const InputContainer = styled.div`
    position: relative;
    width: 100%;
`

const DropdownIcon = styled.div<any>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 17px;
    transition: .4s;

    rotate: ${({ open }) => open ? '180deg' : '0deg'};
`

const TextError = styled.p`
  color: #952F2F;
  position: absolute;
  margin-bottom: 0;
  bottom: -15px;
  left: 16px;
  opacity: 0;
  pointer-events: none;
`

export default StepPersonal