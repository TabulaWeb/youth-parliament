// Import global npm modules
import { Theme } from '@emotion/react'

// Create theme api
const theme = <Theme>{

  // Set values
  container: 940,
  sidebar: 440,
  block: 45,
  distance: 60,
  margin: 30,
  padding: 20,
  radius: 12,

  // Set fonts
  inter: 'Inter, sans-serif',
  futura: 'Futura PT, sans-serif',

  // Set colors
  primary: '#f08e64',
  secondary: '#2c557c',
  success: '#4caf50',
  info: '#2196f3',
  warning: '#ffc107',
  danger: '#f44336',
  background: '#f5f9ff',
  card: '#ffffff',
  border: '#eff2f6',
  shadow: '#00000011',
  text: '#000000',
  light: '#777777',

  // Set breakpoints
  tablet: '@media (max-width: 768px)',
  phone: '@media (max-width: 576px)'

}

// Export default theme api
export default theme