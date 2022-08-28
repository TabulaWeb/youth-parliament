import React from 'react'
import styled from 'styled-components'

const StepRules = ({ step }) => {
    return <Container step={step}>
        <Title>Пожалуйста, внимательно прочитайте правила использования сервиса</Title>
        <Text>Порядок рассмотрения обращений граждан, направленных через Интернет-приемную государственных органов Псковской области:</Text>
        <ListItem>
            <ListText>Интернет приемная Молодежного парламента при Псковском областном Собрании депутатов функционирует в целях реализации прав граждан на обращения в государственные органы Псковской области в рамках Федерального закона от 02.05.2006 г. № 59-ФЗ «О порядке рассмотрения обращений граждан Российской Федерации».</ListText>
            <ListText>Ответ на обращение (запрос) направляется заявителю в письменном или электронном виде в срок, установленный Федеральным законом от 02.05.2006 г. № 59-ФЗ «О порядке рассмотрения обращений граждан Российской Федерации».</ListText>
            <ListText>Информация о персональных данных граждан, направивших запрос в электронном виде, хранится и обрабатывается с соблюдением требований российского законодательства о персональных данных.</ListText>
        </ListItem>    
    </Container>
}

const Container = styled.div`
    opacity: ${({ step }) => step == 1 ? '1' : '0'};
    position: ${({ step }) => step == 1 ? 'static' : 'absolute'};
    pointer-events: ${({ step }) => step == 1 ? 'auto' : 'none'};
`

const Title = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #2F4395;
    margin-bottom: 28px;
`

const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #323232;
    margin-bottom: 20px;
`

const ListItem = styled.ol`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    gap: 16px 0;
    list-style: none;
    counter-reset: item;
    margin-bottom: 60px;
`

const ListText = styled.li`
    counter-increment: item;
    gap: 16px 0;
    display: flex;
    flex-direction: row;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #323232;

    &:before {
        margin-right: 16px;
        content: counter(item) ".";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #2F4395;
    }
`

export default StepRules