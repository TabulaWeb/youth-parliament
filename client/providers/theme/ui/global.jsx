// Import global npm modules
import React from 'react'
import { createGlobalStyle } from 'styled-components'

// Create Global ui
const Global = () => {

  // Return jsx
  return <Main/>

}

// Create Main styled component
const Main = createGlobalStyle`

  /* Set font-face styles */
  @font-face {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Inter-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: Inter;
    font-style: medium;
    font-weight: 500;
    src: url('/fonts/Inter-Medium.ttf') format('ttf');
  }

  @font-face {
    font-family: Golos;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Golos-Regular.ttf') format('ttf')
  }

  /* Set global styles */
  *, ::after, ::before {
    box-sizing: border-box;
  }

  .input-phone {
    width: 100%;
    height: 48px;
    padding: 15px 25px;
    border: 1.5px solid rgba(50, 50, 50, 0.5);
    border-radius: 8px;
    transition: .4s;

    outline: none;

    font-weight: 400;
    font-size: 13px;
    color: #323232;

    &:focus {
        transition: .4s;
        border-color: #2F4395;
    }
  }

  /* Set tag styles */
  body {
    line-height: 1.5;
    box-sizing: border-box;
    margin: 0;
    font-size: 14px;
    font-family: ${({ theme }) => theme.inter};
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
    background-color: rgba(255, 252, 249, 0.089);
    /* background-color: purple; */
    box-shadow: inset 78px -78px 78px rgba(194, 192, 189, 0.089), inset -78px 78px 78px rgba(255, 255, 255, 0.089);
  }
  h1, h2, h3 {
    line-height: 1.2;
    margin: 20px 0 10px;
  }
  h4, h5, h6 {
    line-height: 1.2;
    margin: 10px 0;
  }
  h1 {
    font-size: 36px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 18px;
  }
  h5 {
    font-size: 14px;
  }
  h6 {
    font-size: 12px;
  }
  p {
    margin: 0 0 10px;
  }
  img {
    max-width: 100%;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

input[type='radio']{ height: 0; width: 0; display:none;}

input[type='radio'] + label{
  padding: 8px 24px;
  position: relative;
  display: flex;
  align-items: center;
  color: #323232;
  transition: color 250ms cubic-bezier(.4,.0,.23,1);
  cursor: pointer;
}

input[type='radio'] + label > span{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  width: 25px;
  height: 25px;
  background: transparent;
  border: 2px solid #9E9E9E;
  border-radius: 4px;
  cursor: pointer;  
  transition: all 250ms cubic-bezier(.4,.0,.23,1);
}

input[type='radio'] + label:hover, input[type='radio']:focus + label{
  color: #323232;
}
input[type='radio'] + label:hover > span, input[type='radio']:focus + label > span{
  background: rgba(255,255,255,.1);
}
input[type='radio']:checked + label > ins{ height: 100%; }

input[type='radio']:checked + label > span{
  border: 12.5px solid #2F4395;
  animation: shrink-bounce 200ms cubic-bezier(.4,.0,.23,1);
}
input[type='radio']:checked ~ label {
  background-color: #F9F6F3;
  transition: .4s;
}
input[type='radio']:checked + label > span:before{
  content: "";
  position: absolute;
  top: 19.5px;

  left: 28.5px;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transform: rotate(45deg);
  transform-origin: 0% 100%;
  animation: checkbox-check 125ms 250ms cubic-bezier(.4,.0,.23,1) forwards;
}

@keyframes shrink-bounce{
  0%{
    transform: scale(1);
  }
  33%{    
    transform: scale(.85);
  }
  100%{
    transform: scale(1);    
  }
}
@keyframes checkbox-check{
  0%{
    width: 0;
    height: 0;
    border-color: #fff;
    transform: translate3d(0,0,0) rotate(45deg);
  }
  33%{
    width: 10px;
    height: 0;
    transform: translate3d(0,0,0) rotate(45deg);
  }
  100%{    
    width: 10px;
    height: 14px;    
    border-color: #fff;
    transform: translate3d(0,-14px,0) rotate(45deg);
  }
}
`

// Export default Global ui
export default Global