// Import global npm modules
import React, { FC, useEffect } from 'react'
import styled from '@emotion/styled'

interface Props {
  children: any
}

// Create Container ui
const Container : FC<Props> = ({ children }) => {

  // useEffect(() => {

  //   document.querySelectorAll('a[href^="#"]').forEach((anchor:any) => {

  //     anchor.addEventListener('click', function (e:any) {

  //       e.preventDefault()

  //       let id = e.target.id
  //       let position = document.getElementById(id.slice(0, id.length - 1)) //removing extra last - (dash)
  //       window.location.href = '#' + id.slice(0, id.length - 1) // changing the url
  //       position && position.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start' 
  //       })
      
  //     })
    
  //   })
  
  // }, [])

  // Return jsx
  return <Main>
    { children }
  </Main>

}

// Create Main styled component
const Main = styled.div``

// Export default Container ui
export default Container