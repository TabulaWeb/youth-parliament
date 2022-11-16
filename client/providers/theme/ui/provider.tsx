// Import global npm modules
import { FC } from 'react'
import { ThemeProvider } from '@emotion/react'

// Import local api modules
import theme from '../api/theme'

// Create Props interface
interface Props {
  children: JSX.Element[]
}

// Create Provider ui
const Provider: FC<Props> = ({ children }) => {

  // Return jsx
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>

}

// Export default Provider ui
export default Provider