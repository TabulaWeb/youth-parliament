// Import global npm modules
import React, {useState} from 'react'
import styled from '@emotion/styled'

const Text = ({setModal}) => {
  const [number, setNumber] = useState()

  return <Container>
    <TitleContent>
      <Title>Обращения</Title>

      <SelectCommitte onClick={() => setModal(true)}>Выбрать комитет</SelectCommitte>
    </TitleContent>
        
    <Search>
      <SearchIcon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.3173 0.0516987C3.53448 0.206387 2.79855 0.876699 2.5173 1.68764L2.41417 1.99232L2.40011 11.8361C2.39073 18.9236 2.40011 21.7689 2.43761 21.9939C2.59698 22.9408 3.40792 23.7751 4.33605 23.9533C4.5423 23.9908 6.65636 24.0001 12.1407 23.9908C20.4939 23.9767 19.8048 24.0001 20.386 23.6673L20.6392 23.522L17.9767 20.8595L15.3095 18.1923L15.122 18.3095C14.5501 18.6658 13.7157 18.9845 13.0314 19.1064C12.5064 19.2001 11.4845 19.1954 10.9454 19.1017C8.6298 18.6892 6.70324 16.8751 6.17355 14.6017C5.84074 13.1814 6.01417 11.7658 6.67042 10.4814C7.70636 8.4517 9.7173 7.21889 12.0001 7.21889C16.5798 7.21889 19.4673 12.1595 17.2173 16.1439L17.0064 16.5142L19.3079 18.8158L21.6095 21.1173V14.1564V7.19545L18.0095 3.59545L14.4142 0.000137329L9.46886 0.00482368C6.75011 0.00951195 4.4298 0.0282612 4.3173 0.0516987Z" fill="#323232" fillOpacity="0.3"/>
          <path d="M11.3485 9.65605C10.9923 9.73105 10.6782 9.84824 10.2891 10.0451C9.99852 10.1951 9.81571 10.3357 9.46415 10.6873C9.08446 11.067 8.98602 11.1982 8.79852 11.5779C8.51259 12.1592 8.42352 12.5482 8.42352 13.1951C8.41884 13.8092 8.50321 14.1982 8.76102 14.7373C9.17821 15.6232 9.92352 16.2842 10.8985 16.6264C11.2454 16.7436 11.3251 16.7529 12.0001 16.7529C12.6751 16.7529 12.7548 16.7436 13.1016 16.6264C14.0766 16.2842 14.822 15.6232 15.2391 14.7373C15.497 14.1982 15.5813 13.8092 15.5766 13.1951C15.5766 12.5482 15.4876 12.1592 15.2016 11.5779C15.0141 11.1982 14.9157 11.067 14.536 10.6873C14.0438 10.1998 13.6407 9.94668 13.0079 9.7498C12.6376 9.63262 11.7095 9.58105 11.3485 9.65605Z" fill="#323232" fillOpacity="0.3"/>
        </svg>
      </SearchIcon>
      <SearchInput placeholder='Номер обращения' onChange={(e) => setNumber(e.target.value)} />

      <SearchButton
        onClick={() => location.href=`http://localhost:3000/appeals/${number}`}
      >
        <svg width="27" height="10" viewBox="0 0 27 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-2.113e-07 5.29126C-1.83629e-07 5.90789 0.499876 6.40777 1.1165 6.40777L21.7509 6.40777L20.3733 7.30097C20.1808 7.42429 19.995 7.54511 19.8249 7.65673C19.3417 7.97383 19.2103 8.6202 19.523 9.10632C19.8408 9.6005 20.4959 9.74624 20.991 9.42979C22.8057 8.26986 26.7698 5.72829 26.9687 5.53398C27.1581 5.33981 26.5382 4.7767 23.7485 2.64078C22.7768 1.89372 21.8776 1.21819 21.2322 0.737399C20.7065 0.345746 19.9586 0.515357 19.6482 1.09281C19.3927 1.56812 19.5274 2.15902 19.9614 2.47961C20.2191 2.66993 20.5151 2.88971 20.8038 3.1068L22.2503 4.17476L1.11651 4.17476C0.499878 4.17476 -2.3897e-07 4.67463 -2.113e-07 5.29126Z" fill="#323232" fillOpacity="0.5"/>
        </svg>
      </SearchButton>
    </Search>
  </Container>

}

const Title = styled.h2`
    font-weight: 400;
    font-size: 44px;
    line-height: 52px;
    color: #323232;
    margin: 0;

    @media screen and (max-width: 991px) {
        font-size: clamp(24px, 7vw, 44px);
        line-height: clamp(28px, 7vw, 52px);
    }
`

const Search = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    max-width: 328px;
    width: 100%;


`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;

    @media screen and (max-width: 991px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const SearchInput = styled.input`
    border: 1.5px solid rgba(50, 50, 50, 0.3);
    border-radius: 8px;
    font-size: 16px;
    color: #323232;
    width: 100%;
    height: 48px;
    padding-left: 56px;
`

const SearchIcon = styled.div`
    position: absolute;
    left: 25px;
    display: flex;
`

const SearchButton = styled.div`
    cursor: pointer;
    position: absolute;
    right: 25px;

    display: flex;
    height: 24px;
    align-items: center;
    padding-left: 24px;

    -webkit-box-shadow: -2px 0px 0px 0px rgba(50, 50, 50, 0.3); 
    -moz-box-shadow: -2px 0px 0px 0px rgba(50, 50, 50, 0.3); 
    box-shadow: -2px 0px 0px 0px rgba(50, 50, 50, 0.3);
`

const SelectCommitte = styled.p`
    display: none;
    margin-bottom: 0;
    cursor: pointer;

    @media screen and (max-width: 991px) {
        display: block;
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
        color: #2F4395;
    }
`

const TitleContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 991px) {
        margin-bottom: 40px;
    }
`

export default Text