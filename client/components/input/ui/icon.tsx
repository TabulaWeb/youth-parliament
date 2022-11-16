// Import global npm modules
import { FC } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Create Props interface
interface Props {
  icon: any
}

// Create Icon ui
const Icon: FC<Props> = ({ icon }) => {

  // Return tsx
  return <Main icon={icon}/>

}

// Create Main styled component
const Main = styled(FontAwesomeIcon)`
  height: 14px;
  pointer-events: none;
`

// Export default Icon ui
export default Icon