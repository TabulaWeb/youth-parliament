'use client'

import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Pagination } from '@mui/material'
import ContentLoader from 'react-content-loader'

const Appeals = ({data, loader, page, filter, changeResponse, currentPage, setCurrentPage}: any) => {

  const renderDate = (date) => {
    const dateArr = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
    let time = date.split('T')[1]
    let month = date.split('T')[0]

    return `${month.split('-')[2].includes('0') ? month.split('-')[2].substr(1) : month.split('-')[2]} ${month.split('-')[1].includes('0') ? dateArr[month.split('-')[1].substr(1) - 1] : dateArr[month.split('-')[1] - 1]} ${time.substr(0, 5)}`
  }

  return<> 
  <Container>
    {data?.map(item => {

      return loader ? <Link key={item.id} href={`/appeals/${item.id}`}>
          <Appeal >
            <AppealHead>
              <AppealIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_146_860)">
                    <path d="M9.79688 0.0515633C8.11875 0.135939 5.74688 0.375002 4.96406 0.539064C3.93281 0.759377 2.99063 1.27969 2.12813 2.11875C1.38281 2.84063 0.890625 3.6 0.628125 4.42969C0.290625 5.49844 0 8.07656 0 10.0547C0 11.9672 0.285938 14.5734 0.614063 15.6375C0.848438 16.3969 1.3125 17.1469 1.97344 17.8359C2.84531 18.7359 3.89063 19.3453 4.95938 19.5703C5.35313 19.65 6.58125 19.8047 7.61719 19.8984C8.05313 19.9406 8.41406 19.9781 8.41875 19.9828C8.76094 20.5219 9.97969 22.2984 10.3266 22.7672C11.0578 23.7469 11.3766 23.9766 12 23.9766C12.4125 23.9766 12.675 23.8734 12.9891 23.5969C13.2563 23.3531 14.0016 22.3453 14.8734 21.0422L15.5859 19.9781L15.8672 19.95C16.0219 19.9359 16.4859 19.8891 16.8984 19.8469C17.9625 19.7438 18.9141 19.6078 19.3406 19.4953C19.8375 19.3688 20.6484 18.9703 21.1547 18.6094C21.6422 18.2578 22.3922 17.4938 22.6969 17.0391C22.9828 16.6078 23.2641 16.0359 23.3859 15.6375C23.7141 14.5734 24 11.9672 24 10.0547C24 8.12813 23.7141 5.53594 23.3859 4.47656C23.1328 3.65156 22.6078 2.83594 21.8719 2.11875C21.1875 1.45313 20.4141 0.965626 19.6406 0.703127C18.1922 0.215626 13.1813 -0.117186 9.79688 0.0515633ZM13.9734 1.82813C16.4906 1.95469 18.4781 2.18438 19.1438 2.42344C20.3203 2.85 21.4359 4.01719 21.7219 5.13281C22.1672 6.87188 22.3359 10.1578 22.1016 12.5156C22.0219 13.3031 21.8344 14.5266 21.7219 14.9719C21.4781 15.9234 20.5922 16.9641 19.5938 17.4797C18.9094 17.8313 18.4219 17.925 16.1109 18.1406C14.6016 18.2813 14.55 18.3141 13.575 19.7813C12.7875 20.9719 12.0609 21.9844 12 21.9844C11.9391 21.9844 11.2125 20.9719 10.425 19.7813C9.4125 18.2578 9.44063 18.2766 7.45313 18.0938C6.45469 18.0047 5.475 17.8641 5.11875 17.7656C3.82969 17.4047 2.59219 16.1906 2.27813 14.9766C1.99688 13.8656 1.78125 11.7469 1.78125 10.0313C1.78125 8.36719 1.99688 6.23438 2.27813 5.13281C2.56406 4.02188 3.68438 2.84531 4.85625 2.42344C6.07031 1.9875 10.8891 1.67344 13.9734 1.82813Z" fill="#2F4395"/>
                    <path d="M11.6859 4.08265C11.1796 4.14828 10.8187 4.25609 10.3265 4.49984C9.48746 4.91234 8.74683 5.73734 8.35777 6.6889C8.12808 7.2514 8.09527 7.64984 8.26402 7.93109C8.50777 8.35297 9.04683 8.4889 9.4734 8.24047C9.70308 8.10453 9.80152 7.94515 9.98902 7.41547C10.1343 7.00297 10.4953 6.50609 10.8375 6.25765C11.325 5.89672 12.0093 5.75609 12.7687 5.85453C13.5 5.95297 13.9406 6.18734 14.2359 6.62797C14.8687 7.56078 14.3531 8.54515 12.8156 9.34672C12.2015 9.66547 11.7328 10.1483 11.4375 10.7577C11.1609 11.3248 11.0906 11.6483 11.0906 12.3327C11.0859 12.8952 11.0906 12.928 11.2171 13.1155C11.5828 13.6686 12.4546 13.617 12.7453 13.0217C12.8203 12.8623 12.8437 12.7264 12.8437 12.4405C12.8437 11.9952 12.9281 11.6764 13.1296 11.3764C13.275 11.1561 13.3406 11.1045 14.0765 10.6733C15.2109 10.003 15.9421 9.13578 16.2 8.15609C16.3031 7.76234 16.3031 7.1014 16.1953 6.70297C16.0171 6.0139 15.5671 5.3014 15.0562 4.89828C14.2171 4.23734 12.914 3.92328 11.6859 4.08265Z" fill="#2F4395"/>
                    <path d="M11.1798 15.0236C10.9501 15.1033 10.7579 15.3143 10.6923 15.5486C10.6267 15.783 10.6267 16.8471 10.6923 17.0861C10.7579 17.3252 10.997 17.5549 11.2454 17.6252C11.3532 17.6533 11.6954 17.6768 12.0001 17.6768C12.3048 17.6768 12.647 17.6533 12.7548 17.6252C13.0032 17.5549 13.2423 17.3252 13.3079 17.0861C13.3735 16.8424 13.3735 15.783 13.3079 15.5393C13.2423 15.3049 13.0079 15.0705 12.7735 15.0049C12.5017 14.9299 11.4095 14.9439 11.1798 15.0236Z" fill="#2F4395"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_146_860">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </AppealIcon>

              <AppealData>
                <AppealDataTime>{renderDate(item.attributes.createdAt).split(' ')[2]}</AppealDataTime>
                <AppealDataSepor></AppealDataSepor>
                <AppealDataTime>{renderDate(item.attributes.createdAt).split(' ')[0]} {renderDate(item.attributes.createdAt).split(' ')[1]}</AppealDataTime>
              </AppealData>
            </AppealHead>
            <AppealBody>
              <AppealMessage>{`${item.attributes.appeal.slice(0, 50)}...`}</AppealMessage>
              <AppealTag>{item.attributes.adress}</AppealTag>
            </AppealBody>
          </Appeal>
        </Link>
        :
        <ContentLoader
          speed={1}
          width={'100%'}
          height={596}
          backgroundOpacity={0}
        >
          <rect x="0" y="0" rx="0" ry="0" width="328" height="172" />
          <rect x="0" y="212" rx="0" ry="0" width="328" height="172" />
          <rect x="0" y="384" rx="0" ry="0" width="328" height="172" />
          <rect x="368" y="0" rx="0" ry="0" width="328" height="172" />
          <rect x="368" y="212" rx="0" ry="0" width="328" height="172" />
          <rect x="368" y="384" rx="0" ry="0" width="328" height="172" />
        </ContentLoader>
    })}
    {data.length != 0 && 
      <PaginationContainer>
        <Pagination 
          count={page}
          page={currentPage}
          onChange={(event, page) => {
            changeResponse(filter, page)
            setCurrentPage(page)
          }}
        />
      </PaginationContainer>
    }

    {data.length == 0 &&
      <Empty>
        <EmptyTitle>Нет ни одного обращения</EmptyTitle>
      </Empty>
    }
  </Container>
  </>
}

const Container = styled.div`
    position: relative;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    @media screen and (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`

const Appeal = styled.div`
    background: rgba(249, 246, 243, 0.6);
    border: 1px solid rgba(50, 50, 50, 0.08);
    box-shadow: 2px 2px 12px rgba(141, 141, 141, 0.2);
    backdrop-filter: blur(60px);
    border-radius: 16px;
    transition: .4s;

    padding: 24px;
    cursor: pointer;

    &:hover {
        box-shadow: 4px 4px 16px rgba(141, 141, 141, 0.4);
        transition: .4s;
    }
`

const AppealHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`

const AppealData = styled.div`
    display: flex;
    align-items: center;
    gap: 0 6px;
`

const AppealDataTime = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(50, 50, 50, 0.5);
    margin: 0;
`

const AppealIcon = styled.div`
    display: flex;
`

const AppealDataSepor = styled.div`
    height: 12px;
    width: 1px;
    border-radius: 4px;
    background-color: rgba(50, 50, 50, 0.16);
`

const AppealBody = styled.div``

const AppealMessage = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #323232;
    margin-bottom: 16px;
`

const AppealTag = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    color: #2F4395;
    margin: 0;
`

const Empty = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const EmptyTitle = styled.p`
  width: max-content;
  border-radius: 16px;
  font-size: 20px;
  background: rgba(249, 246, 243, 0.6);
  border: 1px solid rgba(50, 50, 50, 0.08);
  box-shadow: 2px 2px 12px rgba(141, 141, 141, 0.2);
  padding: 20px 50px;
  -webkit-backdrop-filter: blur(60px);
`

const PaginationContainer = styled.div`
  position: absolute;
  bottom: -60px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 991px) {
    display: none;
  }
`

export default Appeals