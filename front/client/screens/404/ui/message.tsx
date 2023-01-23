import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Message = () => {
  return <Main>
    <Text>404</Text>
    <LinkHome href='/'>вернутсья на главную</LinkHome>
  </Main>
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.p`
  margin: 0 0 30px 0;
  font-size: 45px;
  text-align: center;
  font-weight: bold;
`

const LinkHome = styled(Link)`
  font-size: 16px;
  color: #2F4395;
`

export default Message