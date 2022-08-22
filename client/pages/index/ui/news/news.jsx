import React from 'react'
import styled from 'styled-components'

import Pagination from './pagination'

const News = () => {
    return <>
        <Title>Новости</Title>
        <Pagination />
    </>
}

const Title = styled.h2`
    font-weight: 400;
    font-size: 44px;
    line-height: 52px;
    color: #323232;
    margin-bottom: 60px;
`

export default News