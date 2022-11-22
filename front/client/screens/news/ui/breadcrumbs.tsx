import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const Breadctumbs = () => {

  return <Container>
    <Link href='/'><TextLink>Главная <SpanText>/</SpanText></TextLink></Link>
    <Text>Новости <SpanText>/</SpanText></Text>
  </Container>

}

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-top: 116px;
    margin-bottom: 40px;
`

const TextLink = styled.p`
    /* font-family: 'Golos UI'; */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(50, 50, 50, 0.5);
    cursor: pointer;
    transition: .4s;

    &:hover {
        color: rgba(50, 50, 50, 1);
        transition: .4s;
    }
`

const Text = styled.p`
    /* font-family: 'Golos UI'; */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(50, 50, 50, 0.5);
    margin-bottom: 0;
    margin-left: 12px;
    cursor: default;
`

const SpanText = styled.span`
    margin-left: 12px;
`

export default Breadctumbs
