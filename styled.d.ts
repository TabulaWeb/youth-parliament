// Import global npm modules
import 'styled-components'

// Declare styled-components module
declare module 'styled-components' {

  // Export DefaultTheme interface
  export interface DefaultTheme {

    // Set values types
    container: number
    margin: number
    padding: number
    radius: number

    // Set colors types
    primary: string
    secondary: string
    background: string
    card: string
    text: string
    shadow: string
    textOpacity: string
    textLight: string

    // Set breakpoints types
    tablet: string
    phone: string

  }

}