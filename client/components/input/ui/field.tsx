// Import global npm modules
import { FC } from 'react'
import styled from '@emotion/styled'

// Create Props interface
interface Props {
  name: string
  value: string
  onChange: any
}

// Create Field ui
const Field: FC<Props> = ({
  name,
  value,
  onChange
}) => {

  // Return tsx
  return <Main
    name={name}
    value={value}
    placeholder=' '
    onChange={onChange}
  />

}

// Create Main styled component
const Main = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0 ${({ theme }) => theme.padding}px 0 ${({ theme }) => theme.padding + 24}px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  font-family: ${({ theme }) => theme.inter};
  color: ${({ theme }) => theme.text};
  &:not(:placeholder-shown) ~ span {
    transform: translateY(-14px) scale(0.8);
  }
  &:valid ~ div {
    background-color: green;
  }
`

// Export default Field ui
export default Field