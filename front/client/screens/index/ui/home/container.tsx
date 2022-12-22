// Import global npm modules
import React from 'react'
import styled from '@emotion/styled'

// Create Container ui
const Container = ({ children }:any) => {

  // Return jsx
  return <Main>
    <StainImageTwo>
      <Circle className='pink'></Circle>
      <Circle className='perpl'></Circle>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="420" height="645" fill="none"><path fill="#FFB6FB" d="M85 34C-29 130-74 473-5 564c64 84 242 152 366-62 111-189 36-212 0-294C302 70 199-61 85 34Z"/><path fill="#A9AEF4" d="M-270 281c-7 98 111 181 194 167 145-9 254-137 205-276C68-1 19-21-96 15c-188 60-166 168-174 266Z"/><path fill="#CCCBFF" d="M1 233c-80 44-144 173-134 221 18 87 161 215 270 127 120-96 124-169 101-227-7-19-33-47-50-63-43-41-111-101-187-58Z"/></svg> */}
    </StainImageTwo>

    <Wrapper>
      {children}
    </Wrapper>

    <StainImageThree>
      <Circle className='blue'></Circle>
      <Circle className='green'></Circle>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="504" height="830" fill="none"><path fill="#9FC4FC" d="M640 67C523-66 201 17 132 162l-1 8c-2 147-109 349 118 445 204 86 271 58 327-74 84-196 183-341 64-474Z"/><path fill="#D0F1FF" d="M42 141A449 449 0 0 0 3 356c10 64 92 244 264 130 219-147 21-336-55-379-67-38-148-5-170 34Z"/><path fill="#A7FFDA" d="M176 723c31 3 208 23 255-3l6-6c37-53 275-229 33-418C159 54 18 408 17 512c-2 95 126 190 150 207l9 4Z"/><path fill="#DDFFF1" d="M258 815c112 65 225-101 274-191l1-3c25-76 26-141-181-174-58-9-164 2-205 82-62 121-2 221 111 286Z"/></svg> */}
    </StainImageThree>
  </Main>

}

// Create Main styled component
const Main = styled.section`
  position: relative;
  backdrop-filter: blur(107.64px);
`

// Create Wrapper styled component
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  padding: 0 4%;
  margin: 0 auto;
  position: relative;
`

const StainImageTwo = styled.div`
  filter: blur(50px);
  opacity: 0.5;
  position: absolute;
  left: 0px;
  z-index: -100;
  bottom: -50px;

  & .pink {
    background-color: #FFB6FB;
    height: 400px;
    width: 300px;
    border-radius: 60px;
  }

  & .perpl {
    background-color: #CCCBFF;
    margin-top: -150px;
    height: 400px;
    width: 300px;
    border-radius: 60px;
  }
`

const StainImageThree = styled.div`
  filter: blur(50px);
  opacity: 0.5;
  position: absolute;
  bottom: -450px;
  right: 0;
  z-index: -100;

  & .blue {
    height: 200px;
    width: 300px;
    background-color: #B7D3FD;
    border-radius: 60px;
  }

  & .green {
    height: 600px;
    width: 300px;
    background-color: #B2FFDF;
    border-radius: 60px;
  }
`

const Circle = styled.div``

// Export default Container ui
export default Container