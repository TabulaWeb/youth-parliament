import React, { useState } from 'react'
import styled from '@emotion/styled'

import StepRules from './stepRules'
import StepPersonal from './stepPersonal'
import StepApples from './stepApples'
import StepReady from './stepReady'
import NextStep from './nextStep'
import BackStep from './backStep'
import Agreement from './agreement'

const Form = ({
  step,
  setStep
}: any) => {

  // stepTwo
  const [
    name,
    setName
  ] = useState()
  const [
    lastname,
    setLastname
  ] = useState()
  const [
    patronymic,
    setPatronymic
  ] = useState()
  const [
    email,
    setEmail
  ] = useState()
  const [
    phone,
    setPhone
  ] = useState()
  const [
    social,
    setSocial
  ] = useState()

  // stepThree
  const [address, setAddress] = useState()
  const [theme, setTheme] = useState()
  const [title, setTitle] = useState()
  const [textAppeals, setTextAppeals] = useState()

  // Result
  const [unicNumber, setUnicNumber] = useState()
  
  // Error
  const [errorName, setErrorName] = useState(false)
  const [errorSurname, setErrorSurname] = useState(false)
  const [errorPatronymic, setErrorPatranomyc] = useState(false)
  const [errorSocial, setErrorSocial] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)
  const [errorAdress, setErrorAdress] = useState(false)
  const [errorTheme, setErrorTheme] = useState(false)
  const [errorTitle, setErrorTitle] = useState(false)
  const [errorAppeal, setErrorAppeal] = useState(false)
        // appeal: textAppeals

  return <Container>
    <FormHeader>
      <Rules step={step}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_188_2677)">
            <path d="M9.54265 0.0429249C6.41765 0.367144 3.67937 2.06636 2.0153 4.7148C-0.344071 8.46871 0.101241 13.4531 3.08562 16.6992C4.74577 18.5039 6.80046 19.5781 9.26921 19.9296C9.73405 19.9961 11.2692 19.9921 11.7497 19.9257C14.1794 19.5898 16.2341 18.5195 17.8903 16.7226C19.2536 15.2461 20.1247 13.3554 20.4294 11.2304C20.4958 10.7695 20.4958 9.23043 20.4294 8.76949C20.1989 7.14449 19.6833 5.76558 18.8278 4.47652C18.4684 3.92965 18.1051 3.48433 17.5973 2.97261C16.0387 1.39449 14.1091 0.421831 11.8864 0.0937061C11.4059 0.0233936 10.0192 -0.00785637 9.54265 0.0429249ZM10.9294 3.83199C11.2106 3.95699 11.3434 4.08589 11.4723 4.3398L11.5934 4.58199V8.33589V12.0898L11.4997 12.2851C11.3122 12.6914 10.9411 12.9296 10.4997 12.9296C10.0583 12.9296 9.68718 12.6914 9.49968 12.2851L9.40593 12.0898V8.3398C9.40593 4.65621 9.40983 4.58589 9.48796 4.41402C9.61296 4.13277 9.74187 3.99996 9.99577 3.87105C10.2966 3.71871 10.652 3.70699 10.9294 3.83199ZM11.1716 14.2578C11.3434 14.3046 11.5348 14.5156 11.5895 14.7148C11.652 14.9336 11.6403 15.8476 11.5778 16.0273C11.4567 16.3671 11.2848 16.4531 10.6911 16.4765C9.90593 16.5078 9.64421 16.4336 9.46843 16.1328C9.39812 16.0156 9.38249 15.914 9.37077 15.4687C9.35515 14.789 9.39812 14.582 9.60124 14.3984C9.70671 14.3046 9.80046 14.2578 9.92155 14.2421C10.0153 14.2304 10.1325 14.2109 10.1872 14.2031C10.3317 14.1757 11.0075 14.2148 11.1716 14.2578Z" fill="#323232" fillOpacity="0.5" />
          </g>
          <defs>
            <clipPath id="clip0_188_2677">
              <rect width="20" height="20" fill="white" transform="translate(0.499756)" />
            </clipPath>
          </defs>
        </svg>
        <Text>Правила</Text>
      </Rules>

      <Dot />

      <PersonData step={step}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.62081 0.0588217C8.5544 0.222884 7.60128 0.730697 6.85518 1.52367C6.03487 2.39476 5.60909 3.40257 5.5505 4.6096C5.46846 6.2971 6.29659 7.91038 7.72628 8.84398C8.4294 9.30492 9.10518 9.53929 9.9255 9.6057C11.445 9.72288 12.7419 9.24632 13.7888 8.17992C14.6208 7.33616 15.0427 6.41429 15.1442 5.23851C15.2849 3.6682 14.6911 2.20726 13.5075 1.18382C12.7419 0.527572 12.0388 0.199447 11.0661 0.0588217C10.5974 -0.00758457 10.0505 -0.0114908 9.62081 0.0588217Z" fill="#323232" fillOpacity="0.5" />
          <path d="M6.07388 9.69152C4.30825 9.87902 3.08169 11.1446 2.51138 13.379C2.13247 14.8673 2.03481 16.6564 2.277 17.6368C2.47622 18.422 3.12856 19.2189 3.88247 19.6017C4.22231 19.7735 4.7106 19.9142 5.12075 19.961C5.36294 19.9923 7.20669 20.0001 10.734 19.9923L15.9879 19.9806L16.32 19.8868C17.5543 19.5509 18.3981 18.7228 18.7067 17.5587C18.8668 16.9532 18.8473 15.5079 18.6598 14.3673C18.2497 11.8282 17.2106 10.3048 15.5661 9.82824C15.1911 9.71886 14.5192 9.63683 14.32 9.67589C14.1286 9.71105 13.8629 9.85167 13.2614 10.2384C12.6208 10.6525 12.5309 10.6993 12.0504 10.879C11.4958 11.086 11.0387 11.1759 10.5036 11.1759C9.95669 11.1759 9.53481 11.0978 8.98013 10.9025C8.45669 10.715 8.43325 10.7032 7.61294 10.1837C7.18325 9.91027 6.86294 9.73449 6.73794 9.69933C6.51919 9.64464 6.51919 9.64464 6.07388 9.69152Z" fill="#323232" fillOpacity="0.5" />
        </svg>
        <Text>Личные данные</Text>
      </PersonData>

      <Dot />

      <Appeals step={step}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_188_2685)">
            <path d="M10.2498 0.0664062C10.1833 0.0976562 9.82788 0.359375 9.44897 0.640625L8.76929 1.15234L9.63257 1.16406C10.1091 1.16797 10.8904 1.16797 11.3669 1.16406L12.2302 1.15234L11.5466 0.640625C11.1716 0.355469 10.8083 0.0976562 10.7419 0.0625C10.5896 -0.015625 10.3982 -0.015625 10.2498 0.0664062Z" fill="#323232" fillOpacity="0.5" />
            <path d="M3.18726 2.42578C3.09741 2.47266 3.00757 2.5625 2.96069 2.65625C2.88257 2.80469 2.88257 2.87891 2.88257 6.50391V10.1953L6.69116 12.0977L10.5037 14.0039L14.3083 12.0977L18.1169 10.1953V6.50391C18.1169 2.87891 18.1169 2.80469 18.0388 2.65625C17.988 2.55469 17.906 2.47266 17.8044 2.42188C17.6521 2.34375 17.5935 2.34375 10.4919 2.34375C3.44116 2.34766 3.32788 2.34766 3.18726 2.42578ZM14.2888 5.9375C14.4646 6.02734 14.6013 6.25 14.6013 6.44531C14.6013 6.64062 14.4646 6.86328 14.2888 6.95312C14.1404 7.03125 14.0662 7.03125 10.4958 7.03125H6.85913L6.70288 6.94531C6.30835 6.72266 6.30444 6.1875 6.69507 5.95312L6.84741 5.85938H10.4919C14.0662 5.85938 14.1404 5.85938 14.2888 5.9375ZM10.7732 8.28125C10.949 8.37109 11.0857 8.59375 11.0857 8.78906C11.0857 8.98438 10.949 9.20703 10.7732 9.29688C10.6248 9.37109 10.5466 9.375 8.73804 9.375C6.86304 9.375 6.85913 9.375 6.70288 9.28906C6.30835 9.06641 6.30444 8.53125 6.69507 8.29688L6.84741 8.20312H8.73413C10.5466 8.20312 10.6248 8.20703 10.7732 8.28125Z" fill="#323232" fillOpacity="0.5" />
            <path d="M1.15613 6.83594C0.78113 7.11328 0.605349 7.26562 0.56238 7.36328C0.507693 7.47266 0.49988 7.61719 0.507693 8.26172L0.519412 9.02734L1.11707 9.31641L1.71082 9.60547V8.02344C1.71082 7.15625 1.70691 6.44531 1.6991 6.44531C1.69519 6.44531 1.4491 6.62109 1.15613 6.83594Z" fill="#323232" fillOpacity="0.5" />
            <path d="M19.2888 8.02344C19.2888 8.89453 19.2966 9.60938 19.3083 9.60938C19.3201 9.60938 19.5935 9.47656 19.9138 9.31641L20.4998 9.02344V8.26172C20.4998 7.625 20.488 7.48047 20.4333 7.35937C20.3826 7.25781 20.2263 7.11719 19.8748 6.85937C19.6052 6.66016 19.363 6.48828 19.3396 6.46875C19.3005 6.44531 19.2888 6.76953 19.2888 8.02344Z" fill="#323232" fillOpacity="0.5" />
            <path d="M0.499756 14.9414C0.499756 19.375 0.503662 19.5391 0.573975 19.6797C0.616943 19.7656 0.710693 19.8594 0.804443 19.9141L0.960693 20H10.4958C19.9802 20 20.0349 20 20.1873 19.9219C20.2888 19.8711 20.3708 19.7891 20.4216 19.6875C20.4998 19.5352 20.4998 19.4688 20.4998 14.9414C20.4998 12.418 20.4841 10.3516 20.4685 10.3516C20.4529 10.3516 18.2341 11.4492 15.5427 12.793C11.6521 14.7344 10.6169 15.2344 10.4998 15.2344C10.3826 15.2344 9.35132 14.7344 5.4646 12.793C2.77319 11.4492 0.55835 10.3516 0.538818 10.3516C0.515381 10.3516 0.499756 12.0625 0.499756 14.9414Z" fill="#323232" fillOpacity="0.5" />
          </g>
          <defs>
            <clipPath id="clip0_188_2685">
              <rect width="20" height="20" fill="white" transform="translate(0.499756)" />
            </clipPath>
          </defs>
        </svg>
        <Text>Обращение</Text>
      </Appeals>

      <Dot />

      <Ready step={step}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_188_2689)">
            <path d="M9.6015 0.0390625C7.67178 0.226562 5.89049 0.9375 4.32796 2.14062C3.56622 2.72656 2.57792 3.82812 2.0076 4.72656C1.7615 5.11328 1.28102 6.09766 1.10914 6.56641C0.917733 7.08984 0.710697 7.89453 0.609133 8.51562C0.488036 9.27734 0.488036 10.7227 0.609133 11.4844C0.784918 12.5625 1.06227 13.4297 1.53493 14.3945C2.05057 15.4453 2.58574 16.1914 3.44513 17.0547C4.30843 17.9141 5.05454 18.4492 6.10534 18.9648C7.0702 19.4375 7.93741 19.7148 9.01555 19.8906C9.77729 20.0117 11.2226 20.0117 11.9844 19.8906C13.0625 19.7148 13.9297 19.4375 14.8946 18.9648C15.9454 18.4492 16.6915 17.9141 17.5548 17.0547C18.4142 16.1914 18.9494 15.4453 19.465 14.3945C19.8087 13.6953 19.9806 13.2383 20.1681 12.5352C20.4142 11.5977 20.4728 11.0859 20.4728 10C20.4728 8.91406 20.4142 8.40234 20.1681 7.46484C19.9806 6.76172 19.8087 6.30469 19.465 5.60547C18.9494 4.55469 18.4142 3.80859 17.5548 2.94531C16.6915 2.08594 15.9454 1.55078 14.8946 1.03516C13.9336 0.5625 13.043 0.28125 12.0039 0.117188C11.4297 0.0273438 10.1484 -0.015625 9.6015 0.0390625ZM15.7305 5.71094C15.9259 5.77344 16.2266 6.06641 16.3087 6.28125C16.4024 6.53125 16.3946 6.85547 16.2852 7.08203C16.1602 7.33594 9.73041 13.7188 9.44134 13.8789C9.16009 14.0273 8.83196 14.0273 8.5507 13.875C8.38663 13.7891 5.42564 11.1367 4.92172 10.625C4.7225 10.4258 4.62484 10.1836 4.62875 9.90234C4.63656 9.3125 5.07016 8.91406 5.65611 8.95312C5.79674 8.96484 5.96862 9 6.03502 9.03906C6.1405 9.08984 8.11319 10.8672 8.75383 11.4805L8.93743 11.6602L11.8594 8.74219C13.4649 7.14062 14.8321 5.80078 14.9024 5.76562C15.1719 5.62891 15.4141 5.61328 15.7305 5.71094Z" fill="#323232" fillOpacity="0.5" />
          </g>
          <defs>
            <clipPath id="clip0_188_2689">
              <rect width="20.0004" height="20" fill="white" transform="translate(0.499756)" />
            </clipPath>
          </defs>
        </svg>
        <Text>Готово</Text>
      </Ready>
    </FormHeader>

    <FormHeaderXS>
      <Rules step={step}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_188_2677)">
            <path d="M9.54265 0.0429249C6.41765 0.367144 3.67937 2.06636 2.0153 4.7148C-0.344071 8.46871 0.101241 13.4531 3.08562 16.6992C4.74577 18.5039 6.80046 19.5781 9.26921 19.9296C9.73405 19.9961 11.2692 19.9921 11.7497 19.9257C14.1794 19.5898 16.2341 18.5195 17.8903 16.7226C19.2536 15.2461 20.1247 13.3554 20.4294 11.2304C20.4958 10.7695 20.4958 9.23043 20.4294 8.76949C20.1989 7.14449 19.6833 5.76558 18.8278 4.47652C18.4684 3.92965 18.1051 3.48433 17.5973 2.97261C16.0387 1.39449 14.1091 0.421831 11.8864 0.0937061C11.4059 0.0233936 10.0192 -0.00785637 9.54265 0.0429249ZM10.9294 3.83199C11.2106 3.95699 11.3434 4.08589 11.4723 4.3398L11.5934 4.58199V8.33589V12.0898L11.4997 12.2851C11.3122 12.6914 10.9411 12.9296 10.4997 12.9296C10.0583 12.9296 9.68718 12.6914 9.49968 12.2851L9.40593 12.0898V8.3398C9.40593 4.65621 9.40983 4.58589 9.48796 4.41402C9.61296 4.13277 9.74187 3.99996 9.99577 3.87105C10.2966 3.71871 10.652 3.70699 10.9294 3.83199ZM11.1716 14.2578C11.3434 14.3046 11.5348 14.5156 11.5895 14.7148C11.652 14.9336 11.6403 15.8476 11.5778 16.0273C11.4567 16.3671 11.2848 16.4531 10.6911 16.4765C9.90593 16.5078 9.64421 16.4336 9.46843 16.1328C9.39812 16.0156 9.38249 15.914 9.37077 15.4687C9.35515 14.789 9.39812 14.582 9.60124 14.3984C9.70671 14.3046 9.80046 14.2578 9.92155 14.2421C10.0153 14.2304 10.1325 14.2109 10.1872 14.2031C10.3317 14.1757 11.0075 14.2148 11.1716 14.2578Z" fill="#323232" fillOpacity="0.5" />
          </g>
          <defs>
            <clipPath id="clip0_188_2677">
              <rect width="20" height="20" fill="white" transform="translate(0.499756)" />
            </clipPath>
          </defs>
        </svg>
        <Text>Правила</Text>
      </Rules>

      <PersonData step={step}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.62081 0.0588217C8.5544 0.222884 7.60128 0.730697 6.85518 1.52367C6.03487 2.39476 5.60909 3.40257 5.5505 4.6096C5.46846 6.2971 6.29659 7.91038 7.72628 8.84398C8.4294 9.30492 9.10518 9.53929 9.9255 9.6057C11.445 9.72288 12.7419 9.24632 13.7888 8.17992C14.6208 7.33616 15.0427 6.41429 15.1442 5.23851C15.2849 3.6682 14.6911 2.20726 13.5075 1.18382C12.7419 0.527572 12.0388 0.199447 11.0661 0.0588217C10.5974 -0.00758457 10.0505 -0.0114908 9.62081 0.0588217Z" fill="#323232" fillOpacity="0.5" />
          <path d="M6.07388 9.69152C4.30825 9.87902 3.08169 11.1446 2.51138 13.379C2.13247 14.8673 2.03481 16.6564 2.277 17.6368C2.47622 18.422 3.12856 19.2189 3.88247 19.6017C4.22231 19.7735 4.7106 19.9142 5.12075 19.961C5.36294 19.9923 7.20669 20.0001 10.734 19.9923L15.9879 19.9806L16.32 19.8868C17.5543 19.5509 18.3981 18.7228 18.7067 17.5587C18.8668 16.9532 18.8473 15.5079 18.6598 14.3673C18.2497 11.8282 17.2106 10.3048 15.5661 9.82824C15.1911 9.71886 14.5192 9.63683 14.32 9.67589C14.1286 9.71105 13.8629 9.85167 13.2614 10.2384C12.6208 10.6525 12.5309 10.6993 12.0504 10.879C11.4958 11.086 11.0387 11.1759 10.5036 11.1759C9.95669 11.1759 9.53481 11.0978 8.98013 10.9025C8.45669 10.715 8.43325 10.7032 7.61294 10.1837C7.18325 9.91027 6.86294 9.73449 6.73794 9.69933C6.51919 9.64464 6.51919 9.64464 6.07388 9.69152Z" fill="#323232" fillOpacity="0.5" />
        </svg>
        <Text>Личные данные</Text>
      </PersonData>

      <Appeals step={step}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_188_2685)">
            <path d="M10.2498 0.0664062C10.1833 0.0976562 9.82788 0.359375 9.44897 0.640625L8.76929 1.15234L9.63257 1.16406C10.1091 1.16797 10.8904 1.16797 11.3669 1.16406L12.2302 1.15234L11.5466 0.640625C11.1716 0.355469 10.8083 0.0976562 10.7419 0.0625C10.5896 -0.015625 10.3982 -0.015625 10.2498 0.0664062Z" fill="#323232" fillOpacity="0.5" />
            <path d="M3.18726 2.42578C3.09741 2.47266 3.00757 2.5625 2.96069 2.65625C2.88257 2.80469 2.88257 2.87891 2.88257 6.50391V10.1953L6.69116 12.0977L10.5037 14.0039L14.3083 12.0977L18.1169 10.1953V6.50391C18.1169 2.87891 18.1169 2.80469 18.0388 2.65625C17.988 2.55469 17.906 2.47266 17.8044 2.42188C17.6521 2.34375 17.5935 2.34375 10.4919 2.34375C3.44116 2.34766 3.32788 2.34766 3.18726 2.42578ZM14.2888 5.9375C14.4646 6.02734 14.6013 6.25 14.6013 6.44531C14.6013 6.64062 14.4646 6.86328 14.2888 6.95312C14.1404 7.03125 14.0662 7.03125 10.4958 7.03125H6.85913L6.70288 6.94531C6.30835 6.72266 6.30444 6.1875 6.69507 5.95312L6.84741 5.85938H10.4919C14.0662 5.85938 14.1404 5.85938 14.2888 5.9375ZM10.7732 8.28125C10.949 8.37109 11.0857 8.59375 11.0857 8.78906C11.0857 8.98438 10.949 9.20703 10.7732 9.29688C10.6248 9.37109 10.5466 9.375 8.73804 9.375C6.86304 9.375 6.85913 9.375 6.70288 9.28906C6.30835 9.06641 6.30444 8.53125 6.69507 8.29688L6.84741 8.20312H8.73413C10.5466 8.20312 10.6248 8.20703 10.7732 8.28125Z" fill="#323232" fillOpacity="0.5" />
            <path d="M1.15613 6.83594C0.78113 7.11328 0.605349 7.26562 0.56238 7.36328C0.507693 7.47266 0.49988 7.61719 0.507693 8.26172L0.519412 9.02734L1.11707 9.31641L1.71082 9.60547V8.02344C1.71082 7.15625 1.70691 6.44531 1.6991 6.44531C1.69519 6.44531 1.4491 6.62109 1.15613 6.83594Z" fill="#323232" fillOpacity="0.5" />
            <path d="M19.2888 8.02344C19.2888 8.89453 19.2966 9.60938 19.3083 9.60938C19.3201 9.60938 19.5935 9.47656 19.9138 9.31641L20.4998 9.02344V8.26172C20.4998 7.625 20.488 7.48047 20.4333 7.35937C20.3826 7.25781 20.2263 7.11719 19.8748 6.85937C19.6052 6.66016 19.363 6.48828 19.3396 6.46875C19.3005 6.44531 19.2888 6.76953 19.2888 8.02344Z" fill="#323232" fillOpacity="0.5" />
            <path d="M0.499756 14.9414C0.499756 19.375 0.503662 19.5391 0.573975 19.6797C0.616943 19.7656 0.710693 19.8594 0.804443 19.9141L0.960693 20H10.4958C19.9802 20 20.0349 20 20.1873 19.9219C20.2888 19.8711 20.3708 19.7891 20.4216 19.6875C20.4998 19.5352 20.4998 19.4688 20.4998 14.9414C20.4998 12.418 20.4841 10.3516 20.4685 10.3516C20.4529 10.3516 18.2341 11.4492 15.5427 12.793C11.6521 14.7344 10.6169 15.2344 10.4998 15.2344C10.3826 15.2344 9.35132 14.7344 5.4646 12.793C2.77319 11.4492 0.55835 10.3516 0.538818 10.3516C0.515381 10.3516 0.499756 12.0625 0.499756 14.9414Z" fill="#323232" fillOpacity="0.5" />
          </g>
          <defs>
            <clipPath id="clip0_188_2685">
              <rect width="20" height="20" fill="white" transform="translate(0.499756)" />
            </clipPath>
          </defs>
        </svg>
        <Text>Обращение</Text>
      </Appeals>

      <Ready step={step}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_188_2689)">
            <path d="M9.6015 0.0390625C7.67178 0.226562 5.89049 0.9375 4.32796 2.14062C3.56622 2.72656 2.57792 3.82812 2.0076 4.72656C1.7615 5.11328 1.28102 6.09766 1.10914 6.56641C0.917733 7.08984 0.710697 7.89453 0.609133 8.51562C0.488036 9.27734 0.488036 10.7227 0.609133 11.4844C0.784918 12.5625 1.06227 13.4297 1.53493 14.3945C2.05057 15.4453 2.58574 16.1914 3.44513 17.0547C4.30843 17.9141 5.05454 18.4492 6.10534 18.9648C7.0702 19.4375 7.93741 19.7148 9.01555 19.8906C9.77729 20.0117 11.2226 20.0117 11.9844 19.8906C13.0625 19.7148 13.9297 19.4375 14.8946 18.9648C15.9454 18.4492 16.6915 17.9141 17.5548 17.0547C18.4142 16.1914 18.9494 15.4453 19.465 14.3945C19.8087 13.6953 19.9806 13.2383 20.1681 12.5352C20.4142 11.5977 20.4728 11.0859 20.4728 10C20.4728 8.91406 20.4142 8.40234 20.1681 7.46484C19.9806 6.76172 19.8087 6.30469 19.465 5.60547C18.9494 4.55469 18.4142 3.80859 17.5548 2.94531C16.6915 2.08594 15.9454 1.55078 14.8946 1.03516C13.9336 0.5625 13.043 0.28125 12.0039 0.117188C11.4297 0.0273438 10.1484 -0.015625 9.6015 0.0390625ZM15.7305 5.71094C15.9259 5.77344 16.2266 6.06641 16.3087 6.28125C16.4024 6.53125 16.3946 6.85547 16.2852 7.08203C16.1602 7.33594 9.73041 13.7188 9.44134 13.8789C9.16009 14.0273 8.83196 14.0273 8.5507 13.875C8.38663 13.7891 5.42564 11.1367 4.92172 10.625C4.7225 10.4258 4.62484 10.1836 4.62875 9.90234C4.63656 9.3125 5.07016 8.91406 5.65611 8.95312C5.79674 8.96484 5.96862 9 6.03502 9.03906C6.1405 9.08984 8.11319 10.8672 8.75383 11.4805L8.93743 11.6602L11.8594 8.74219C13.4649 7.14062 14.8321 5.80078 14.9024 5.76562C15.1719 5.62891 15.4141 5.61328 15.7305 5.71094Z" fill="#323232" fillOpacity="0.5" />
          </g>
          <defs>
            <clipPath id="clip0_188_2689">
              <rect width="20.0004" height="20" fill="white" transform="translate(0.499756)" />
            </clipPath>
          </defs>
        </svg>
        <Text>Готово</Text>
      </Ready>

      <FormHeaderXSStep>{step}/4</FormHeaderXSStep>
    </FormHeaderXS>

    <FormBody>
      <StepRules step={step} />
      <StepPersonal
        step={step}
        setName={setName}
        name={name}
        setLastname={setLastname}
        lastname={lastname}
        setPatronymic={setPatronymic}
        patronymic={patronymic}
        setEmail={setEmail}
        email={email}
        setPhone={setPhone}
        phone={phone}
        setSocial={setSocial}
        social={social}
        errorName={errorName}
        errorSurname={errorSurname}
        errorPatronymic={errorPatronymic}
        errorSocial={errorSocial}
        errorPhone={errorPhone}
        errorEmail={errorEmail}
        setErrorName={setErrorName}
        setErrorSurname={setErrorSurname}
        setErrorPatranomyc={setErrorPatranomyc}
        setErrorSocial={setErrorSocial}
        setErrorPhone={setErrorPhone}
        setErrorEmail={setErrorEmail}
      />
      <StepApples 
        step={step} 
        setAddress={setAddress} 
        address={address}
        setTheme={setTheme}
        theme={theme}
        setTitle={setTitle} 
        title={title} 
        setTextAppeals={setTextAppeals}
        textAppeals={textAppeals}
        errorAdress={errorAdress}
        errorTheme={errorTheme}
        errorTitle={errorTitle}
        errorAppeal={errorAppeal}
        setErrorAdress={setErrorAdress}
        setErrorTheme={setErrorTheme}
        setErrorTitle={setErrorTitle}
        setErrorAppeal={setErrorAppeal}
      />
      <StepReady 
        step={step}
        unicNumber={unicNumber} 
      />

      {step < 4 ?
        <Buttons>
          <BackStep step={step} setStep={setStep} />
          <NextStep 
            step={step}  
            setStep={setStep}
            name={name}
            lastname={lastname}
            patronymic={patronymic}
            email={email}
            phone={phone}
            social={social}
            address={address}
            theme={theme}
            title={title}
            textAppeals={textAppeals}
            setUnicNumber={setUnicNumber}
            errorName={errorName}
            errorSurname={errorSurname}
            errorPatronymic={errorPatronymic}
            errorSocial={errorSocial}
            errorEmail={errorEmail}
            errorPhone={errorPhone}
            errorAdress={errorAdress}
            errorTheme={errorTheme}
            errorTitle={errorTitle}
            errorAppeal={errorAppeal}
            setErrorName={setErrorName}
            setErrorSurname={setErrorSurname}
            setErrorPatranomyc={setErrorPatranomyc}
            setErrorSocial={setErrorSocial}
            setErrorPhone={setErrorPhone}
            setErrorEmail={setErrorEmail}
            setErrorAdress={setErrorAdress}
            setErrorTheme={setErrorTheme}
            setErrorTitle={setErrorTitle}
            setErrorAppeal={setErrorAppeal}
          />
        </Buttons>
        : null}

      {step < 4 ?
        <Agreement step={step} />
        : null}
    </FormBody>
  </Container>

}

const Container = styled.form`
    border-radius: 16px;
    background: rgba(249, 246, 243, 0.6);
    border: 1px solid rgba(50, 50, 50, 0.08);
    box-shadow: 2px 2px 12px rgba(141, 141, 141, 0.2);
    backdrop-filter: blur(60px);
`

const Dot = styled.span`
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: rgba(50, 50, 50, 0.5);

`

const FormHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0 28px;
    padding: 20px 0;
    background-color: rgba(50, 50, 50, 0.08);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    @media screen and (max-width: 991px) {
        display: none;
    }
`

const FormHeaderXS = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 0 28px;
    padding: 15px 15px;
    background-color: rgba(50, 50, 50, 0.08);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    @media screen and (max-width: 991px) {
        display: flex;
    }
`

const FormBody = styled.div`
    padding: 60px 120px;
    position: relative;

    @media screen and (max-width: 991px) {
        padding: 40px 24px;
    }
`

const Rules = styled.div<any>`
    display: flex;
    align-items: center;
    gap: 0 8px;
    transition: .4s;

    & p {
        color: ${({ step }) => step >= 1 ? '#323232' : 'rgba(50, 50, 50, 0.5)'};
        transition: .4s;
    }

    & svg path{
        fill-opacity: ${({ step }) => step >= 1 ? '1' : '0.5'};
        transition: .4s;
    }

    @media screen and (max-width: 991px) {
        display: ${({ step }) => step == 1 ? 'flex' : 'none'};
    }
`

const PersonData = styled.div<any>`
    display: flex;
    align-items: center;
    gap: 0 8px;
    transition: .4s;

    & p {
        color: ${({ step }) => step >= 2 ? '#323232' : 'rgba(50, 50, 50, 0.5)'};
        transition: .4s;
    }

    & svg path{
        fill-opacity: ${({ step }) => step >= 2 ? '1' : '0.5'};
        transition: .4s;
    }

    @media screen and (max-width: 991px) {
        display: ${({ step }) => step == 2 ? 'flex' : 'none'};
    }
`

const Appeals = styled.div<any>`
    display: flex;
    align-items: center;
    gap: 0 8px;
    transition: .4s;

    & p {
        color: ${({ step }) => step >= 3 ? '#323232' : 'rgba(50, 50, 50, 0.5)'};
        transition: .4s;
    }

    & svg path{
        fill-opacity: ${({ step }) => step >= 3 ? '1' : '0.5'};
        transition: .4s;
    }

    @media screen and (max-width: 991px) {
        display: ${({ step }) => step == 3 ? 'flex' : 'none'};
    }
`

const Ready = styled.div<any>`
    display: flex;
    align-items: center;
    gap: 0 8px;
    transition: .4s;

    & p {
        color: ${({ step }) => step >= 4 ? '#323232' : 'rgba(50, 50, 50, 0.5)'};
        transition: .4s;
    }

    & svg path{
        fill-opacity: ${({ step }) => step >= 4 ? '1' : '0.5'};
        transition: .4s;
    }

    @media screen and (max-width: 991px) {
        display: ${({ step }) => step == 4 ? 'flex' : 'none'};
    }
`

const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(50, 50, 50, 0.5);
    margin-bottom: 0;
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 32px;
    margin-bottom: 20px;
`

const FormHeaderXSStep = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #323232;
    margin-bottom: 0;
`

export default Form