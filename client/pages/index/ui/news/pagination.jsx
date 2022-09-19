// ...
import React, { useState } from 'react'
import styled from 'styled-components'

// ...
import NewsItem from './newsItem'

// ...
const Pagination = () => {
    const [pageIndex, setPageIndex] = useState(0)

    return <Container>
        <Button name='prev' onClick={() => setPageIndex(pageIndex - 1)}>
            <svg width="27" height="10" viewBox="0 0 27 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27 4.70874C27 4.09211 26.5001 3.59223 25.8835 3.59223L5.24905 3.59223L6.62667 2.69903C6.81915 2.57571 7.00497 2.45489 7.17508 2.34327C7.65833 2.02618 7.78968 1.3798 7.47701 0.893679C7.15915 0.399501 6.5041 0.253765 6.00902 0.570214C4.19433 1.73014 0.230176 4.27171 0.0313394 4.46602C-0.158083 4.66019 0.461844 5.2233 3.25151 7.35922C4.22321 8.10628 5.12241 8.78181 5.76778 9.2626C6.2935 9.65425 7.04142 9.48464 7.35179 8.90719C7.60726 8.43188 7.47262 7.84098 7.03857 7.52039C6.78089 7.33007 6.48494 7.11029 6.19616 6.8932L4.74967 5.82524L25.8835 5.82524C26.5001 5.82524 27 5.32537 27 4.70874Z" fill="#323232" fillOpacity="0.16"/>
            </svg>
        </Button>

        <PaginatoinLink>
            <Tab active={true}>1</Tab>
            <Tab>2</Tab>
            <Tab>3</Tab>
            <Doted>...</Doted>
            <Tab>12</Tab>
        </PaginatoinLink>

        <Button name='next' onClick={() => setPageIndex(pageIndex + 1)}>
            <svg width="27" height="10" viewBox="0 0 27 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-2.113e-07 5.29126C-1.83629e-07 5.90789 0.499876 6.40777 1.1165 6.40777L21.7509 6.40777L20.3733 7.30097C20.1808 7.42429 19.995 7.54511 19.8249 7.65673C19.3417 7.97383 19.2103 8.6202 19.523 9.10632C19.8408 9.6005 20.4959 9.74624 20.991 9.42979C22.8057 8.26986 26.7698 5.72829 26.9687 5.53398C27.1581 5.33981 26.5382 4.7767 23.7485 2.64078C22.7768 1.89372 21.8776 1.21819 21.2322 0.737399C20.7065 0.345746 19.9586 0.515357 19.6482 1.09281C19.3927 1.56812 19.5274 2.15902 19.9614 2.47961C20.2191 2.66993 20.5151 2.88971 20.8038 3.1068L22.2503 4.17476L1.11651 4.17476C0.499878 4.17476 -2.3897e-07 4.67463 -2.113e-07 5.29126Z" fill="#323232" fillOpacity="0.5"/>
            </svg>
        </Button>
    </Container>
}

// ...
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 991px) {
        display: none;
    }
`

// ...
const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`

// ...
const PaginatoinLink = styled.div`
    display: flex;
    align-items: center;
    gap: 0 28px;
    flex-direction: row;
    margin: 0 28px;
`

const Tab = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    border-bottom: ${(props) => props.active ? 'solid 2px' : ''};
    color: ${(props) => props.active ? '#2F4395' : 'rgba(50, 50, 50, 0.5)'};
    margin-bottom: 0;
    cursor: pointer;
    transition: .2s;

    &:hover {
        transition: .2s;
        color: #2F4395;
    }
`

const Doted = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: rgba(50, 50, 50, 0.5);
    margin-bottom: 0;

    display: flex;
    align-items: center;
    margin-top: -12px;
`

// ...
export default Pagination