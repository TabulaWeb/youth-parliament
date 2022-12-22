// Import global npm modules
import React from 'react'
import styled from '@emotion/styled'

// Import local ui modules
import Slider from './slider'
import Text from './text'

import Container from '../container'

const AboutSection = () => {

  return <Container>

    <StainImageFour>
      <Circle className='green'></Circle>
      <Circle className='perple'></Circle>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="374" height="703" fill="none"><path fill="#9FC4FC" d="M-308 560c85 119 422 194 506 102 63-69 110-187-73-346-39-35-119-32-216-5-116 32-303 127-217 249Z"/><path fill="#A7FFDA" d="M-19 273c-68 54-58 107-41 166 11 37 32 52 44 55 89 16 259 39 322-79 86-162 100-249-21-249-120-1-227 46-304 107Z"/><path fill="#E1FFF2" d="M257 272c14-56-10-136-38-191-9-18-35-43-54-51C89-4-55-54-109 169c-88 367 152 350 233 311 64-32 122-160 133-208Z"/></svg> */}
    </StainImageFour>

    <Wrapper id={'parliament'}>
      <Text />
      <Slider />
    </Wrapper>
  </Container>

}

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 120px;
    position: relative;
`

const StainImageFour = styled.div`
  filter: blur(50px);
    opacity: 0.5;
    position: absolute;
    left: -100px;
    bottom: 100px;
    z-index: -1;

  & .perple {
    height: 200px;
    width: 300px;
    margin-bottom: -80px;
    background-color: #9FC4FC;
    border-radius: 60px;
  }

  & .green {
    height: 300px;
    width: 300px;
    background-color: #A7FFDA;
    border-radius: 60px;
  }
`

const Circle = styled.div``

// Export default Container ui
export default AboutSection
