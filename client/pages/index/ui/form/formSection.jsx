// Import global npm modules
import React, { useState } from 'react'
import styled from 'styled-components'

// Import local ui modules
import Container from '../container'
import Text from './text'
import Form from './form'

const FormSection = () => {
    const [step, setStep] = useState(2)

    return <Container>
        <Wrapper>
            <Text />
            <Form step={step} setStep={setStep} />
        </Wrapper>
    </Container>
    
}

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 120px;
    position: relative;
`

// Export default Container ui
export default FormSection
