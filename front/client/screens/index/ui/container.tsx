// Import global npm modules
import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

// Create Container ui
const Container = ({ children }:any) => {

  const handleClick = (e: any, id: string) => {

    e.preventDefault()

    const element = document.getElementById(id)

    if (!element) return

    element.scrollIntoView()

  }

  // Return jsx
  return <Main>
    <Wrapper>
      {children}
      <LinkToForm>
      <Link
        style={{width: '100%', height: '100%'}}
        href="/#form"
        scroll={true}
        onClick={(e: any) => handleClick(e, 'form')}
      >
        <ImageLink>
          <svg width="68" height="68">
            <defs>
              <linearGradient id="grad1">
                <stop offset="0%" stopColor="#FF8282" />
                <stop offset="100%" stopColor="#E178ED" />
              </linearGradient>
            </defs>
            <rect x="4" y="4" rx="100" fill="none" stroke="url(#grad1)" width="60" height="60"></rect>
          </svg>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_188_2484)">
              <path d="M13.65 0.0929688C13.5571 0.136719 13.0594 0.503125 12.529 0.896875L11.5774 1.61328L12.786 1.62969C13.4532 1.63516 14.5469 1.63516 15.2141 1.62969L16.4227 1.61328L15.4657 0.896875C14.9407 0.497656 14.4321 0.136719 14.3391 0.0875C14.1258 -0.021875 13.8579 -0.021875 13.65 0.0929688Z" fill="url(#paint0_linear_188_2484)" />
              <path d="M3.7625 3.39609C3.63672 3.46172 3.51094 3.5875 3.44531 3.71875C3.33594 3.92656 3.33594 4.03047 3.33594 9.10547V14.2734L8.66797 16.9367L14.0055 19.6055L19.332 16.9367L24.6641 14.2734V9.10547C24.6641 4.03047 24.6641 3.92656 24.5547 3.71875C24.4836 3.57656 24.3687 3.46172 24.2266 3.39063C24.0133 3.28125 23.9312 3.28125 13.9891 3.28125C4.11797 3.28672 3.95937 3.28672 3.7625 3.39609ZM19.3047 8.3125C19.5508 8.43828 19.7422 8.75 19.7422 9.02344C19.7422 9.29688 19.5508 9.60859 19.3047 9.73438C19.0969 9.84375 18.993 9.84375 13.9945 9.84375H8.90312L8.68437 9.72344C8.13203 9.41172 8.12656 8.6625 8.67344 8.33438L8.88672 8.20313H13.9891C18.993 8.20313 19.0969 8.20313 19.3047 8.3125ZM14.3828 11.5938C14.6289 11.7195 14.8203 12.0313 14.8203 12.3047C14.8203 12.5781 14.6289 12.8898 14.3828 13.0156C14.175 13.1195 14.0656 13.125 11.5336 13.125C8.90859 13.125 8.90312 13.125 8.68437 13.0047C8.13203 12.693 8.12656 11.9438 8.67344 11.6156L8.88672 11.4844H11.5281C14.0656 11.4844 14.175 11.4898 14.3828 11.5938Z" fill="url(#paint1_linear_188_2484)" />
              <path d="M0.918729 9.57041C0.393729 9.95869 0.147635 10.172 0.0874789 10.3087C0.0109164 10.4618 -2.11093e-05 10.6642 0.0109164 11.5665L0.0273226 12.6384L0.864041 13.0431L1.69529 13.4478V11.2329C1.69529 10.0188 1.68982 9.02353 1.67889 9.02353C1.67342 9.02353 1.32889 9.26963 0.918729 9.57041Z" fill="url(#paint2_linear_188_2484)" />
              <path d="M26.3047 11.2328C26.3047 12.4523 26.3156 13.4531 26.332 13.4531C26.3484 13.4531 26.7312 13.2672 27.1797 13.043L28 12.6328V11.5664C28 10.675 27.9836 10.4727 27.907 10.3031C27.8359 10.1609 27.6172 9.96406 27.125 9.60313C26.7477 9.32422 26.4086 9.08359 26.3758 9.05625C26.3211 9.02344 26.3047 9.47734 26.3047 11.2328Z" fill="url(#paint3_linear_188_2484)" />
              <path d="M0 20.918C0 27.125 0.00546875 27.3547 0.103906 27.5516C0.164062 27.6719 0.295312 27.8031 0.426562 27.8797L0.645312 28H13.9945C27.2727 28 27.3492 28 27.5625 27.8906C27.7047 27.8195 27.8195 27.7047 27.8906 27.5625C28 27.3492 28 27.2563 28 20.918C28 17.3852 27.9781 14.4922 27.9562 14.4922C27.9344 14.4922 24.8281 16.0289 21.0602 17.9102C15.6133 20.6281 14.1641 21.3281 14 21.3281C13.8359 21.3281 12.3922 20.6281 6.95078 17.9102C3.18281 16.0289 0.0820312 14.4922 0.0546875 14.4922C0.021875 14.4922 0 16.8875 0 20.918Z" fill="url(#paint4_linear_188_2484)" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_188_2484" x1="11.235" y1="0.819965" x2="16.8079" y2="0.819965" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2F4395" />
                <stop offset="1" stopColor="#C57AB3" />
              </linearGradient>
              <linearGradient id="paint1_linear_188_2484" x1="1.82865" y1="11.4434" x2="26.3598" y2="11.4434" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2F4395" />
                <stop offset="1" stopColor="#C57AB3" />
              </linearGradient>
              <linearGradient id="paint2_linear_188_2484" x1="-0.111967" y1="11.2356" x2="1.82949" y2="11.2356" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2F4395" />
                <stop offset="1" stopColor="#C57AB3" />
              </linearGradient>
              <linearGradient id="paint3_linear_188_2484" x1="26.1849" y1="11.2539" x2="28.1348" y2="11.2539" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2F4395" />
                <stop offset="1" stopColor="#C57AB3" />
              </linearGradient>
              <linearGradient id="paint4_linear_188_2484" x1="-1.9788" y1="21.2461" x2="30.2261" y2="21.2461" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2F4395" />
                <stop offset="1" stopColor="#C57AB3" />
              </linearGradient>
              <clipPath id="clip0_188_2484">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </ImageLink>
      </Link>
    </LinkToForm>
    </Wrapper>
  </Main>

}

// Create Main styled component
const Main = styled.section`
  position: relative;
`

// Create Wrapper styled component
const Wrapper = styled.div`
  max-width: 1200px;
  padding: 0 4%;
  margin: 0 auto;
  position: relative;
`

const ImageLink = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    border-radius: 100px;
    width: 60px;
    height: 60px;
    

     & svg:nth-child(1) {
        position: absolute;
        /* z-index: 100; */

        & rect {
            stroke-width: 2;
            stroke-dasharray: 353, 0;
            stroke-dashoffset: 0;
        }
    }
`

const LinkToForm = styled.div`
    position: fixed;
    z-index: 100;
    right: 4%;
    bottom: 40px;
    max-width: 1200px;
    padding: 0 4%;

    @media screen and (max-width: 991px)  {
        padding: 0;
    }
`

// Export default Container ui
export default Container