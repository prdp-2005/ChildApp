import Banner from '@/components/AboutComponents/Banner'
import React from 'react'
import Contact from '@/components/HomeComponents/contact'
import AboutChild from '@/components/AboutComponents/AboutChild'
import NewFeature from '@/components/AboutComponents/NewFeature'

const About = () => {
  return (
    <>
      <Banner />
      <AboutChild />
      <NewFeature />
      <Contact />
    </>
  )
}

export default About
