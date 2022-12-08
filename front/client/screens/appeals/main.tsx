import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import get from 'axios'

import Container from "./ui/container";
import Breadctumbs from "./ui/breadcrumbs";
import Title from "./ui/title";
import Address from "./ui/address";
import Answer from './ui/answer';

const Appeals = () => {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(false)
        get(`http://localhost:1337/api/appeals/2`).then(res => {
            setData(res.data.data)
            setLoad(true)
        })
    }, [])

    return load && <Container>
        <Breadctumbs number={data.id} />
        <Title title={data.attributes.title} date={data.attributes.updatedAt}/>
        <Address number={data.id} text={data.attributes.appeal}/>
        <Answer adress={data.attributes.adress} answer={data.attributes.answer}/>
    </Container>
}

export default Appeals;