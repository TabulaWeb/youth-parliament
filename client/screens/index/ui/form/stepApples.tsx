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

const StepApples = ({ step, setTitle, title, setAddress, address }: any) => {

  const [
    errorTitle,
    setErrorTitle
  ] = useState(false)

  const [errorAddress, setErrorAddress] = useState(false)

  const [limit, setLimit] = useState(0)
  const [limitAddress, setLimitAddress] = useState(0)

  // Ошибка в имени
  const checkErrorTitle = (event: any) => {
    event.target.value.length < 2 ? setErrorTitle(true) : setErrorTitle(false)
  }

  const checkErrorAddress = (event: any) => {
    event.target.value.length < 2 ? setErrorAddress(true) : setErrorAddress(false)
  }

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
      setAddress(event.target.value)
    }
  }

  return <Container step={step}>
    <Select answers={options} tooltip='123' placeholder='Адресат обращения' />

    <Select answers={options} tooltip='123' placeholder='Тематика обращения' />

    <TextField>
      <Placeholder>
        Заголовок, краткая суть
        <ToolTip text='123' />
      </Placeholder>

      <InputContainer>
        <Input
          onChange={(event) => changeTitle(event)}
          value={title}
          onBlur={(event) => checkErrorTitle(event)}
          onFocus={() => setErrorTitle(false)}
        />
        <TextError>qwe</TextError>
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
          onChange={(event) => changeAddress(event)}
          value={address}
          onBlur={(event) => checkErrorAddress(event)}
          onFocus={() => setErrorTitle(false)}

        />
        <TextError>qwe</TextError>
        <TextCount>{limitAddress} / 1500</TextCount>
      </InputContainer>
    </TextField>

    <FileField>
      <Placeholder>
        Прикрепить файл
      </Placeholder>

      <FileContainer>
        <InputFileLable>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4635 14.4999L16.2313 14.5H10.4559C10.3347 14.502 10.2194 14.554 10.1375 14.6437L10.1426 14.6382C10.223 14.5501 10.3367 14.5 10.4559 14.5L10.4635 14.4999Z" fill="#323232" fill-opacity="0.5" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.6 2.49997C6.71634 2.49997 6 3.21632 6 4.09997V27.9C6 28.7837 6.71634 29.5 7.6 29.5H24.8375C25.7212 29.5 26.4375 28.7837 26.4375 27.9V9.49997H24.3875C22.1562 9.49997 21.9562 9.47497 21.5437 9.15622C21.4187 9.06872 21.25 8.84372 21.1562 8.66872L21 8.34997V5.42497V2.49997H7.6ZM17.4438 9.14372C17.5188 8.94997 17.4688 8.78747 17.2938 8.62497C17.1688 8.50622 17.0563 8.49997 13.7375 8.49997H10.5228C10.3845 8.49997 10.2521 8.5564 10.1563 8.65622C9.96875 8.83747 9.95625 9.11872 10.1188 9.31872C10.1938 9.41353 10.3079 9.4691 10.4288 9.46977L13.6563 9.48747C17.4 9.50622 17.3 9.51247 17.4438 9.14372ZM22.3062 12.3437C22.5063 12.1375 22.5 11.8125 22.3 11.625C22.1625 11.5 22.1125 11.5 16.2375 11.5H10.5228C10.3845 11.5 10.2521 11.5564 10.1563 11.6562C9.875 11.9312 10.0063 12.375 10.3875 12.4687C10.4688 12.4875 13.1563 12.4937 16.3563 12.4875L16.4009 12.4873C22.088 12.4687 22.1878 12.4684 22.3062 12.3437ZM22.3062 15.3437C22.5 15.1437 22.5 14.8125 22.3125 14.625C22.1875 14.5 22.1063 14.5 16.2313 14.5L10.4635 14.4999L10.4559 14.5C10.3367 14.5 10.223 14.5501 10.1426 14.6382L10.1375 14.6437C9.875 14.925 10.0125 15.375 10.3875 15.4687C10.4688 15.4875 13.1563 15.4937 16.3563 15.4875L16.4013 15.4873L16.4101 15.4872L16.4121 15.4872L17.1739 15.4847C20.8053 15.4726 21.8105 15.4663 22.1333 15.4161C22.2482 15.3983 22.2766 15.3749 22.3062 15.3437ZM22.2937 18.5123C22.4875 18.3123 22.4875 17.981 22.3 17.7935C22.175 17.6685 22.0938 17.6685 16.2188 17.6685H10.4509C10.3269 17.6685 10.2086 17.7207 10.125 17.8123C9.8625 18.0935 10 18.5435 10.375 18.6373C10.4563 18.656 13.1438 18.6623 16.3438 18.656L16.3888 18.6558L16.3976 18.6558L16.3996 18.6558L17.1614 18.6533C20.7928 18.6412 21.798 18.6348 22.1208 18.5847C22.2357 18.5668 22.2641 18.5434 22.2937 18.5123ZM22.2875 21.4957C22.4812 21.2957 22.4812 20.9644 22.2937 20.7769C22.1687 20.6519 22.0875 20.652 16.2125 20.652H10.4447C10.3206 20.652 10.2024 20.7041 10.1187 20.7957C9.85625 21.0769 9.99375 21.527 10.3687 21.6207C10.45 21.6395 13.1375 21.6457 16.3375 21.6395L16.3826 21.6392L16.3913 21.6392L16.3933 21.6392L17.1552 21.6367C20.7866 21.6246 21.7918 21.6183 22.1146 21.5681C22.2294 21.5503 22.2579 21.5269 22.2875 21.4957ZM22.3 24.624C22.4937 24.424 22.4937 24.0927 22.3062 23.9052C22.1812 23.7802 22.1 23.7802 16.225 23.7802H10.4572C10.3331 23.7802 10.2149 23.8324 10.1313 23.924C9.86875 24.2052 10.0063 24.6552 10.3813 24.749C10.4625 24.7677 13.15 24.774 16.35 24.7677L16.3951 24.7675L16.4038 24.7675L16.4058 24.7675L17.1677 24.765C20.7991 24.7529 21.8043 24.7466 22.1271 24.6964C22.2419 24.6785 22.2704 24.6551 22.3 24.624Z" fill="#323232" fill-opacity="0.5" />
            <path d="M22.0125 5.58752L22.0313 8.26877L22.1875 8.38752C22.3375 8.49377 22.4688 8.50002 24.2688 8.48752L26.1938 8.46877L24.1563 5.75002C23.0375 4.25627 22.0938 3.00627 22.0563 2.96877C22.0188 2.93127 22.0063 3.88752 22.0125 5.58752Z" fill="#323232" fill-opacity="0.5" />
          </svg>
          <InputFile type='file' />
        </InputFileLable>

        <InputFileText>
          Для загрузки файла нажмитена иконку или перетащите егов это поле
        </InputFileText>
      </FileContainer>
    </FileField>
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
  outline: none;
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
  bottom: -28px;
  right: 0;

  color: rgba(50, 50, 50, 0.5);
  font-family: 'Golos UI';
  font-weight: 400;
  font-size: 13px;
`

const TextErea = styled.textarea`
  width: 100%;
  resize: none;
  height: 100px;
  padding: 15px 25px;
  border: 1.5px solid rgba(50, 50, 50, 0.5);
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