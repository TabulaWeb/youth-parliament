// Import global npm modules
import { FC } from 'react'
import styled from '@emotion/styled'

// Create Props interface
interface Props {
  placeholder: string
}

// Create Field ui
const Field: FC<Props> = ({ placeholder }) => {

  // Return jsx
  return <Main placeholder={placeholder}/>

}

// Create Main styled component
const Main = styled.textarea`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 10px ${({ theme }) => theme.padding}px;
  border: none;
  background-color: ${({ theme }) => theme.background};
  resize: none;
`

// Export default Field ui
export default Field