// Import global npm modules
import React from 'react'
import styled from '@emotion/styled'

// Create Text ui
const Text = ({ title, subtitle }:any) => {

  // Return jsx
  return <Main>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Main>

}

// Create Main styled component
const Main = styled.div`
  position: relative;
  max-width: 750px;
  width: 80%;
  text-align: center;
  margin-top: 60px;
`

// Create Title styled component
const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 28px;
    line-height: 58px;
    font-weight: 400;

    @media screen and (max-width: 991px){
      font-size: clamp(26px, 7vw, 48px);
      line-height: clamp(32px, 7vw, 58px);
      margin-bottom: clamp(24px, 8vw, 28px);
    }
`

// Create Subtitle styled component
const Subtitle = styled.p`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 60px;

    @media screen and (max-width: 991px){
      margin-bottom: clamp(40px, 8vw, 60px);
    }
`

export default Text