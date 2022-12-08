import * as React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import AboutSection2 from '../components/AboutSection2'
import HighlightProducts from '../components/HighlightProducts'
import Footer from '../components/Footer'
import BookTable from '../components/BookTable'
const IndexPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AboutSection2 />
      <HighlightProducts />
      <BookTable />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
