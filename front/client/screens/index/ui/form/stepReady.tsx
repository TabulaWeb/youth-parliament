import React from 'react'
import styled from '@emotion/styled'

const StepReady = ({
  step,
  unicNumber
}: any) => {

  return <Container step={step}>
    <Code>
      <CodeContent>
        <CodeText>
          <Title>{unicNumber}</Title>
          <SubTitle>Уникальный номер вашего обращения</SubTitle>
        </CodeText>
      </CodeContent>
    </Code>

    <SuccessTitle>
      <Icon>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_68_460)">
            <path d="M2.52634 0.109182C1.56931 0.360744 0.781813 1.00606 0.355251 1.88653C0.00525052 2.61387 0.0271255 1.77715 0.0271255 14.0545V25.2928L0.174782 25.692C0.552126 26.7365 1.32869 27.5021 2.35134 27.8521L2.70681 27.9725L9.1326 27.9889C15.2849 27.9998 15.5638 27.9998 15.7443 27.9014C16.2146 27.6498 16.2584 26.9771 15.8263 26.6381L15.6787 26.5232H9.57556C5.87322 26.5232 3.32478 26.5014 3.10056 26.4686C2.89822 26.4357 2.62478 26.3592 2.499 26.299C2.16541 26.1295 1.77713 25.6975 1.64041 25.342C1.53103 25.0412 1.53103 25.0303 1.54197 13.9287L1.55838 2.81621L1.70603 2.53184C1.89197 2.18184 2.18181 1.89199 2.54275 1.70059L2.81619 1.5584L10.9482 1.54199L19.0803 1.53106L19.3974 1.6459C19.7967 1.79903 20.2342 2.20371 20.4037 2.58653L20.5349 2.8709L20.5623 9.24199C20.5896 15.2139 20.5951 15.6295 20.6881 15.7662C20.9888 16.2311 21.6724 16.2311 21.9459 15.7662C22.0334 15.6076 22.0388 15.2303 22.0388 9.20371C22.0388 2.12715 22.0607 2.54824 21.6779 1.79356C21.399 1.24121 20.7865 0.634182 20.2342 0.360744C19.4576 -0.0165977 19.9334 -0.000192642 10.992 0.00527573C3.22634 0.00527573 2.90916 0.0107441 2.52634 0.109182Z" fill="#55965B" />
            <path d="M4.22166 6.67174C3.76229 6.95611 3.78963 7.63424 4.27635 7.92955C4.45135 8.03892 4.56619 8.03892 10.9263 8.03892C17.9701 8.03892 17.642 8.05533 17.8662 7.73267C18.1013 7.39361 18.0521 7.00533 17.7404 6.73189L17.549 6.56236H10.9756C4.47869 6.56236 4.40213 6.56236 4.22166 6.67174Z" fill="#55965B" />
            <path d="M4.40234 12.4687C4.12891 12.6055 3.99219 12.8242 3.99219 13.125C3.99219 13.4258 4.12891 13.65 4.40234 13.7812C4.62109 13.8851 4.75234 13.8906 8.19219 13.8906C12.0531 13.8906 11.9711 13.8961 12.25 13.5898C12.3648 13.4695 12.3867 13.3875 12.3867 13.125C12.3867 12.8625 12.3648 12.7805 12.25 12.6601C11.9711 12.3539 12.0586 12.3594 8.19219 12.3594C4.73594 12.3594 4.61562 12.3648 4.40234 12.4687Z" fill="#55965B" />
            <path d="M26.7914 16.067C26.7367 16.0889 25.0359 17.7514 22.9961 19.7639L19.2992 23.4279L17.2922 21.4264C16.1875 20.3272 15.2031 19.3811 15.0992 19.3318C14.6234 19.0912 14 19.4303 13.907 19.9772C13.8359 20.4201 13.8851 20.4803 16.4445 23.0342C18.5062 25.085 18.8726 25.4295 19.075 25.4897C19.5836 25.6373 19.3648 25.8232 23.8273 21.3662C27.4476 17.7404 27.8906 17.2811 27.9453 17.0732C28.0273 16.7615 27.9453 16.4772 27.6992 16.242C27.5351 16.0834 27.4695 16.0561 27.1961 16.0397C27.0211 16.0342 26.8406 16.0451 26.7914 16.067Z" fill="#55965B" />
          </g>
          <defs>
            <clipPath id="clip0_68_460">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Icon>
      <Text>Ваше обращение отправлено</Text>
    </SuccessTitle>

    <SuccessText>
      <SuccessSubText>После проверки модератором оно будет зарегистрировано и отправлено для рассмотрения ответственному лицу.</SuccessSubText>
      <SuccessSubText>Напоминаем, что в соответствии с Федеральным законом от 02.05.2006 г. №59-ФЗ «О порядке рассмотрения обращений граждан Российской Федерации» письменное обращение, поступившее в государственный орган, орган местного самоуправления или должностному лицу в соответствии с их компетенцией, рассматривается в течение 30 дней со дня регистрации.</SuccessSubText>
    </SuccessText>
  </Container>

}

const Container = styled.div<any>`
    opacity: ${({ step }) => step == 4 ? '1' : '0'};
    position: ${({ step }) => step == 4 ? 'static' : 'absolute'};
    pointer-events: ${({ step }) => step == 4 ? 'auto' : 'none'};
`

const Code = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0 40px;
    justify-content: center;
    margin-bottom: 66px;

    @media screen and (max-width: 991px) {
        flex-direction: column;
    }
`

const CodeContent = styled.div`
    padding: 40px;
    background-color: rgba(233, 231, 228, 0.5);
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    gap: 0 40px;

    @media screen and (max-width: 991px) {
        padding: 0;
    }
`

const CodeText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px 0;
    max-width: 145px;
`

const Title = styled.p`
    font-weight: 400;
    font-size: 44px;
    line-height: 48px;
    color: #323232;
    margin: 0;
    text-align: center;
`

const SubTitle = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    color: #323232;
    margin: 0;
    text-align: center;
`

const CodeSeparation = styled.div`
    width: 1px;
    background-color: #F9F6F3;
`

const SuccessTitle = styled.div`
    display: flex;
    gap: 0 12px;
    margin-bottom: 30px;
    align-items: center;
`

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #323232;
    margin: 0;
`

const SuccessText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
`

const SuccessSubText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #323232;
    margin: 0;
`

export default StepReady