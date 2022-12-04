'use client'

import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

// import Pagination from './pagination'
import Loader from './loader'
import NewsItem from './newsItem'
import NewsItemXs from './newsItemXs'
import {Pagination} from '@mui/material';

import get from 'axios'

const News = () => {
  const [news, setNews] = useState([])
  const [page, setPage] = useState()

  useEffect(() => {
    get(`http://localhost:1337/api/news?pagination[page]=1&pagination[pageSize]=4&populate=image`).then((res) => {
      setNews(res.data.data)
      console.log(res.data.data)
      setPage(res.data.meta.pagination.pageCount)
    })
  }, [])

  const changePage = (page: any) => {
    get(`http://localhost:1337/api/news?pagination[page]=${page}&pagination[pageSize]=4&populate=image`).then((res) => {
      setNews(res.data.data)
      setPage(res.data.meta.pagination.pageCount)
      console.log(res.data)
    })
  }

  return <>
    <Title>Новости</Title>

    <NewsItem 
      data={news}
    />
    <NewsItemXs 
      data={news}
    />

    <PaginationContainer>
      <Pagination 
        count={page}
        onChange={(event, page) => changePage(page)}
      />
    </PaginationContainer>
    
    <Loader />
  </>

}

const Title = styled.h2`
    font-weight: 400;
    font-size: 44px;
    line-height: 52px;
    color: #323232;
    margin-bottom: 60px;

    @media screen and (max-width: 991px) {
        font-size: clamp(24px, 7vw, 44px);
        line-height: clamp(28px, 7vw, 52px);
        margin-bottom: clamp(40px, 8vw, 60px);
    }
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default News