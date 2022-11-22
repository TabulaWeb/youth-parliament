// Import global npm modules
import { FC } from 'react'
import { Main, NextScript } from 'next/document'

// Create Body ui
const Body: FC = () => {

  // Return jsx
  return <body>
    <Main/>
    <NextScript/>
  </body>

}

// Export default Body ui
export default Body