import React from 'react'
import styled from 'styled-components'

const Loader = () => {
    return <LoaderMore>
        <LoaderMoreText>Показать еще</LoaderMoreText>
        <LoaderMoreIcon>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 2.34326L8.5 13.6568" stroke="#2F4395" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.84319 8L14.1567 8" stroke="#2F4395" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </LoaderMoreIcon>
    </LoaderMore>
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

export default Loader;