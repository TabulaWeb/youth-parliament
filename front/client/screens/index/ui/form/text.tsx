// Import global npm modules
import React from 'react'
import styled from '@emotion/styled'
 
const Text = () => {

  return <Title>Отправить обращение</Title>

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

export default Text