import React from "react";
import styled from "styled-components";

const Title = () => {
    return <Container>
        <TitleText>Запрос о разъяснении компетенции государственного органа</TitleText>

        <MetaData>
            <Date>4 авг</Date>
            <Seporator></Seporator>
            <Time>18:00</Time>
        </MetaData>
    </Container>
}

const Container = styled.div`
    margin-bottom: 40px;
`

const TitleText = styled.h1`
    /* font-family: 'Golos UI'; */
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 48px;
    color: #323232;
    margin-bottom: 28px;
`

const MetaData = styled.div`
    display: flex;
    align-items: center;
`

const Date = styled.p`
    /* font-family: 'Golos UI'; */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(50, 50, 50, 0.5);
    text-transform: uppercase;
    margin: 0;
`

const Time = styled.p`
    /* font-family: 'Golos UI'; */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(50, 50, 50, 0.5);
    margin: 0;
`

const Seporator = styled.div`
    position: relative;
    height: 10px;
    display: block;
    width: 1.1px;
    background-color: rgba(50, 50, 50, 0.16);
    margin: 0 4px;
`

export default Title
