import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'

const Tips = ({news, id}: any) => {
  
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max) != id ? Math.floor(Math.random() * max) : getRandomInt(max)
  }

  const renderDate = (date: any) => {
    const dateArr = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
    let time = date.split('T')[1]
    let month = date.split('T')[0]

    return `${month.split('-')[2].includes('0') ? month.split('-')[2].substr(1) : month.split('-')[2]} ${month.split('-')[1].includes('0') ? dateArr[month.split('-')[1].substr(1) - 1] : dateArr[month.split('-')[1] - 1]} ${time.substr(0, 5)}`
  }

  return <Container>
    <MainNews href={`/news/${news[getRandomInt(news.length-1)].id}`}>
      <MainNewsImage src={`http://localhost:1337${news[getRandomInt(news.length-1)].attributes.image.data.attributes.url}`} width='100' height='316' alt='news image' />
      <MainNewsMeta>
        <Tag>{news[getRandomInt(news.length-1)].attributes.tag}</Tag>
        <Data>
          {renderDate(news[getRandomInt(news.length-1)].attributes.createdAt)}
        </Data>
      </MainNewsMeta>
      <MainNewsTitle>{news[getRandomInt(news.length-1)].attributes.title}</MainNewsTitle>
      <MainNewsText>
        {parse(news[getRandomInt(news.length-1)].attributes.text)}
      </MainNewsText>
    </MainNews>
    <MainNews href={`/news/${news[getRandomInt(news.length-1)].id}`}>
      <MainNewsImage src={`http://localhost:1337${news[getRandomInt(news.length-1)].attributes.image.data.attributes.url}`} width='100' height='316' alt='news image' />
      <MainNewsMeta>
        <Tag>{news[getRandomInt(news.length-1)].attributes.tag}</Tag>
        <Data>
          {renderDate(news[getRandomInt(news.length-1)].attributes.createdAt)}
        </Data>
      </MainNewsMeta>
      <MainNewsTitle>{news[getRandomInt(news.length-1)].attributes.title}</MainNewsTitle>
      <MainNewsText>
        {parse(news[getRandomInt(news.length-1)].attributes.text)}
      </MainNewsText>
    </MainNews>
    <MainNews href={`/news/${news[getRandomInt(news.length-1)].id}`}>
      <MainNewsImage src={`http://localhost:1337${news[getRandomInt(news.length-1)].attributes.image.data.attributes.url}`} width='100' height='316' alt='news image' />
      <MainNewsMeta>
        <Tag>{news[getRandomInt(news.length-1)].attributes.tag}</Tag>
        <Data>
          {renderDate(news[getRandomInt(news.length-1)].attributes.createdAt)}
        </Data>
      </MainNewsMeta>
      <MainNewsTitle>{news[getRandomInt(news.length-1)].attributes.title}</MainNewsTitle>
      <MainNewsText>
        {parse(news[getRandomInt(news.length-1)].attributes.text)}
      </MainNewsText>
    </MainNews>
  </Container>

}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0 40px;
    margin-bottom: 100px;

    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px 40px;
    }

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
`

const MainNews = styled(Link)`
    width: 100%;
`

// ...
const MainNewsImage = styled(Image)`
  width: 100%;
  border-radius: 16px;
  margin-bottom: 18px;
  object-fit: cover;
  border-radius: 16px;
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
