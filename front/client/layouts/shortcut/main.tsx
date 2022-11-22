// Import global npm modules
import React, { FC, Fragment } from 'react'

// Import local ui modules
import Container from './ui/container'
import Header from './ui/header'

interface Props {
  children:any
}

// Create Shortcut main
const Shortcut : FC<Props> = ({ children }) => {

  // Return jsx
  return <Container>
    <Header/>
    {children}
  </Container>

}

// Export default Shortcut main
export default Shortcut