import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Tips = () => {
    return <Container>
        <MainNews>
            <MainNewsImage src='/images/photo.png' width='100%' height='316' />
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
        <MainNews>
            <MainNewsImage src='/images/photo.png' width='100%' height='316' />
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
        <MainNews>
            <MainNewsImage src='/images/photo.png' width='100%' height='316' />
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
    </Container>
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0 40px;
    margin-bottom: 100px;
`

const MainNews = styled.div`
    width: 100%;
`

// ...
const MainNewsImage = styled(Image)`
    width: 100%;
    border-radius: 16px;
    margin-bottom: 18px;
    object-fit: cover;
`

// ...
const MainNewsMeta = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
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

export default Tips
