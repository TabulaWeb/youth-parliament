// Import global npm modules
import { FC } from 'react'

// Import local ui modules
import Provider from './ui/provider'
import Styles from './ui/styles'

// Create Props interface
interface Props {
  children: JSX.Element
}

// Create Theme main
const Theme: FC<Props> = ({ children }) => {

  // Return jsx
  return <>
    <Styles/>
    {children}
  </>

}

// Export default Theme main
export default Theme