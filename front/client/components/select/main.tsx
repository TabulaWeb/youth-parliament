import { FC } from 'react'

import Container from './ui/container'
import Placeholder from './ui/placehilder'
import Dropdown from './ui/dropdown'

interface Props {
  answers: any;
  tooltip?: any;
  placeholder?: any;
}

const Select: FC<Props> = ({
  answers,
  tooltip,
  placeholder
}) => {

  return <Container>
    <Placeholder tooltip={tooltip} placeholder={placeholder} />
    <Dropdown answers={answers} />
  </Container>

}

export default Select