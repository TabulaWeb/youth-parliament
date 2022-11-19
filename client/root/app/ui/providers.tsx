// Import global npm modules
import { FC } from 'react'

// Import client proveders modules
import Swr from '#/providers/swr'
import Theme from '#/providers/theme'

// Create Props interface
interface Props {
  children: JSX.Element
}

// Create Providers ui
const Providers: FC<Props> = ({ children }) => {

  // Return tsx
  return <Swr>
    <Theme>
      {children}
    </Theme>
  </Swr>

}

// Export default Providers ui
export default Providers