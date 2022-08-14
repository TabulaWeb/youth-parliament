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
    font-weight: 100 900;
    font-display: optional;
    src: url(/fonts/inter-var-cyrillic.woff2) format('woff2');
    unicode-range: U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
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

  /* @font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:optional;src:url(/fonts/inter-var-latin.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD} */
  /* @font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:optional;src:url(/fonts/inter-var-latin-ext.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF} */
  /* @font-face{font-family:'Inter';font-style:optional;font-weight:100 900;font-display:optional;src:url(/fonts/inter-var-cyrillic-ext.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F} */
  /* @font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:optional;src:url(/fonts/inter-var-greek.woff2) format('woff2');unicode-range:U+0370-03FF} */
  /* @font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:optional;src:url(/fonts/inter-var-greek-ext.woff2) format('woff2');unicode-range:U+1F00-1FFF} */
  /* @font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:optional;src:url(/fonts/inter-var-vietnamese.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB} */

`

// Export default Global ui
export default Global