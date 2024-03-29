// Import global npm modules
import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'

// ...
const NewsItem = ({ data }:any) => {

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
  
  return data.length >= 1 && data != undefined ? <Container>
    <MainLink href={`news/${data[0].id}`} key={data[0].id}>
      <MainNews className='newsItemMain'>
        <MainNewsImage className='imageMainNews' src={`https://admin.mp60.ru${data[0].attributes.image.data.attributes.url}`} width='100' height='316' alt='news image' />
        <MainNewsMeta>
          <Tag>{data[0].attributes.tag}</Tag>
          <Data>{renderDate(data[0].attributes.createdAt)}</Data>
        </MainNewsMeta>
        
        <MainNewsTitle>{data[0].attributes.title.length > 20 ? `${data[0].attributes.title.slice(0, 20)}...` : data[0].attributes.title}</MainNewsTitle>
        <MainNewsText>
          {`${parse(data[0].attributes.text.replace(/<(.|\n)*?>/g, '').substring(0, 500))}...`}
        </MainNewsText>
      </MainNews>
    </MainLink>
    <OtherNews>
      {data.slice(1).map((item: any) => <OtherNewsItem href={`news/${item.id}`} className='newsItemOther' key={item.id}>
        <OtherNewsImage src={`https://admin.mp60.ru${item.attributes.image.data.attributes.url}`} width='184' height='184' alt='news image' />
        <OtherContent>
          <OtherNewsMeta>
            <Tag>{item.attributes.tag}</Tag>
            <Data>{renderDate(item.attributes.createdAt).split(' ')[0]} {renderDate(item.attributes.createdAt).split(' ')[1]}</Data>
          </OtherNewsMeta>
          <OtherNewsTitle>{item.attributes.title.length > 20 ? `${item.attributes.title.slice(0, 20)}...` : item.attributes.title}</OtherNewsTitle>
          <OtherNewsText>
            {`${parse(item.attributes.text.replace(/<(.|\n)*?>/g, '').substring(0, 100))}...`}
          </OtherNewsText>
        </OtherContent>
      </OtherNewsItem>
      )}

    </OtherNews>
  </Container>
  :
  <></>
  // <Container>
  //   <Empty>
  //     <EmptyTitle>Нет Новостей</EmptyTitle>
  //   </Empty>
  // </Container>

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
object-fit: cover;
    width: 100%;
    border-radius: 16px;
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
    color: #323232;
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
const OtherNewsItem = styled(Link)`
    display: flex;
    flex-direction: row;
    gap: 0 24px;
`

// ...
const OtherNewsImage = styled(Image)`
  object-fit: cover;
    width: 184px;
    height: 184px;
    border-radius: 16px;
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