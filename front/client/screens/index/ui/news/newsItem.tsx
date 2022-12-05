// Import global npm modules
import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'

// ...
const NewsItem = ({ data }:any) => {
  
  return <Container>
    <MainLink href='news/1' key={data[0].id}>
      <MainNews className='newsItemMain'>
        <MainNewsImage className='imageMainNews' src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`} width='100' height='316' alt='news image' />
        <MainNewsMeta>
          <Tag>{data[0].attributes.tag}</Tag>
          <Data>4 авг <span></span> 18:00</Data>
        </MainNewsMeta>
        <MainNewsTitle>{data[0].attributes.title}</MainNewsTitle>
        <MainNewsText>
          {parse(data[0].attributes.text)}
        </MainNewsText>
      </MainNews>
    </MainLink>
    <OtherNews>
      {data.slice(1).map((item: any) => <OtherNewsItem className='newsItemOther' key={item.id}>
        <OtherNewsImage src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} width='184' height='184' alt='news image' />
        <OtherContent>
          <OtherNewsMeta>
            <Tag>{item.attributes.tag}</Tag>
            <Data>4 авг</Data>
          </OtherNewsMeta>
          <OtherNewsTitle>{item.attributes.title}</OtherNewsTitle>
          <OtherNewsText>
            {parse(item.attributes.text)}
          </OtherNewsText>
        </OtherContent>
      </OtherNewsItem>
      )}
      

    </OtherNews>
  </Container>

}

// ...
const Container = styled.div`
    display: flex;
    gap: 0 40px;
    margin-bottom: 40px;

    @media screen and (max-width: 991px) {
        display: none;
    }
`

// ...
const MainLink = styled(Link)`
    width: 100%;
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
const MainNewsImage = styled(Image)`
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
const OtherNewsImage = styled(Image)`
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
export default NewsItem