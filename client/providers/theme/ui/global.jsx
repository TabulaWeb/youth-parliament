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
    src: url(/fonts/Inter-Regular.ttf) format('ttf');
  }

  @font-face {
    font-family: Inter;
    font-style: medium;
    font-weight: 500;
    src: url(/fonts/Inter-Medium.ttf) format('ttf');
  }

  @font-face {
    font-family: Golos;
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/Golos-Regular.ttf) format('ttf')
  }

  /* Set global styles */
  *, ::after, ::before {
    box-sizing: border-box;
  }

  /* Set tag styles */
  body {
    line-height: 1.5;
    margin: 0;
    background-color: ${({ theme }) => theme.background};
    font-size: 14px;
    font-family: ${({ theme }) => theme.inter};
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.text};
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
    color: ${({ theme }) => theme.primary};
    &:hover {
      text-decoration: underline;
    }
  }
`

// Export default Global ui
export default Global