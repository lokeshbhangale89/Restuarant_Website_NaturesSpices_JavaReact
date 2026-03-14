import React from 'react'
import HomeBanner from './HomeBanner/HomeBanner'
import OurChef from './OurChef/OurChef'
import Gallery from './Gallery/Gallery'
import About from './About/About'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <About />
      <OurChef /> 
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home