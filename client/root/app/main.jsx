// Import global npm modules
import React from 'react'

// Import local ui modules
import Providers from './ui/providers'
import Layout from './ui/layout'

// Create App main
const App = ({ Component }) => {

  // Return jsx
  return <Providers>
    <Layout>
      <Component/>
    </Layout>
  </Providers>

}

// Export default App main
export default App