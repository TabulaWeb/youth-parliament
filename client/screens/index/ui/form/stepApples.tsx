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

const StepApples = ({ step, setTitle, title }: any) => {

  const [
    errorTitle,
    setErrorTitle
  ] = useState(false)

  const [limit, setLimit] = useState(false)

  // Ошибка в имени
  const checkErrorTitle = (event: any) => {

    event.target.value.length < 2 ? setErrorTitle(true) : setErrorTitle(false)

  }

  // ограничение по кол-ву текста
  const limitText = (event: any) => {
    setLimit(true)


  }

  return <Container step={step}>
    <Select answers={options} tooltip='123' placeholder='Адресат обращения' />

    <Select answers={options} tooltip='123' placeholder='Тематика обращения' />

    <TextField>
      <Placeholder>Заголовок, краткая суть</Placeholder>

      <InputContainer>
        <Input
          onChange={(event) => setTitle(event.target.value)}
          onBlur={(event) => checkErrorTitle(event)}
          onFocus={() => setErrorTitle(false)}
        />
        <TextError>qwe</TextError>
        {/* <TextCount>{title.length} / 70</TextCount> */}
      </InputContainer>
    </TextField>

    <TextField>
      <Placeholder>Обращение</Placeholder>

      <InputContainer>
        <Input
          onChange={(event) => setTitle(event.target.value)}
          onBlur={(event) => checkErrorTitle(event)}
          onFocus={() => setErrorTitle(false)}
        />
        <TextError>qwe</TextError>
        {/* <TextCount>{title.length} / 70</TextCount> */}
      </InputContainer>
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

const InputContainer = styled.div`
    position: relative;
    width: 100%;
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

const TextCount = styled.p`
  position: absolute;
  bottom: -15px;
  right: 0;

  color: rgba(50, 50, 50, 0.5);
  font-family: 'Golos UI';
  font-weight: 400;
  font-size: 13px;
`

export default StepApples