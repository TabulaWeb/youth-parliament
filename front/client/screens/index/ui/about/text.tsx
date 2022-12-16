// Import global npm modules
import React from 'react'
import styled from '@emotion/styled'

const Text = () => {

  return <>
    <Title>Молодёжный парламент</Title>
    <Pragraph>
      <PragraphText>24 декабря 2019 года ходе 38-й сессии шестого созыва Псковского областного Собрания депутаты утвердили персональный состав Молодёжного парламента при Псковском областном Собрании депутатов. В общественный консультативно-совещательный орган вошло 44 молодых активиста.</PragraphText>
      <PragraphText>Формирование молодёжного органа происходило по смешанной системе. В пятый по счёту состав Молодёжного парламента по партийным спискам вошли 15 представителей «Единой России», три человека от КПРФ, два представителя ЛДПР и по одному представителю от «Справедливой России» и Яблока.</PragraphText>
    </Pragraph>
  </>

}

const Title = styled.h2`
    font-weight: 400;
    font-size: 44px;
    line-height: 52px;
    color: #323232;
    margin-bottom: 60px;

    @media screen and (max-width: 991px) {
        font-size: clamp(24px, 7vw, 44px);
        line-height: clamp(28px, 7vw, 52px);
        margin-bottom: clamp(40px, 8vw, 60px);
    }
`

const Pragraph = styled.div`
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    gap: 16px 0;

    @media screen and (max-width: 991px) {
        margin-bottom: clamp(40px, 8vw, 60px);
    }
`

const PragraphText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #323232;
    margin-bottom: 0;
`

export default Text