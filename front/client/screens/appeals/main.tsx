import process from 'process'

import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import get from 'axios'

import Container from './ui/container'
import Breadctumbs from './ui/breadcrumbs'
import Title from './ui/title'
import Address from './ui/address'
import Answer from './ui/answer'

const Appeals = () => {

  const [
    data,
    setData
  ] = useState<any>([])
  const [
    load,
    setLoad
  ] = useState(false)

  useEffect(() => {

    setLoad(false)
    get(`${process.env.NEXT_PUBLIC_API}/appeals/${document.location.pathname.split('/')[2]}`).then(res => {

      setData(res.data.data)
      setLoad(true)
      console.log(res.data)
    
    })
  
  }, [])

  return load && <Container>
    <Breadctumbs number={data.id} />
    <Title title={data.attributes.title} date={data.attributes.updatedAt}/>
    <Address number={data.id} text={data.attributes.appeal}/>
    <Answer adress={data.attributes.adress} answer={data.attributes.answer}/>
  </Container>

}

export default Appeals