// Import global npm modules
import React from 'react'

import Button from "#/components/button"

// Import local ui modules
import Container from './ui/container'
import Text from './ui/text'

// Create Index main
const Index = () => {

  // Return jsx
  return <Container>
    <Text 
      title='Интернет приемная Молодежного парламента при Псковском областном Собрании депутатов'
      subtitle='С помощью интернет-приемной Вы можете направить в электронной форме обращение в адрес Губернатора Псковской области, заместителей Губернатора области, исполнительных органов Псковской области.'
    />
    <Button />
  </Container>

}

// Export default Index main
export default Index