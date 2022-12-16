import React from 'react'
import styled from '@emotion/styled'
import parse from 'html-react-parser'

const Text = ({ text }: any) => {

  return <Container>
    {parse(text)}
  </Container>

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;

    & p{
        /* font-family: 'Golos UI'; */
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #323232;
    }
`

export default Text
