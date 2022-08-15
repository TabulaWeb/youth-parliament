// Import global npm modules
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

// Create Header ui
const Header = () => {

  // Return jsx
  return <Main>
    <Wrapper>
      <Logo>
        <LogoImage src='/images/logo.png' />
        <LogoText>Молодежный парламентпри ПОСД</LogoText>
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
    </Wrapper>
  </Main>

}

// Create Main styled component
const Main = styled.header`
  margin-top: 20px;
  position: absolute;
  width: 100%
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
`

// Create LinkText styled component
const LinkText = styled.a`
  color: ${(theme) => theme.text};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
`

// Export default Header ui
export default Header