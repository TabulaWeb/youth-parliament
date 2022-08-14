// Import global npm modules
import React from 'react'

// Import local ui modules
import Provider from './ui/provider'
import Global from './ui/global'

// Create Theme main
const Theme = ({ children }) => {

  // Return jsx
  return <Provider>
    <Global/>
    {children}
  </Provider>

}

// Export default Theme main
export default Theme