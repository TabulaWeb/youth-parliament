import React from 'react'
import styled from 'styled-components'

const StepReady = ({ step }) => {
    return <Container step={step}>

    </Container>
}

const Container = styled.div`
    transition: .8s;
    opacity: ${({ step }) => step == 1 ? '1' : '0'};
    position: ${({ step }) => step == 1 ? 'static' : 'absolute'};
    pointer-events: ${({ step }) => step == 1 ? 'auto' : 'none'};
`

export default StepReady