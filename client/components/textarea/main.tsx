// Import global npm modules
import { FC } from 'react'

// Import local ui modules
import Container from './ui/container'
import Field from './ui/field'

// Create Props interface
interface Props {
  className?: string
  placeholder: string
}

// Create Textarea main
const Textarea: FC<Props> = ({
  className,
  placeholder
}) => {

  // Return jsx
  return <Container className={className}>
    <Field placeholder={placeholder}/>
  </Container>

}

// Export default Textarea main
export default Textarea