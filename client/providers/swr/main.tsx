// Import global npm modules
import { FC } from 'react'

// Import local ui modules
import Config from './ui/config'

// Create Prop interface
interface Props {
  children: JSX.Element
}

// Create Swr main
const Swr: FC<Props> = ({ children }) => {

  // Return tsx
  return <Config>
    {children}
  </Config>

}

// Export default Swr main
export default Swr