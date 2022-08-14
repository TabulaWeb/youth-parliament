// Import global npm modules
import React, { Fragment } from 'react'

// Import local ui modules
import Container from './ui/container'
import Header from './ui/header'

// Create Shortcut main
const Shortcut = ({ children }) => {

  // Return jsx
  return <Container>
    <Header/>
    {children}
  </Container>

}

// Export default Shortcut main
export default Shortcut