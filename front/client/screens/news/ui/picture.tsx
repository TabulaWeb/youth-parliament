import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const Picture = () => {

  return <Container>
    <PostPicrute src='/images/photo.png' width='100' height='100' alt='post image' />

    <SocialLink>
      <Link href=''>
        <TextLink>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05173 19.7884C14.8821 17.2482 18.77 15.5735 20.7153 14.7644C26.2695 12.4542 27.4236 12.0529 28.1759 12.0397C28.3413 12.0368 28.7112 12.0778 28.9509 12.2722C29.1532 12.4364 29.2089 12.6582 29.2355 12.8138C29.2621 12.9695 29.2953 13.3241 29.2689 13.6012C28.968 16.7636 27.6656 24.4381 27.003 27.9801C26.7227 29.4789 26.1707 29.9814 25.6362 30.0306C24.4748 30.1375 23.5928 29.2631 22.4679 28.5257C20.7077 27.3718 19.7132 26.6535 18.0046 25.5275C16.03 24.2263 17.31 23.5111 18.4354 22.3423C18.7299 22.0364 23.8472 17.3818 23.9462 16.9596C23.9586 16.9067 23.9701 16.7099 23.8532 16.606C23.7362 16.502 23.5636 16.5376 23.4391 16.5658C23.2625 16.6059 20.4505 18.4646 15.003 22.1418C14.2048 22.6899 13.4818 22.9569 12.8341 22.9429C12.12 22.9275 10.7463 22.5392 9.72514 22.2072C8.47264 21.8001 7.47717 21.5848 7.56386 20.8934C7.60901 20.5332 8.10496 20.1649 9.05173 19.7884Z" fill="#323232"/>
          </svg>
        </TextLink>
      </Link>

      <Link href=''>
        <TextLink>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_189_3608)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.7501 12.1667C6.96677 22.5667 12.1667 28.8167 21.2834 28.8167H21.8002V22.8667C25.1502 23.2001 27.6833 25.6501 28.7 28.8167H33.4334C32.1334 24.0834 28.7166 21.4667 26.5833 20.4667C28.7166 19.2334 31.7166 16.2334 32.4332 12.1667H28.1332C27.1998 15.4667 24.4335 18.4667 21.8002 18.7501V12.1667H17.5V23.7001C14.8333 23.0334 11.4668 19.8001 11.3167 12.1667H6.7501Z" fill="#323232"/>
            </g>
            <defs>
              <clipPath id="clip0_189_3608">
                <rect width="40" height="40" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </TextLink>
      </Link>

      <SocialText>
                Следите за актуальными 
                новостями в наших соц.сетях
      </SocialText>
    </SocialLink>
  </Container>

}

const Container = styled.div`
    margin-top: 180px;
`

const PostPicrute = styled(Image)`
    max-width: 460px;
    max-width: 460px;

    object-fit: cover;
`

const SocialLink = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0 20px;

`

const TextLink = styled.p`
    
`

const SocialText = styled.p`
    font-family: 'Golos UI';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #323232;
    margin-left: 8px;

    width: 50%;
`

export default Picture
