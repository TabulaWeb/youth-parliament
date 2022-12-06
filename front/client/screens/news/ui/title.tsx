import React from "react";
import styled from "@emotion/styled";

const Title = ({title, date, tag}: any) => {

    const renderDate = (date: any) => {
        const dateArr = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
        let time = date.split('T')[1]
        let month = date.split('T')[0]
    
        console.log()
    
        return `${month.split('-')[2].includes('0') ? month.split('-')[2].substr(1) : month.split('-')[2]} ${month.split('-')[1].includes('0') ? dateArr[month.split('-')[1].substr(1) - 1] : dateArr[month.split('-')[1] - 1]} ${time.substr(0, 5)}`
      }

    return <Container>
        <TitleText>{title}</TitleText>

        <MetaData>
            <Tag>{tag}</Tag>

            <Date>
                {renderDate(date)}
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
