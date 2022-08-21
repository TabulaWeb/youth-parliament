// Import global npm modules
import React from 'react'
import styled from 'styled-components'

// Import local ui modules
import Container from '../container'
import Slider from './slider'
import Text from './text'

const AboutSection = () => {
    return <Container>
        <Wrapper>
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

// Export default Container ui
export default AboutSection
