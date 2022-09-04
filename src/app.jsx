import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experiece from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonials/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function app() {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experiece />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />


    </>
  )
}

export default app