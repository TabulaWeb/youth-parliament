// Import global npm modules
import React from 'react'
import { SWRConfig } from 'swr'

// Import local api modules
import value from '../api/value'

// Create Config ui
const Config = ({ children }) => {

  // Return jsx
  return <SWRConfig value={value}>
    {children}
  </SWRConfig>

}

// Export default Config ui
export default Config