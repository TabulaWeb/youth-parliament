import React, { useState } from 'react'
import styled from '@emotion/styled'

import ToolTip from '#/components/tool'
import Select from '#/components/select'

const optionsAdress = [
  {
    id: 1,
    value: 'Комитет по труду и социальной политике'
  },
  {
    id: 2,
    value: 'Комитет по бюджету, финансам и налоговой политики'
  },
  {
    id: 3,
    value: 'Комитет по законодательству и местному самоуправлению'
  },
  {
    id: 4,
    value: 'Комитет по экономической политике, агропромышленному комплексу, экологии и природопользованию'
  }
]

const optionsTheme = [
  {
    id: 1,
    value: 'Безопасность и охрана правопорядка'
  },
  {
    id: 2,
    value: 'Внешнеэкономическая деятельность. Таможенное дело'
  },
  {
    id: 3,
    value: 'Гражданское право'
  },
  {
    id: 4,
    value: 'Жилище'
  },
  {
    id: 5,
    value: 'Здравоохранение. Физическая культура и спорт. Туризм'
  },
  {
    id: 6,
    value: 'Индивидуальные правовые акты по кадровым вопросам, вопросам награждения, помилования, гражданства, присвоения почетных и иных званий'
  },
  {
    id: 7,
    value: 'Информация и информатизация'
  },
  {
    id: 8,
    value: 'Конституционный строй'
  },
  {
    id: 9,
    value: 'Международные отношения. Международное право'
  },
  {
    id: 10,
    value: 'Оборона'
  },
  {
    id: 11,
    value: 'Образование. Наука. Культура'
  },
  {
    id: 12,
    value: 'Основы государственного управления'
  },
  {
    id: 13,
    value: 'Правосудие'
  },
  {
    id: 14,
    value: 'Природные ресурсы и охрана окружающей природной среды'
  },
  {
    id: 15,
    value: 'Прокуратура. Органы юстиции. Адвокатура. Нотариат'
  },
  {
    id: 16,
    value: 'Семья'
  },
  {
    id: 17,
    value: 'Социальное обеспечение и социальное страхование'
  },
  {
    id: 18,
    value: 'Труд и занятость населения'
  },
  {
    id: 19,
    value: 'Уголовное право. Исполнение наказаний'
  },
  {
    id: 20,
    value: 'Финансы'
  },
  {
    id: 21,
    value: 'Хозяйственная деятельность'
  },
  {
    id: 22,
    value: 'Экономика и инвестиции'
  },
  {
    id: 23,
    value: 'Другое'
  }
]

const StepApples = ({
  step,
  setTitle,
  title,
  setAddress,
  address,
  theme,
  setTheme,
  setTextAppeals,
  textAppeals,
  setErrorTitle,
  setErrorAppeal,
  errorTitle,
  errorAppeal
}: any) => {

  const [
    limit,
    setLimit
  ] = useState(0)
  const [
    limitAddress,
    setLimitAddress
  ] = useState(0)

  const [
    successTitle,
    setSuccessTitle
  ] = useState(false)
  const [
    successAppeals,
    setSuccesAppeals
  ] = useState(false)

  // ...
  const changeTitle = (event: any) => {

    if (event.target.value.length <= 70) {

      setLimit(event.target.value.length)
      setTitle(event.target.value)

    }

  }

  const changeAddress = (event: any) => {

    if (event.target.value.length <= 1500) {

      setLimitAddress(event.target.value.length)
      setTextAppeals(event.target.value)

    }

  }

  return <Container step={step}>
    <Select 
      answers={optionsAdress} 
      tooltip='123' 
      placeholder='Адресат обращения'
      onChange={setAddress}
    />

    <Select 
      answers={optionsTheme} 
      tooltip='123' 
      placeholder='Тематика обращения' 
      onChange={setTheme}
    />

    <TextField>
      <Placeholder>
        Заголовок, краткая суть
        <ToolTip text='123' />
      </Placeholder>

      <InputContainer>
        <Input
          onChange={(event:any) => {

            changeTitle(event)

            if(event.target.value.length >= 2) setSuccessTitle(true)
            else setSuccessTitle(false)

          }}
          value={title}
          onBlur={(event:any) => {
            
            if(errorTitle) setSuccessTitle(false)
            if(event.target.value.length <= 2) setErrorTitle(true)

          }}
          onFocus={() => setErrorTitle(false)}
          error={errorTitle}
        />
        <TextError error={errorTitle}>Слишком коротко</TextError>
        <TextCount>{limit} / 70</TextCount>
      </InputContainer>
    </TextField>

    <TextField>
      <Placeholder>
        Обращение
        <ToolTip text='123' />
      </Placeholder>

      <InputContainer>
        <TextErea
          onChange={(event:any) => {

            changeAddress(event)
            
            if(event.target.value.length >= 2) setSuccesAppeals(true)
            else setSuccesAppeals(false)

          }}
          value={textAppeals}
          onBlur={(event:any) => {
          
            if(errorAppeal) setSuccesAppeals(false)
            if(event.target.value.length <= 2) setErrorAppeal(true)
          
          }}
          onFocus={() => setErrorAppeal(false)}
          error={errorAppeal}
        />
        <TextError error={errorAppeal}>Слишком коротко</TextError>
        <TextCount>{limitAddress} / 1500</TextCount>
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

const Input = styled.input<any>`
  width: 100%;
  height: 48px;
  padding: 15px 25px;
  border: 1.5px solid ${({ error }) => error ? '#952F2F' : 'rgba(50, 50, 50, 0.5)'};
  border-radius: 8px;
  outline: none;
  font-weight: 400;
  font-size: 13px;
  color: #323232;
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

const TextCount = styled.p`
  position: absolute;
  bottom: -28px;
  right: 0;

  color: rgba(50, 50, 50, 0.5);
  font-family: 'Golos UI';
  font-weight: 400;
  font-size: 13px;
`

const TextErea = styled.textarea<any>`
  width: 100%;
  resize: none;
  height: 100px;
  padding: 15px 25px;
  border: 1.5px solid ${({ error }) => error ? '#952F2F' : 'rgba(50, 50, 50, 0.5)'};
  border-radius: 8px;
  outline: none;
  font-weight: 400;
  font-size: 13px;
  color: #323232;
`

const FileField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 60px;
`

const FileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0 24px;
  width: 100%;
`

const InputFileLable = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  min-height: 80px;
  border: 1.5px dashed rgba(50, 50, 50, 0.5);
  border-radius: 8px;
  cursor: pointer;
`

const InputFileText = styled.p`
  color: #323232;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  margin: 0;
`

const InputFile = styled.input`
  min-width: 80px;
  min-height: 80px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  opacity: 0;

  cursor: pointer;
  border-radius: 8px;
`

export default StepApples