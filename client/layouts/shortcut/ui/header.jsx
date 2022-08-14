// Import global npm modules
import React from 'react'
import styled from 'styled-components'

// Create Header ui
const Header = () => {

  // Return jsx
  return <Main>
    <h1>Header</h1>
  </Main>

}

// Create Main styled component
const Main = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 15px 0 ${({ theme }) => theme.margin}px 0;
`

// Create Logo styled component
const Logo = styled.img`
  height: 20px;
`

// Export default Header ui
export default Header