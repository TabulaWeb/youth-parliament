// Import global npm modules
import { FC } from 'react'
import styled from '@emotion/styled'

// Create Props interface
interface Props {
  placeholder: String
}

// Create Placeholder ui
const Placeholder: FC<Props> = ({ placeholder }) => {

  // Return tsx
  return <Main>
    {placeholder}
  </Main>

}

// Create Main styled component
const Main = styled.span`
  color: ${({ theme }) => theme.light};
  transition: transform 200ms ease;
  transform-origin: left;
`

// Export default Placeholder ui
export default Placeholder