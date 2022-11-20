// Import global npm modules
import { FC } from 'react'
import { Global, Theme, css } from '@emotion/react'

// Create Styles ui
const Styles: FC = () => {

  // Return jsx
  return <Global styles={Main} />

}

// Create Main styled component
const Main = (theme: Theme) => css`


  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  /* Set font-face styles */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(/fonts/inter.woff2) format('woff2');
    /* unicode-range: U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116; */
  }

  /* Set global styles */
  *, ::after, ::before {
    box-sizing: border-box;
  }

  /* Set tag styles */
  body {
    overflow-x: hidden
    line-height: 1.2;
    margin: 0;
    background-color: ${theme.background};
    font-family: ${theme.inter};
    -webkit-font-smoothing: antialiased;
    color: ${theme.text};
  }
  h1, h2, h3 {
    margin: 20px 0 10px;
  }
  h4, h5, h6 {
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
    color: ${theme.primary};
    text-decoration: none;
  }

`

// Export default Styles ui
export default Styles