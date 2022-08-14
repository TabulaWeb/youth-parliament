// Import global npm modules
import React from 'react'

// Import local ui modules
import Config from './ui/config'

// Create Swr main
const Swr = ({ children }) => {

  // Return jsx
  return <Config>
    {children}
  </Config>

}

// Export default Swr main
export default Swr