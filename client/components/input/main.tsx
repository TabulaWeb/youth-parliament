// Import global npm modules
import { FC } from 'react'

// Import local ui modules
import Container from './ui/container'
import Field from './ui/field'
import Icon from './ui/icon'
import Placeholder from './ui/placeholder'

// Create Props interface
interface Props {
  className?: string
  name: string
  value: string
  onChange: Function
  icon: any
  placeholder: string
}

// Create Input main
const Input: FC<Props> = ({
  className,
  name,
  value,
  onChange,
  icon,
  placeholder
}) => {

  // Return tsx
  return <Container className={className}>
    <Field
      name={name}
      value={value}
      onChange={onChange}
    />
    <Icon icon={icon}/>
    <Placeholder placeholder={placeholder}/>
  </Container>

}

// Export default Input main
export default Input