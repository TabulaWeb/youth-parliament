// Import global npm modules
import React from 'react'
import dynamic from 'next/dynamic';

import HomeSection from './ui/home/homeSection'
// import AboutSection from './ui/about/aboutSection'
// import MediaSection from './ui/media/mediaSection'
// import NewsSection from './ui/news/newsSection'
// import FormSection from './ui/form/formSection'
// import ApplicationsSection from './ui/applications/applicationsSection'

const AboutSection = dynamic(() => import('./ui/about/aboutSection'), {
  ssr: false,
});

const MediaSection = dynamic(() => import('./ui/media/mediaSection'), {
  ssr: false,
});

const NewsSection = dynamic(() => import('./ui/news/newsSection'), {
  ssr: false,
});

const FormSection = dynamic(() => import('./ui/form/formSection'), {
  ssr: false,
});

const ApplicationsSection = dynamic(() => import('./ui/applications/applicationsSection'), {
  ssr: false,
});

// Create Index main
const Index = () => {

  // Return jsx
  return <>
    <HomeSection />
    <AboutSection />
    <MediaSection />
    <NewsSection />
    <FormSection />
    <ApplicationsSection />
  </>

}

// Export default Index main
export default Index