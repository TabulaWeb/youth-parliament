import { FC } from 'react'

import Container from './ui/container'
import Tool from './ui/tool'

interface Props {
  text: string;
}

const ToolTip: FC<Props> = ({ text }) => {

  return <Container>
    <Tool text={text} />
  </Container>

}

export default ToolTip