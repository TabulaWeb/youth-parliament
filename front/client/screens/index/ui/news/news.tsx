'use client'

import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

// import Pagination from './pagination'
import { Pagination } from '@mui/material'
import get from 'axios'

import Loader from './loader'
import NewsItem from './newsItem'
import NewsItemXs from './newsItemXs'

const News = () => {

  const [
    news,
    setNews
  ] = useState([])
  const [
    page,
    setPage
  ] = useState()
  const [
    loader,
    setLoader
  ] = useState(false)

  useEffect(() => {

    setLoader(false)
    get('http://localhost:1337/api/news?pagination[page]=1&pagination[pageSize]=4&populate=image').then((res) => {

      setNews(res.data.data)
      console.log(res.data.data)
      setPage(res.data.meta.pagination.pageCount)
      setLoader(true)
    
    })
  
  }, [])

  const changePage = (page: any) => {

    setLoader(false)
    get(`http://localhost:1337/api/news?pagination[page]=${page}&pagination[pageSize]=4&populate=image`).then((res) => {

      setNews(res.data.data)
      setPage(res.data.meta.pagination.pageCount)
      setLoader(true)
    
    })
  
  }

  const loadMore = (page: any) => {

    setLoader(false)
    get(`http://localhost:1337/api/news?pagination[page]=${page}&pagination[pageSize]=4&populate=image`).then((res) => {

      setNews([
        ...news,
        ...res.data.data
      ])
      // console.log([...news, ...res.data.data])
      console.log(news)
      setPage(res.data.meta.pagination.pageCount)
      setLoader(true)
    
    })
  
  }

  return <>
    <Title>Новости</Title>

    {loader && <NewsItem 
      data={news}
    />}

    {loader && <NewsItemXs 
      data={news}
    />}

    <PaginationContainer>
      <Pagination 
        count={page}
        onChange={(event, page) => changePage(page)}
      />
    </PaginationContainer>
    
    <Loader
      count={page}
      loadMore={loadMore}
    />
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