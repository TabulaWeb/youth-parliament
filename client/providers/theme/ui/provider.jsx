// Import global npm modules
import React, { useEffect, useState } from 'react'
import { useAtomValue, useAtom } from 'jotai'
import { ThemeProvider } from 'styled-components'

// Import local api modules
import { lightTheme, darkTheme } from '#/states/theme'

// Import local hooks modules
import useDark from '../hooks/useDark'

// Create Container ui
const Container = ({ children }) => {
  // Use useDark hook
  const checkDark = useDark()

  const light = useAtomValue(lightTheme)
  const dark  = useAtomValue(darkTheme)


  // Return jsx
  return <ThemeProvider theme={checkDark ? dark : light }>
    {children}
  </ThemeProvider>

}

// Export default Container ui
export default Container