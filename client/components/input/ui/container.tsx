// Import global npm modules
import { FC } from 'react'
import styled from '@emotion/styled'

// Create Props interface
interface Props {
  className?: string
  children: JSX.Element[]
}

// Create Container ui
const Container: FC<Props> = ({
  className,
  children
}) => {

  // Return tsx
  return <Main className={className}>
    {children}
  </Main>

}

// Create Main styled component
const Main = styled.div`
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 14px 1fr;
  grid-gap: ${({ theme }) => theme.padding/2}px;
  align-items: center;
  height: ${({ theme }) => theme.block}px;
  padding: 0 ${({ theme }) => theme.padding}px;
  border-radius: ${({ theme }) => theme.radius/2}px;
  background-color: ${({ theme }) => theme.background};
`

// Export default Container ui
export default Container