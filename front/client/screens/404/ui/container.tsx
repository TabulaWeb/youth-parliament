import React, {FC} from "react";
import styled from "@emotion/styled";

interface Props {
  children: JSX.Element
}

const Container: FC<Props> = ({ children }) => {
  return <Main>{children}</Main>
}

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Container