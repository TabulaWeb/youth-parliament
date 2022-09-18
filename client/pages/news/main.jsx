import React from "react";
import styled from "styled-components";

import Container from "./ui/container";
import Breadcrumbs from "./ui/breadcrumbs";
import Title from "./ui/title";
import Text from "./ui/text";
import Tips from "./ui/tips";
import Picture from "./ui/picture";

const News = () => {
    return <Container>
        <NewsContent>
            <NewsContentText>
                <Breadcrumbs />
                <Title />
                <Text />
            </NewsContentText>

            <NewsContentImage>
                <Picture />
            </NewsContentImage>
        </NewsContent>

        <TipsContent>
            <Tips />
        </TipsContent>
    </Container>
}

const NewsContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 460px;
    grid-gap: 0 30px;
    margin-bottom: 160px;
`

const TipsContent = styled.div``

const NewsContentText = styled.div``

const NewsContentImage = styled.div``

export default News;