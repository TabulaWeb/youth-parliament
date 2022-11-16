// Import global npm modules
import { SWRConfiguration } from 'swr'

// Create value api
const value = <SWRConfiguration>{
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  fetcher: (path) => fetch(`${process.env.NEXT_PUBLIC_API}${path}`)
    .then((res) => res.json())
}

// Export default value api
export default value