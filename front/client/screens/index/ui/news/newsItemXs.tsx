// Import global npm modules
import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'

// ...
const NewsItemXs = ({ data }:any) => {

  const renderDate = (date:any) => {

    const dateArr = [
      'янв',
      'фев',
      'мар',
      'апр',
      'май',
      'июн',
      'июл',
      'авг',
      'сен',
      'окт',
      'ноя',
      'дек'
    ]
    let time = date.split('T')[1]
    let month = date.split('T')[0]

    return `${month.split('-')[2].includes('0') ? month.split('-')[2].substr(1) : month.split('-')[2]} ${month.split('-')[1].includes('0') ? dateArr[month.split('-')[1].substr(1) - 1] : dateArr[month.split('-')[1] - 1]} ${time.substr(0, 5)}`
  
  }

  return <Container>
    <OtherNews>
      {data.map((item: any) => <OtherNewsItem href={`news/${item.id}`} key={item.id}>
        <OtherNewsImage src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} width='100' height='328' alt='news image'/>
        <OtherContent>
          <OtherNewsMeta>
            <Tag>{item.attributes.tag}</Tag>
            <Data>{renderDate(item.attributes.createdAt).split(' ')[0]} {renderDate(item.attributes.createdAt).split(' ')[1]}</Data>
          </OtherNewsMeta>
          <OtherNewsTitle>{`${item.attributes.title.slice(0, 40)}...`}</OtherNewsTitle>
          <OtherNewsText>{parse(`${item.attributes.text.slice(0, 200)}...`)}</OtherNewsText>
        </OtherContent>
      </OtherNewsItem>
      )}
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
const OtherNewsItem = styled(Link)`
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
const OtherNewsImage = styled(Image)`
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
export default NewsItemXs