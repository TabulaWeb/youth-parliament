// Import global npm modules
import { FC } from 'react'

import Shortcut from '#/layouts/shortcut'

// Import client proveders modules

// Create Props interface
interface Props {
  children: JSX.Element
}

// Create Providers ui
const Layout: FC<Props> = ({ children }) => {

  // Return tsx
  return <Shortcut>
    {children}
  </Shortcut>

}

// Export default Providers ui
export default Layout