// Create value api
const value = {
    fetcher: (path) => fetch(`/api${path}`)
      .then((res) => res.json())
  }
  
  // Export default value api
  export default value