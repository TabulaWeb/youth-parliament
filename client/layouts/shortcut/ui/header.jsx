// Import global npm modules
import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

// Create Header ui
const Header = () => {
  const [active, setActive] = useState(false)

  // Return jsx
  return <Main>
    <Wrapper>
      <Logo>
        <LogoImage src='/images/logo.png' />
        <LogoText>Молодежный парламентпри</LogoText>
      </Logo>
      
      <Nav>
        <Link href="/">
          <LinkText>Парламент</LinkText>
        </Link>
        <Link href="/">
          <LinkText>О нас пишут</LinkText>
        </Link>
        <Link href="/">
          <LinkText>Новости</LinkText>
        </Link>
        <Link href="/">
          <LinkText>Обращения</LinkText>
        </Link>
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

        <BurgerMenu>

        </BurgerMenu>
      </Burger>
    </Wrapper>
  </Main>

}

// Create Main styled component
const Main = styled.header`
  margin-top: 20px;
  position: absolute;
  width: 100%;
  z-index: 2;
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
const LogoImage = styled.img``

// Create LogoText styled component
const LogoText = styled.p`
  max-width: 190px;
  margin-bottom: 0;
  font-family: ${(theme) => theme.golos};
  font-weight: 500;
  font-size: 14px;
  color:${(theme) => theme.text};
  line-height: 130%;
  text-transform: uppercase;
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
  position: relative;
  display: none;

  @media screen and (max-width: 991px) {
    display: flex;
  }
`

const BurgerIcon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  transition: .4s;

  cursor: pointer;
`

const BurgerIconTop = styled.span`
  width: 100%;
  height: 3px;
  background-color: #323232;
  border-radius: 25px;
  position: absolute;
  transition: .4s;
  top: ${({ active }) => active ? 11 : 0}px;
  transform: ${({ active }) => active ? 'rotate(45deg)' : 'rotate(0deg)'};
`

const BurgerIconMiddle = styled.span`
  display: flex;
  gap: 0 4px;
  width: 100%;
  position: absolute;
  transition: .4s;
  opacity: ${({ active }) => active ? 0 : 1};
  top: 11px;

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

const BurgerIconBottom = styled.span`
  width: 100%;
  height: 3px;
  background-color: #323232;
  border-radius: 25px;
  position: absolute;
  transition: .4s;
  top: ${({ active }) => active ? 11 : 21}px;
  transform: ${({ active }) => active ? 'rotate(-45deg)' : 'rotate(0deg)'};
`

const BurgerMenu = styled.div`
  
`

// Create LinkText styled component
const LinkText = styled.a`
  color: ${(theme) => theme.text};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: .2s;

  &:hover {
    color: #2F4395;
    transition: .2s;
  }
`

// Export default Header ui
export default Header