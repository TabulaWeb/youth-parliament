// Import global npm modules
import React, { useState } from 'react'
import styled from '@emotion/styled'

// Import local ui modules
import Text from './text'
import Form from './form'

import Container from '../container'

const FormSection = () => {

  const [
    step,
    setStep
  ] = useState(1)

  return <Container>

    <StainImageSeven>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="704" height="800" fill="none"><path fill="#C1FFE5" d="M363 275c0 31 73 158 109 185 42 32 196 110 227-124C739 34 511 60 441 92c-63 29-78 155-78 183Z"/><path fill="#9FC4FC" d="M247 779c160-101 216-504 136-633C325 53 61-9-123 235c-166 219-73 325-73 325 0 1 281 322 443 219Z"/><path fill="#A7FFDA" d="M337 449c97 37 222-78 243-115 18-33 64-165-51-266-119-104-286-85-302 34-19 139 19 313 110 347Z"/><path fill="#DBE9FF" d="M467 433c-24-35-151-150-217-158-56-7-291-7-187 272 133 356 368 193 427 117 53-70-4-204-23-231Z"/></svg> */}
    </StainImageSeven>

    <Wrapper id={'form'}>
      <Text />
      <Form step={step} setStep={setStep} />
    </Wrapper>

    <StainImageEight>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="576" height="839" fill="none"><path fill="#A9AEF4" d="M493 249c-133-96-362-20-443 52-76 76-97 422 168 497 362 101 467-13 515-72 112-138-92-372-240-477Z"/><path fill="#FFB6FB" d="M620 236C628-39 333-5 279 10c-262 90-123 383-89 412 41 35 421 120 430-186Z"/><path fill="#E9D8F6" d="M302 150c-111-36-279 14-284 76-4 69 23 268 200 299 224 37 302-9 261-113-42-103-38-217-177-262Z"/></svg> */}
    </StainImageEight>
  </Container>
    
}

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 120px;
    position: relative;
`

const StainImageSeven = styled.div`
  filter: blur(50px);
  opacity: 0.5;
  position: absolute;
  left: 0;
  top: 100px;
  z-index: -1;
`

const StainImageEight = styled.div`
  filter: blur(50px);
    opacity: 0.5;
    position: absolute;
    right: 0;
    bottom: -50px;
    z-index: -1;
`

// Export default Container ui
export default FormSection
