// Import global npm modules
import { FC } from 'react'
import { Html, Head } from 'next/document'

// Create Props interface
interface Props {
  children: JSX.Element
}

// Create Container ui
const Container: FC<Props> = ({ children }) => {

  // Return jsx
  return <Html lang='ru'>
    <Head> 
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} /> 
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Head>
    {children}
  </Html>

}

// Export default Container ui
export default Container