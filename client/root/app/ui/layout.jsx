// Import global npm modules
import React from 'react'

// Import client layouts modules
import Shortcut from '#/layouts/shortcut'

// Create Layout ui
const Layout = ({ children }) => {

  // Return jsx
  return <Shortcut>
    {children}
  </Shortcut>

}

// Export default Layout ui
export default Layout