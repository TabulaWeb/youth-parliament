import { FC, useState } from 'react'
import styled from '@emotion/styled'

interface Props {
  answers: any;
}

const Dropdown: FC<Props> = ({ answers }) => {

  const [
    isOpen,
    setIsOpen
  ] = useState(false)
  const [
    selectedOption,
    setSelectedOption
  ] = useState(null)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value: any) => () => {

    setSelectedOption(value)
    setIsOpen(false)

  }

  return <Main>
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || ''}
        <DropdownIcon open={isOpen}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.43151 4.63119C1.5956 4.46715 1.81812 4.375 2.05014 4.375C2.28216 4.375 2.50467 4.46715 2.66876 4.63119L7.00001 8.96244L11.3313 4.63119C11.4963 4.4718 11.7173 4.3836 11.9467 4.3856C12.1762 4.38759 12.3956 4.47961 12.5579 4.64185C12.7201 4.80408 12.8121 5.02354 12.8141 5.25296C12.8161 5.48238 12.7279 5.70341 12.5685 5.86844L7.61864 10.8183C7.45455 10.9823 7.23203 11.0745 7.00001 11.0745C6.76799 11.0745 6.54547 10.9823 6.38139 10.8183L1.43151 5.86844C1.26747 5.70435 1.17532 5.48183 1.17532 5.24981C1.17532 5.01779 1.26747 4.79527 1.43151 4.63119Z" fill="#323232" />
          </svg>
        </DropdownIcon>
      </DropDownHeader>

      <DropDownListContainer isOpen={isOpen}>
        <DropDownList isOpen={isOpen}>
          {answers.map((answer:any) => (
            <ListItem key={answer.id} onClick={onOptionClicked(answer.value)} className={answer.value == selectedOption ? 'active' : ''}>
              <ListItemText>{answer.value}</ListItemText>
            </ListItem>
          ))}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
    <TextError>qwe</TextError>
  </Main>

}

const Main = styled.div`
  width: 100%;
  position: relative;
`

const DropDownContainer = styled.div`
  width: 100%;
`

const DropDownHeader = styled.div`
  width: 100%;
  height: 48px;
  padding: 15px 25px;
  border: 1.5px solid rgba(50, 50, 50, 0.5);
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  font-weight: 400;
  font-size: 13px;
  color: #323232;
`

const DropdownIcon = styled.div<any>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 17px;
    transition: .4s;

    rotate: ${({ open }) => open ? '180deg' : '0deg'};
`

const TextError = styled.p`
  color: #952F2F;
  position: absolute;
  margin-bottom: 0;
  bottom: -15px;
  left: 16px;
  opacity: 0;
  pointer-events: none;
`

const DropDownListContainer = styled.div<any>`
  transition: height .4s;
  position: absolute;
  z-index: 1;
  height: ${({ isOpen }) => isOpen ? '200' : '0'}px;
  overflow-y: scroll;
  background: #FFFCF9;
  box-shadow: 2px 2px 12px rgba(141, 141, 141, 0.2);
  border-radius: 8px;
  width: 100%;

  &::-webkit-scrollbar {
      width: 10px;
  }

  &::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 10px 10px #C1BEBC;
      border: solid 3px transparent;
      border-radius: 100px;
  }
`

const DropDownList = styled.ul<any>`
  padding: 24px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0;

  &::-webkit-scrollbar {
      width: 10px;
  }

  &::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 10px 10px #C1BEBC;
      border: solid 3px transparent;
      border-radius: 100px;
  }
`

const ListItem = styled.li`
  list-style: none;
  width: 100%;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(47, 67, 149, 0.1);
  }

  &.active {
    background-color: rgba(47, 67, 149, 0.2);

    &:hover {
      background-color: rgba(47, 67, 149, 0.1);
    }
  }
`

const ListItemText = styled.p`
  pointer-events: none;
  margin-bottom: 0;
`

export default Dropdown