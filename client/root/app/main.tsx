// Import global npm modules
import { FC } from 'react'
import Layout from './ui/layout'

// Import local ui modules
import Providers from './ui/providers'

// Create Props interface
interface Props {
  Component: any
  router: any
  pageProps: any
}

// Create App main
const App: FC<Props> = ({
  Component,
  pageProps
}) => {

  // Return tsx
  return <Providers {...pageProps}>
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  </Providers>

}

// Export default App main
export default App