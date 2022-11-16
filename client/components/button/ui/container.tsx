// Import global npm modules
import { FC } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

// Import local api modules
import framer from '../api/framer'

// Create Props interface
interface Props {
  layoutId?: string
  className?: string
  onClick?: () => void
  children: string
}

// Create Container ui
const Container: FC<Props> = ({
  layoutId,
  className,
  onClick,
  children
}) => {

  // Return jsx
  return <Main
    layoutId={layoutId}
    className={className}
    onClick={onClick}
    {...framer}
  >
    {children}
  </Main>

}

// Create Main styled component
const Main = styled(motion.button)`
  height: ${({ theme }) => theme.block}px;
  margin: 0;
  padding: 0 ${({ theme }) => theme.padding}px;
  border: none;
  border-radius: ${({ theme }) => theme.radius/2}px;
  background-color: ${({ theme }) => theme.primary};
  font-size: 12px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.inter};
  color: #ffffff;
  cursor: pointer;
`

// Export default Container ui
export default Container