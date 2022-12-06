import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import get from 'axios'

import Container from "./ui/container";
import Breadcrumbs from "./ui/breadcrumbs";
import Title from "./ui/title";
import Text from "./ui/text";
import Tips from "./ui/tips";
import Picture from "./ui/picture";

const News = () => {
    const [data, setData] = useState<any>()
    const [load, setLoad] = useState(false)
    const [news, setNews] = useState()

    useEffect(() => {
        get(`http://localhost:1337/api/news/1?populate=image`).then((res) => {
            setData(res.data.data)
            console.log(res.data.data)
            setLoad(true)
        })

        get(`http://localhost:1337/api/news?populate=image`).then((res) => {
            setNews(res.data.data)
        })
    }, [])

    return load && <Container>
        <NewsContent>
            <NewsContentText>
                <Breadcrumbs />
                <Title
                    date={data.attributes.createdAt}
                    tag={data.attributes.tag}
                    title={data.attributes.title}
                />
                <Text 
                    text={data.attributes.text}
                />
            </NewsContentText>

            <NewsContentImage>
                <Picture
                    image={data.attributes.image.data.attributes.url}
                />
            </NewsContentImage>
        </NewsContent>

        <TipsContent>
            <Tips 
                news={news}
                id={data.id}
            />
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