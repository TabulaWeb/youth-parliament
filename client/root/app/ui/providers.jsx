// Import global npm modules
import React from 'react'

// Import client proveders modules
import Swr from '#/providers/swr'
import Theme from '#/providers/theme'

// Create Providers ui
const Providers = ({ children }) => {

  // Return jsx
  return <Swr>
    <Theme>
      {children}
    </Theme>
  </Swr>

}

// Export default Providers ui
export default Providers