// Import global npm modules
import React from 'react'
import styled from 'styled-components'

// ...
const NewsItem = ({ pageIndex }) => {
    return <Container>
        <MainNews>
            <MainNewsImage src='/images/photo.png' />
            <MainNewsMeta>
                <Tag>#МолодежныйПарламент</Tag>
                <Data>4 авг <span></span> 18:00</Data>
            </MainNewsMeta>
            <MainNewsTitle>Активная форумная кампания проходит по всей стране  ✅</MainNewsTitle>
            <MainNewsText>
                <p>Тысячи общественников и активистов стараются попасть на самые топовые форумы России. В настоящий момент заместитель председателя МП Владимир Алексеев принимает участиево Всероссийском молодёжном форуме «Территория смыслов».</p>
                <p>Смена профильная - «политика». Именно на ней собрались коллеги с парламентов других регионов.</p>
            </MainNewsText>
        </MainNews>
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
    display: flex;
    gap: 0 40px;
    margin-bottom: 40px;
`

// ...
const MainNews = styled.div`
    width: 100%;
`

// ...
const OtherNews = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px 0;
`

// ...
const MainNewsImage = styled.img`
    width: 100%;
    border-radius: 16px;
    margin-bottom: 24px;
    height: 316px;
`

// ...
const MainNewsMeta = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
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
const MainNewsTitle = styled.p`
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #323232;
`

// ...
const MainNewsText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;

    & p {
        margin-bottom: 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #323232;
    }
`

// ...
const OtherNewsItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0 24px;
`

// ...
const OtherNewsImage = styled.img`
    width: 184px;
    height: 184px;
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
export default NewsItem;