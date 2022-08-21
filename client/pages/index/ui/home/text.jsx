// Import global npm modules
import React from 'react'
import styled from 'styled-components'

// Create Text ui
const Text = ({ title, subtitle }) => {

  // Return jsx
  return <Main>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Main>

}

// Create Main styled component
const Main = styled.div`
  position: relative;
  max-width: 700px;
  text-align: center;
  margin-top: 60px;
`

// Create Title styled component
const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 28px;
    line-height: 58px;
`

// Create Subtitle styled component
const Subtitle = styled.p`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 60px;
`

export default Text