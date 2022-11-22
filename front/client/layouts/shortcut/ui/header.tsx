// Import global npm modules
import React, { useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

// Create Header ui
const Header = () => {

  const [
    active,
    setActive
  ] = useState<boolean>(false)

  const handleClick = (e: any, id: string) => {

    e.preventDefault()

    const element = document.getElementById(id)

    if (!element) return

    element.scrollIntoView()

  }

  // Return jsx
  return <Main>

    <StainImageOne>
      <svg width="633" height="388" viewBox="0 0 633 388" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <g filter="url(#filter0_f_188_2437)">
            <path d="M335.064 42.7497C394.738 116.943 382.034 205.882 442.297 243.646C448.64 247.621 456.792 246.584 462.566 241.82C599.749 128.634 639.927 -51.1535 502.005 -132.011C325.675 -235.386 229.766 -262.76 221.236 -156.69C212.707 -50.6191 272.076 -35.5632 335.064 42.7497Z" fill="#FFB6FB" />
          </g>
          <g filter="url(#filter1_f_188_2437)">
            <path d="M337.331 138.223C369.904 185.655 418.314 154.619 439.863 131.867C440.824 130.852 441.615 129.767 442.327 128.564C459.909 98.863 512.605 16.9433 452.219 -48.3666C375.176 -131.691 352.843 -145.248 337.703 -91.5488C322.563 -37.8499 295.694 77.5929 337.331 138.223Z" fill="#D6D8FF" />
          </g>
          <g filter="url(#filter2_f_188_2437)">
            <path d="M403.745 146.525C463.334 110.203 486.377 48.6503 446.463 6.66C444.213 4.29369 441.31 2.71251 438.171 1.81801C380.491 -14.6139 213.664 -70.5742 154.378 15.1624C78.113 125.455 118.235 60.1079 155.062 111.288C206.638 182.967 342.473 183.873 403.745 146.525Z" fill="#A7FFDA" />
          </g>
          <g filter="url(#filter3_f_188_2437)">
            <path d="M395.418 146.381C427.801 126.642 440.783 93.5101 420.668 70.2121C418.534 67.7409 415.614 66.1868 412.478 65.2783C378.627 55.4711 288.985 26.6046 256.693 73.3032C214.266 134.66 237.187 104.552 257.674 133.025C286.366 172.9 361.332 167.158 395.418 146.381Z" fill="#F9FCFF" fillOpacity="0.5" />
          </g>
        </g>
        <defs>
          <filter id="filter0_f_188_2437" x="120.416" y="-324.092" width="567.164" height="670.189" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2437" />
          </filter>
          <filter id="filter1_f_188_2437" x="215.112" y="-223.547" width="365.313" height="486.612" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2437" />
          </filter>
          <filter id="filter2_f_188_2437" x="11.0076" y="-131.326" width="555.373" height="402.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2437" />
          </filter>
          <filter id="filter3_f_188_2437" x="132.79" y="-52.5586" width="397.472" height="315.097" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_2437" />
          </filter>
        </defs>
      </svg>
    </StainImageOne>

    <Wrapper>
      <Logo>
        <LogoImage src='/images/logo.png' width={60} height={60} alt="Logo" />
        <LogoText>Молодежный парламентпри</LogoText>
      </Logo>

      <Nav>
        <Link href="/#parliament" scroll={true} onClick={(e: any) => handleClick(e, 'parliament')}>
          <LinkText>Парламент</LinkText>
        </Link>
        <Link href="/#media" scroll={true} onClick={(e: any) => handleClick(e, 'media')}>
          <LinkText>О нас пишут</LinkText>
        </Link>
        <Link href="/#news" scroll={true} onClick={(e: any) => handleClick(e, 'news')}>
          <LinkText>Новости</LinkText>
        </Link>
        <Link href="/#form" scroll={true} onClick={(e: any) => handleClick(e, 'form')}>
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

        <BurgerMenu active={active}>
          <BurgerNav>
            <Link href='/'>
              <BurgerLink>Парламент</BurgerLink>
            </Link>
            <Link href='/'>
              <BurgerLink>О нас пишут</BurgerLink>
            </Link>
            <Link href='/'>
              <BurgerLink>Новости</BurgerLink>
            </Link>
            <Link href='/'>
              <BurgerLink>Обращения</BurgerLink>
            </Link>
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

const BurgerLink = styled.p`
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
const LinkText = styled.p`
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
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`

// Export default Header ui
export default Header