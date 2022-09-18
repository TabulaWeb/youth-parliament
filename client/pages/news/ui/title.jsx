import React from "react";
import styled from "styled-components";

const Title = () => {
    return <Container>
        <TitleText>Активная форумная кампания проходит по всей стране ✅</TitleText>

        <MetaData>
            <Tag>#МолодежныйПарламент</Tag>

            <Date>
                <DateText>4 авг</DateText>
                <Seporator></Seporator>
                <TimeText>18:00</TimeText>
            </Date>
        </MetaData>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px 0;
    margin-bottom: 40px;
`

const TitleText = styled.h1`
    /* font-family: 'Golos UI'; */
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 48px;
    color: #323232;
    margin: 0;
`

const MetaData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Tag = styled.p`
    /* font-family: 'Golos UI'; */
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: rgba(50, 50, 50, 0.5);
    text-transform: uppercase;
    margin-bottom: 0;
`

const Date =  styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`

const DateText = styled.p`
    /* font-family: 'Golos UI'; */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(50, 50, 50, 0.5);
    margin-bottom: 0;
`

const Seporator = styled.div`
    width: 1.1px;
    height: 10px;
    background-color: rgba(50, 50, 50, 0.16);
`

const TimeText = styled.p`
    /* font-family: 'Golos UI'; */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(50, 50, 50, 0.5);
    margin-bottom: 0;
`

export default Title
