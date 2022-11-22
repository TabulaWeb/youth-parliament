import React from "react";
import styled from "@emotion/styled";

import Container from "./ui/container";
import Breadctumbs from "./ui/breadcrumbs";
import Title from "./ui/title";
import Address from "./ui/address";
import Answer from './ui/answer';

const Appeals = () => {
    return <Container>
        <Breadctumbs/>
        <Title/>
        <Address/>
        <Answer />
    </Container>
}

export default Appeals;