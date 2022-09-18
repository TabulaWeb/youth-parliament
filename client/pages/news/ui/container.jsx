// Import global npm modules
import React from 'react'
import styled from 'styled-components'

// Create Container ui
const Container = ({ children }) => {

  // Return jsx
  return <Main>
    <Wrapper>
      {children}
    </Wrapper>
  </Main>

}

// Create Main styled component
const Main = styled.section`
  position: relative;
`

// Create Wrapper styled component
const Wrapper = styled.div`
  max-width: 1200px;
  padding: 0 4%;
  margin: 0 auto;
  position: relative;
`

// Export default Container ui
export default Container