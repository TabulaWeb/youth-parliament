// Import global npm modules
import React from 'react'
import { Html, Head } from 'next/document'

// Create Container ui
const Container = ({ children }) => {

  // Return jsx
  return <Html lang='ru'>
    <Head/>
    {children}
  </Html>

}

// Export default Container ui
export default Container