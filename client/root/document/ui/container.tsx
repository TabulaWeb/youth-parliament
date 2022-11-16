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
    <Head/>
    {children}
  </Html>

}

// Export default Container ui
export default Container