// Import global npm modules
import { FC } from 'react'
import styled from '@emotion/styled'

// Create Props interface
interface Props {
  className?: string
  children: JSX.Element
}

// Create Container ui
const Container: FC<Props> = ({
  className,
  children
}) => {

  // Return jsx
  return <Main className={className}>
    {children}
  </Main>

}

// Create Main styled component
const Main = styled.div`
  overflow: hidden;
  position: relative;
  height: 120px;
  border-radius: ${({ theme }) => theme.radius}px;
`

// Export default Container ui
export default Container