import React from "react";
import styled from "@emotion/styled";

const Title = ({title, date}: any) => {

    const renderDate = (date) => {
        const dateArr = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
        let time = date.split('T')[1]
        let month = date.split('T')[0]

        return `${month.split('-')[2].includes('0') ? month.split('-')[2].substr(1) : month.split('-')[2]} ${month.split('-')[1].includes('0') ? dateArr[month.split('-')[1].substr(1) - 1] : dateArr[month.split('-')[1] - 1]} ${time.substr(0, 5)}`
    }

    return <Container>
        <TitleText>{title}</TitleText>

        <MetaData>
            <Date>{renderDate(date).split(' ')[0]} {renderDate(date).split(' ')[1]}</Date>
            <Seporator></Seporator>
            <Time>{renderDate(date).split(' ')[2]}</Time>
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
    margin-top: 0;
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
