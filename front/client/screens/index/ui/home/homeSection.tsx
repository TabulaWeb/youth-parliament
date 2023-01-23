// Import global npm modules
import React from 'react'


// Import global ui modules

// Import local ui modules
import Container from './container'
import Text from './text'


// Create HomeSection ui
const HomeSection = () => {

  

  // Return jsx
  return <Container>
    <Text
      title='Интернет приемная Молодежного парламента при Псковском областном Собрании депутатов'
      subtitle='С помощью интернет-приемной Вы можете направить в электронной форме обращение в адрес Губернатора Псковской области, заместителей Губернатора области, исполнительных органов Псковской области.'
    />
  </Container>

}

// Export default Container ui
export default HomeSection