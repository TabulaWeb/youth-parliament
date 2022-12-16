// Import global npm modules
import React from 'react'

import HomeSection from './ui/home/homeSection'
import AboutSection from './ui/about/aboutSection'
import MediaSection from './ui/media/mediaSection'
import NewsSection from './ui/news/newsSection'
import FormSection from './ui/form/formSection'
import ApplicationsSection from './ui/applications/applicationsSection'

// Create Index main
const Index = () => {

  // Return jsx
  return <>
    <HomeSection />
    <AboutSection />
    <MediaSection />
    <NewsSection />
    <FormSection />
    <ApplicationsSection/>
  </>

}

// Export default Index main
export default Index