// Import global npm modules
import { useReducer, useEffect } from 'react'

// Create useDark hook
const useDark = () => {

  // Use useState hook
  const [
    dark,
    setDark
  ] = useReducer((_, { matches }) => matches, false)

  // Use useEffect function
  useEffect(() => {

    // Use matchMedia function
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    // Check matches boolean
    if (media.matches == true) setDark(media)

    // Use addEventListener function
    media.addEventListener('change', setDark)

    // Return function
    return () => media.removeEventListener('change', setDark)

  }, [])

  // Return dark boolean
  return dark

}

// Export default useDark hook
export default useDark