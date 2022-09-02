// Import global npm modules
import React from 'react'
import styled from 'styled-components'

// Import local ui modules
import Container from '../container'
import Text from './text'
import Appeals from './appeals'
import AppealsFilter from './appealsFilter'

const ApplicationsSection = () => {
    return <Container>
        <Wrapper>
            <Text />

            <Content>
                <Appeals />
                <AppealsFilter />
            </Content>
        </Wrapper>
    </Container>
}

const Wrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 120px;
    position: relative;
`

const Content = styled.div`
    display: flex;
    gap: 0 40px;
    justify-content: space-between;
`

// Export default Container ui
export default ApplicationsSection
