// Import global npm modules
import { FC } from 'react'
import styled from '@emotion/styled'

// Create Props interface
interface Props {
  children: JSX.Element[]
}

// Create Container ui
const Container: FC<Props> = ({ children }) => {

  // Return jsx
  return <Main>
    {children}
  </Main>

}

// Create Main styled component
const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 60px;
`

// Export default Container ui
export default Container