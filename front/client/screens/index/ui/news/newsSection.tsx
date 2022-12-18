// Import global npm modules
import React from 'react'
import styled from '@emotion/styled'

// Import local ui modules
import News from './news'

import Container from '../container'

const NewsSection = () => {

  return <Container>

    <StainImageSix>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="974" height="1098" fill="none"><path fill="#A7FFDA" d="M516 689c46-28 133-198 133-281 0-103-44-464-398-401-448 81-183 529-69 654 102 112 285 58 334 28Z"/><path fill="#E0FDF4" d="M47 427c10 65 41 193 101 224 70 37 276 191 519-123C893 238 376 36 251 70 149 98 80 251 58 309c-6 14-13 103-11 118Z"/><path fill="#F7DDFF" d="M273 652c17 188 349 319 497 235l3-1c328-263 159-532 141-555-15-20-151-139-273-66-194 116-386 199-368 387Z"/><path fill="#EBD9FF" d="M185 675c16 204 377 469 543 415 183-60 318-265 174-549-128-252-119-143-263-105-217 56-469 35-454 239Z"/></svg> */}
    </StainImageSix>

    <Wrapper id={'news'}>
      <News />
    </Wrapper>
  </Container>

}

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 120px;
    position: relative;
`

const StainImageSix = styled.div`
filter: blur(50px);
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: -150px;
    z-index: -1;
`

// Export default Container ui
export default NewsSection
