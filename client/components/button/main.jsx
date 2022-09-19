// Import global npm modules
import React from 'react'
import styled from 'styled-components'

// Create Text ui
const Button = ({ onClick, type, text }) => {

  // Return jsx
  return <Main aria-label='send message'>
    <svg width="274" height="61">
        <defs>
            <linearGradient id="grad1">
                <stop offset="0%" stopColor="#FF8282"/>
                <stop offset="100%" stopColor="#E178ED" />
            </linearGradient>
        </defs>
        <rect x="7" y="7" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
    </svg>
    <ButtonText>Отправить обращение</ButtonText>
  </Main>

}

const Main = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    width: 260px;
    height: 68px;
    text-align: center;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    text-decoration:none;

    & svg {
        position: absolute;

        & rect {
            stroke-width: 2;
            stroke-dasharray: 353, 0;
            stroke-dashoffset: 0;
            -webkit-transition: all 600ms ease;
            transition: all 600ms ease;
        }
    }

    &:hover svg rect {
        stroke-width: 2;
        stroke-dasharray: 196, 543;
        stroke-dashoffset: 437;
    }
`

const ButtonText = styled.span`
    font-size: 14px;
    line-height: 20px;
    background: rgb(255,130,130);
    background: -moz-linear-gradient(left,  rgba(255,130,130,1) 0%, rgba(225,120,237,1) 100%);
    background: -webkit-linear-gradient(left,  rgba(255,130,130,1) 0%,rgba(225,120,237,1) 100%);
    background: linear-gradient(to right,  rgba(255,130,130,1) 0%,rgba(225,120,237,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8282', endColorstr='#e178ed',GradientType=1 );
  
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export default Button