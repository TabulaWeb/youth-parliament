import { FC } from 'react'

import Container from './ui/container'
import Placeholder from './ui/placehilder'
import Dropdown from './ui/dropdown'

interface Props {
  answers: any;
  tooltip?: any;
  placeholder?: any;
  onChange: any
}

const Select: FC<Props> = ({
  answers,
  tooltip,
  placeholder,
  onChange
}) => {

  return <Container>
    <Placeholder tooltip={tooltip} placeholder={placeholder} />
    <Dropdown answers={answers} onChange={onChange} />
  </Container>

}

export default Select