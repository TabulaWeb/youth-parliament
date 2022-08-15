// Import global npm modules
import { atom } from 'jotai'

// Default theme
const lightTheme = atom({
  // Set values
  container: 1240,
  margin: 50,
  padding: 20,
  radius: 6,

  // Set fonts
  inter: 'Inter, sans-serif',
  golos: 'Golos',

  // Set breakpoints
  tablet: '@media (max-width: 768px)',
  phone: '@media (max-width: 576px)',

  // Set colors
  primary: '#0070f3',
  background: '#f2f2f6',
  card: '#ffffff',
  border: '#eeeeee',
  text: '#323232',
  light: '#888888',
  hover: '#cccccc'
})

// Default theme
const darkTheme = atom({
  // Set values
  container: 1240,
  margin: 50,
  padding: 20,
  radius: 6,

  // Set fonts
  inter: 'Inter, sans-serif',
  golos: 'Golos',

  // Set breakpoints
  tablet: '@media (max-width: 768px)',
  phone: '@media (max-width: 576px)',

  // Set colors
  primary: '#0070f3',
  background: '#f2f2f6',
  card: '#ffffff',
  border: '#eeeeee',
  text: '#323232',
  light: '#888888',
  hover: '#cccccc'
})

export { lightTheme, darkTheme  }