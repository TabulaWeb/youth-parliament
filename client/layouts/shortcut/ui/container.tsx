// Import global npm modules
import React, { FC } from 'react'
import styled from '@emotion/styled'

interface Props {
  children: any
}

// Create Container ui
const Container : FC<Props> = ({ children }) => {

  // Return jsx
  return <Main>
      { children }
  </Main>

}

// Create Main styled component
const Main = styled.div``

// Export default Container ui
export default Container