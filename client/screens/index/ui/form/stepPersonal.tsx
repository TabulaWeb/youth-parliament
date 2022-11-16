import React, {useState} from 'react'
import styled from '@emotion/styled'
import InputMask from 'react-input-mask';

const options = [
    {
        id: 1,
        value: 'qwerty',
    },
    {
        id: 2,
        value: 'qwerty',
    },
    {
        id: 3,
        value: 'qwerty',
    },
    {
        id: 4,
        value: 'qwerty',
    }
];

const StepPersonal = (props:any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    
    const [errorName, setErrorName] = useState(false)
    const [errorLastname, setLastname] = useState(false)
    const [errorPatronymic, setErrorPatronymic] = useState(false)
    const [errorSocial, setErrorSocial] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPhone, setErrorPhone] = useState(false)

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value:any) => () => {
        setSelectedOption(value);
        props.setSocial(value)
        // setIsOpen(false);
    };

    // Ошибка в имени
    const checkErrorName = (event:any) => {
        event.target.value.length < 2 ? setErrorName(true) : setErrorName(false)
    }

    // Ошибка в фамилии
    const checkErrorLastname = (event:any) => {
        event.target.value.length < 2 ? setLastname(true) : setLastname(false)
    }

    // Ошибка в социальном статусе

    // Ошибка в мыле
    const checkErrorEmail = (event:any) => {
        event.target.value.includes('@') ? setErrorEmail(false) : setErrorEmail(true)
    }

    // Ошибка в телефоне
    const checkErrorPhone = (event:any) => {
        event.target.value.includes('_') ? setErrorPhone(false) : setErrorPhone(true)
    } 

    return <Container step={props.step}>
        <TextField>
            <Placeholder>Имя</Placeholder>
            <InputContainer>
                <Input 
                    onChange={(event) => props.setName(event.target.value)}
                    onBlur={(event) => checkErrorName(event)}
                    onFocus={() => setErrorName(false)}
                />
            </InputContainer>
        </TextField>

        <TextField>
            <Placeholder>Фамилия</Placeholder>
            <InputContainer>
                <Input 
                    onChange={(event) => props.setLastname(event.target.value)}
                    onBlur={(event) => checkErrorLastname(event)}
                    onFocus={() => setLastname(false)}
                />
            </InputContainer>
        </TextField>

        <TextField>
            <Placeholder>Отчество</Placeholder>
            <InputContainer>
                <Input 
                    onChange={(event) => props.setPatronymic(event.target.value)}
                />
            </InputContainer>
        </TextField>

        <CustomSelect>
            <Placeholder>Социальный статус</Placeholder>
            <DropDownMain>
                <DropDownContainer>
                    <DropDownHeader onClick={toggling}>
                        {selectedOption || ''}
                        <DropdownIcon open={isOpen}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.43151 4.63119C1.5956 4.46715 1.81812 4.375 2.05014 4.375C2.28216 4.375 2.50467 4.46715 2.66876 4.63119L7.00001 8.96244L11.3313 4.63119C11.4963 4.4718 11.7173 4.3836 11.9467 4.3856C12.1762 4.38759 12.3956 4.47961 12.5579 4.64185C12.7201 4.80408 12.8121 5.02354 12.8141 5.25296C12.8161 5.48238 12.7279 5.70341 12.5685 5.86844L7.61864 10.8183C7.45455 10.9823 7.23203 11.0745 7.00001 11.0745C6.76799 11.0745 6.54547 10.9823 6.38139 10.8183L1.43151 5.86844C1.26747 5.70435 1.17532 5.48183 1.17532 5.24981C1.17532 5.01779 1.26747 4.79527 1.43151 4.63119Z" fill="#323232"/>
                            </svg>
                        </DropdownIcon>
                    </DropDownHeader>
                    
                    <DropDownListContainer isOpen={isOpen}>
                        <DropDownList isOpen={isOpen}>
                        {options.map(option => (
                            <ListItem key={option.id} onClick={onOptionClicked(option.value)}>
                                <input id={`one${option.id}`} type='radio' name='socialStatus' />
                                <label htmlFor={`one${option.id}`} >
                                    <span></span>
                                    {option.value}
                                </label>
                            </ListItem>
                        ))}
                        </DropDownList>
                    </DropDownListContainer>
                    
                </DropDownContainer>
            </DropDownMain>
        </CustomSelect>

        <TextField>
            <Placeholder>Электронная почта</Placeholder>
            <InputContainer>
                <Input type='email'
                    onChange={(event) => props.setEmail(event.target.value)}
                    onBlur={(event) => checkErrorEmail(event)}
                    onFocus={() => setErrorEmail(false)}
                />
            </InputContainer>
        </TextField>

        <TextField>
            <Placeholder>Контактный телефон</Placeholder>
            <InputContainer>
                <InputMask 
                    className='input-phone' 
                    mask='+7(999)999-99-99' 
                    placeholder='+7(___)___-__-__'
                    onChange={(event) => props.setPhone(event.target.value)}
                    onBlur={(event) => checkErrorPhone(event)}
                    onFocus={() => setErrorPhone(false)}
                />
            </InputContainer>
        </TextField>
    </Container>
}

const Container = styled.div<any>`
    opacity: ${({ step }) => step == 2 ? '1' : '0'};
    position: ${({ step }) => step == 2 ? 'static' : 'absolute'};
    pointer-events: ${({ step }) => step == 2 ? 'auto' : 'none'};

    display: flex;
    flex-direction: column;
    gap: 28px 0;
    margin-bottom: 60px;
    max-width: 75%;
`

const TextField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0 60px;
`

const Placeholder = styled.p`
    width: 225px;
    margin-bottom: 0;
`

const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 15px 25px;
    border: 1.5px solid rgba(50, 50, 50, 0.5);
    border-radius: 8px;
    transition: .4s;

    outline: none;

    font-weight: 400;
    font-size: 13px;
    color: #323232;

    &:focus {
        transition: .4s;
        border-color: #2F4395;
    }
`

const CustomSelect = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0 60px;
`

// Select
const DropDownContainer = styled.div`
    width: 100%;
    
`

const DropDownHeader = styled.div`
    position: relative;
    display: flex;
    align-items: center;
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

const DropDownMain = styled.div`
    width: 100%;
    position: relative;
`

const DropDownListContainer = styled.div<any>`
    transition: height .4s;
    position: absolute;
    z-index: 2;
    height: ${({isOpen}) => isOpen ? '200' : '0'}px;
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
    gap: 12px 0;
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
    padding-left: 0;
    list-style: none;
`

const InputContainer = styled.div`
    position: relative;
    width: 100%;
`

const DropdownIcon = styled.div<any>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 17px;
    transition: .4s;

    rotate: ${({open}) => open ? '180deg': '0deg'};
`

export default StepPersonal