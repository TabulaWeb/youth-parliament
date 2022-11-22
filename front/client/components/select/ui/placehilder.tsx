import { FC } from "react"
import styled from '@emotion/styled'

import ToolTip from "#/components/tool";

interface Props {
  tooltip?: any;
  placeholder?: any;
}

const Placeholder: FC<Props> = ({ placeholder, tooltip }) => {

  return <Main>
    {placeholder}
    <ToolTip text={tooltip} />
  </Main>

}

const Main = styled.p`
    width: 225px;
    display: flex;
    align-items: center;
    margin-bottom: 0;
`

export default Placeholder