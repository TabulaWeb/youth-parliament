import React, { useState } from 'react'
import styled from '@emotion/styled'

import ToolTip from '#/components/tool'
import Select from '#/components/select'

const options = [
  {
    id: 1,
    value: 'qwerty'
  },
  {
    id: 2,
    value: 'qwerty'
  },
  {
    id: 3,
    value: 'qwerty'
  },
  {
    id: 4,
    value: 'qwerty'
  }
]

const StepApples = ({ step }: any) => {

  const [
    isOpen,
    setIsOpen
  ] = useState(false)
  const [
    selectedOption,
    setSelectedOption
  ] = useState(null)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value: any) => () => {

    setSelectedOption(value)
    setIsOpen(false)
    // console.log(selectedOption)

  }

  return <Container step={step}>
    <Select answers={options} tooltip='123' placeholder='Социальный статус' />

    <Select answers={options} tooltip='123' placeholder='Социальный статус' />

    <Select answers={options} tooltip='123' placeholder='Социальный статус' />

    <TextField>
      <Placeholder>Электронная почта</Placeholder>
      <Input />
    </TextField>

    <TextField>
      <Placeholder>Контактный телефон</Placeholder>
      <Input />
    </TextField>
  </Container>

}

const Container = styled.div<any>`
    opacity: ${({ step }) => step == 3 ? '1' : '0'};
    position: ${({ step }) => step == 3 ? 'static' : 'absolute'};
    pointer-events: ${({ step }) => step == 3 ? 'auto' : 'none'};

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
    align-items: center;
    margin-bottom: 0;
`

const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 15px 25px;
    border: 1.5px solid rgba(50, 50, 50, 0.5);
    border-radius: 8px;

    font-weight: 400;
    font-size: 13px;
    color: #323232;
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
    width: 100%;
    height: 48px;
    padding: 15px 25px;
    border: 1.5px solid rgba(50, 50, 50, 0.5);
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 8px;
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
    height: ${({ isOpen }) => isOpen ? '200' : '0'}px;
    overflow-y: scroll;
    background: #FFFCF9;
    box-shadow: 2px 2px 12px rgba(141, 141, 141, 0.2);
    border-radius: 8px;
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

export default StepApples