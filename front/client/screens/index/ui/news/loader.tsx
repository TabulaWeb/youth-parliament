import React, { useState } from 'react'
import styled from '@emotion/styled'

const Loader = ({
  count,
  loadMore
}: any) => {

  const [
    index,
    setIndex
  ] = useState(2)

  return index <= count ? <LoaderMore
    onClick={() => {

      setIndex(index+1)
      loadMore(index)
    
    }}
  >
    <LoaderMoreText>Показать еще</LoaderMoreText>
    <LoaderMoreIcon>
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 2.34326L8.5 13.6568" stroke="#2F4395" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.84319 8L14.1567 8" stroke="#2F4395" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </LoaderMoreIcon>
  </LoaderMore>
    :
    null

}

const LoaderMore = styled.div`
    height: 20px;
    display: none;
    align-items: unset;
    justify-content: center;
    width: max-content;
    margin: 0 auto;
    gap: 0 8px;
    cursor: pointer;


    @media screen and (max-width: 991px) {
        display: flex;
    }
`

const LoaderMoreText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #2F4395;

    margin-bottom: 0;
`

const LoaderMoreIcon = styled.span`
    display: flex;
`

export default Loader