// Import global npm modules
import React from 'react'
import styled from 'styled-components'

// ...
const NewsItemXs = ({ pageIndex }) => {
    return <Container>
        <OtherNews>
            <OtherNewsItem>
                <OtherNewsImage src='/images/otherPhoto.png' />
                <OtherContent>
                    <OtherNewsMeta>
                        <Tag>#МолодежныйПарламент</Tag>
                        <Data>4 авг</Data>
                    </OtherNewsMeta>
                    <OtherNewsTitle>Будущее выборов 🗳</OtherNewsTitle>
                    <OtherNewsText>Член Молодежного парламента Алексей Жуковский разработал проект "Сад памяти героям-подпольщикам", который был поддержан Росмолодёжь.</OtherNewsText>
                </OtherContent>
            </OtherNewsItem>

            <OtherNewsItem>
                <OtherNewsImage src='/images/otherPhoto.png' />
                <OtherContent>
                    <OtherNewsMeta>
                        <Tag>#МолодежныйПарламент</Tag>
                        <Data>4 авг</Data>
                    </OtherNewsMeta>
                    <OtherNewsTitle>Будущее выборов 🗳</OtherNewsTitle>
                    <OtherNewsText>Член Молодежного парламента Алексей Жуковский разработал проект "Сад памяти героям-подпольщикам", который был поддержан Росмолодёжь.</OtherNewsText>
                </OtherContent>
            </OtherNewsItem>

            <OtherNewsItem>
                <OtherNewsImage src='/images/otherPhoto.png' />
                <OtherContent>
                    <OtherNewsMeta>
                        <Tag>#МолодежныйПарламент</Tag>
                        <Data>4 авг</Data>
                    </OtherNewsMeta>
                    <OtherNewsTitle>Будущее выборов 🗳</OtherNewsTitle>
                    <OtherNewsText>Член Молодежного парламента Алексей Жуковский разработал проект "Сад памяти героям-подпольщикам", который был поддержан Росмолодёжь.</OtherNewsText>
                </OtherContent>
            </OtherNewsItem>
        </OtherNews>
    </Container>
}

// ...
const Container = styled.div`
    display: none;
    margin-bottom: 40px;

    @media screen and (max-width: 991px) {
        display: flex;
    }
`

// ...
const OtherNews = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-between;

    @media screen and (max-width: 550px){
        flex-wrap: nowrap;
        flex-direction: column;
    }
`

// ...
const Tag = styled.p`
    color: rgba(50, 50, 50, 0.5);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0;
    text-transform: uppercase;
`

// ...
const Data = styled.p`
    color: rgba(50, 50, 50, 0.5);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0;
`

// ...
const OtherNewsItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0 24px;
    max-width: 328px;
    width: 100%;


    @media screen and (max-width: 756px){
        max-width: none;
        width: 100%;
    }
`

// ...
const OtherNewsImage = styled.img`
    width: 100%;
    height: 328px;
    object-fit: cover;
    border-radius: 16px;
    margin-bottom: 18px;
`

// ...
const OtherContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
`

// ...
const OtherNewsMeta = styled.div`
    display: flex;
    justify-content: space-between;
`

// ...
const OtherNewsTitle = styled.p`
    margin-bottom: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #323232;
`

// ...
const OtherNewsText = styled.p`
    margin-bottom: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #323232;
`

// ...
export default NewsItemXs;