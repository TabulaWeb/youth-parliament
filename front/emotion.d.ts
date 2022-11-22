// Import global npm modules
import '@emotion/react'

// Declare @emotion/react module
declare module '@emotion/react' {
  
  // Export Theme interface
  export interface Theme {

    // Set values
    container: number
    sidebar: number
    block: number
    distance: number
    margin: number
    padding: number
    radius: number

    // Set fonts
    inter: string

    // Set colors
    primary: string
    secondary: string
    success: string
    info: string
    warning: string
    danger: string
    background: string
    card: string
    border: string
    shadow: string
    text: string
    light: string

    // Set breakpoints
    tablet: string
    phone: string

  }
  
}