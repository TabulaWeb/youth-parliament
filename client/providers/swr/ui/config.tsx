// Import global npm modules
import { FC } from 'react'
import { SWRConfig } from 'swr'

// Import local api modules
import value from '../api/value'

// Create Props interface
interface Props {
  children: any
}

// Create Config ui
const Config: FC<Props> = ({ children }) => {

  // Return tsx
  return <SWRConfig value={value}>
    {children}
  </SWRConfig>

}

// Export default Config ui
export default Config