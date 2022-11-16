import React from 'react'
import styled from '@emotion/styled'

const Agreement:any = () => {
    return <Container>
        <Text>Нажимая на кнопку «Продолжить», вы принимаете соглашение</Text>
        <TextLink>о пользовании информационными системами и даете согласие на обработку персональных данных.</TextLink>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Text = styled.span`
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    color: #8B9092;
`

const TextLink = styled.a`
    color: #2F4395;
`

export default Agreement