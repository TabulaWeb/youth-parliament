// Import global npm modules
import React from 'react'
import styled from 'styled-components'

// Create Container ui
const Container = ({ children }) => {

  // Return jsx
  return <Main>
    {children}
  </Main>

}

// Create Main styled component
const Main = styled.section`
  margin: ${({ theme }) => theme.margin}px 0;
`

// Export default Container ui
export default Container