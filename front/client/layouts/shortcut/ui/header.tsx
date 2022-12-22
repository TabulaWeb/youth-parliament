// Import global npm modules
import React, { useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import process from 'process'

// Create Header ui
const Header = () => {

  const [
    active,
    setActive
  ] = useState<boolean>(false)

  const handleClick = (e: any, id: string) => {
    if(window.location.pathname == '/') {
      
      e.preventDefault()

      const element = document.getElementById(id)

      if (!element) return

      element.scrollIntoView()
    } else {
      location.href=`${location.origin}/#${id}`
    }
  }

  // Return jsx
  return <Main>

    <StainImageOne>
      <Circle className='green'></Circle>
      <Circle className='perpl'></Circle>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="454" height="228" fill="none"><path fill="#FFB6FB" d="M201 40c45 56 49 121 74 165 19 33 63 28 89 1 108-113 129-268 4-341C192-238 96-266 87-160 79-54 138-38 201 40Z"/><path fill="#FFDFFD" d="M203 135c33 48 81 17 103-6l2-3c18-30 83-116 23-181-78-83-150-85-165-31s-4 161 37 221Z"/><path fill="#A7FFDA" d="M280 150c60-36 75-103 35-145-39-37-247-86-297 5-24 45-28 79 14 125 60 66 187 53 248 15Z"/><path fill="#CDFBE9" d="M272 150c34-21 47-56 22-80-26-28-130-44-161 7-27 44-1 68 7 73 42 26 98 21 132 0Z"/></svg> */}
    </StainImageOne>

    <Wrapper>
      <Logo>
        <LogoImage src='/images/logo.png' width={60} height={60} alt="Logo" />
        <LogoText>Молодежный парламентпри</LogoText>
      </Logo>

      <Nav>
        <LinkText
          href="/#parliament"
          scroll={true}
          onClick={(e: any) => handleClick(e, 'parliament')}
        >
          Парламент
        </LinkText>
        <LinkText
          href="/#media"
          scroll={true}
          onClick={(e: any) => handleClick(e, 'media')}
        >
          О нас пишут
        </LinkText>
        <LinkText
          href="/#news"
          scroll={true}
          onClick={(e: any) => handleClick(e, 'news')}
        >
          Новости
        </LinkText>
        <LinkText
          href="/#form"
          scroll={true}
          onClick={(e: any) => handleClick(e, 'form')}
        >
          Обращения
        </LinkText>
      </Nav>

      <Burger>
        <BurgerIcon onClick={() => setActive(!active)} active={active}>
          <BurgerIconTop active={active}></BurgerIconTop>
          <BurgerIconMiddle active={active}>
            <span></span>
            <span></span>
          </BurgerIconMiddle>
          <BurgerIconBottom active={active}></BurgerIconBottom>
        </BurgerIcon>

        <BurgerMenu active={active}>
          <BurgerNav>
            <BurgerLink 
              href="/#parliament"
              scroll={true}
              onClick={(e: any) => {
 
                handleClick(e, 'parliament')
                setActive(false)
              
              }}
            >Парламент</BurgerLink>
            <BurgerLink
              href="/#media"
              scroll={true}
              onClick={(e: any) => {

                handleClick(e, 'media')
                setActive(false)
              
              }}
            >О нас пишут</BurgerLink>
            <BurgerLink 
              href="/#news"
              scroll={true}
              onClick={(e: any) => {

                handleClick(e, 'news')
                setActive(false)
              
              }}
            >Новости</BurgerLink>
            <BurgerLink 
              href="/#form"
              scroll={true}
              onClick={(e: any) => {

                handleClick(e, 'form')
                setActive(false)
              
              }}
            >Обращения</BurgerLink>
          </BurgerNav>
        </BurgerMenu>
      </Burger>
    </Wrapper>
  </Main>

}

// Create Main styled component
const Main = styled.header`
  padding-top: 20px;
  position: absolute;
  width: 100%;
  z-index: 2;
`

const BurgerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
`

const BurgerLink = styled(Link)`
  cursor: pointer;
  color: #323232;
`

// Create Wrapper styled component
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 4%;
  margin: 0 auto;
`

// Create LogoImage styled component
const LogoImage = styled(Image)``

// Create LogoText styled component
const LogoText = styled.p`
  max-width: 190px;
  margin-bottom: 0;
  //TODO: golos
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  text-transform: uppercase;
  color:${(theme: any) => theme.text};
  `

// Create Logo styled component
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap:0 8px;
`

// Create Nav styled component
const Nav = styled.nav`
  display: flex;
  gap: 0 40px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`

const Burger = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    display: flex;
  }
`

const BurgerIcon = styled.div<any>`
  position: relative;
  width: 24px;
  height: 24px;
  transition: .4s;
  z-index: 10;

  cursor: pointer;
`

const BurgerIconTop = styled.span<any>`
  width: 100%;
  height: 3px;
  background-color: #323232;
  border-radius: 25px;
  position: absolute;
  transition: .4s;
   top: ${({ active }) => active ? 11 : 0}px;
   transform: ${({ active }) => active ? 'rotate(45deg)' : 'rotate(0deg)'};
  `

const BurgerIconMiddle = styled.span<any>`
  display: flex;
  gap: 0 4px;
  width: 100%;
  position: absolute;
  transition: .4s;
  top: 11px;
   opacity: ${({ active }) => active ? 0 : 1};
  
  & span:nth-child(1) {
    width: 100%;
    height: 3px;
    background-color: #323232;
    border-radius: 25px;
  }
  
  & span:nth-child(2) {
    width: 50%;
    height: 3px;
    background-color: #323232;
    border-radius: 25px;
  }
  
  `

const BurgerIconBottom = styled.span<any>`
  width: 100%;
  height: 3px;
  background-color: #323232;
  border-radius: 25px;
  position: absolute;
  transition: .4s;
   top: ${({ active }) => active ? 11 : 21}px;
   transform: ${({ active }) => active ? 'rotate(-45deg)' : 'rotate(0deg)'};
  `

const BurgerMenu = styled.div<any>`
  width: 96%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: #FFFCF9;
  box-shadow: -8px 0px 20px rgba(56, 56, 56, 0.2);
  transition: .4s;
  padding-top: 80px;
  padding-left: 4%;
  padding-right: 4%;
  transform: ${({ active }) => active ? 'translateX(0%)' : 'translateX(100%)'};
   opacity: ${({ active }) => active ? '1' : '0'};
  `

// Create LinkText styled component
const LinkText = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  color: #323232;
  text-decoration: none;
  transition: .2s;
  
  &:hover {
    color: #2F4395;
    transition: .2s;
  }
  `

const StainImageOne = styled.div`
  display: flex;
  flex-direction: row;
  filter: blur(50px);
  opacity: 0.6;
  position: absolute;
  top: 0;
  right: 50px;
  z-index: -100;
  pointer-events: none;
`

const Circle = styled.div`
  &.green {
    background-color: #A7FFDA;
    width: 300px;
    height: 200px;
    border-radius: 25px;
  }

  &.perpl {
    background-color: #FFB6FB;
    width: 200px;
    height: 200px;
    border-radius: 25px;
  }
`

// Export default Header ui
export default Header