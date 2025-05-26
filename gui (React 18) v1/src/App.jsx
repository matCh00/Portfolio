import React from 'react';
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Experience from './sections/experience/Experience';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import {HashRouter as Router} from 'react-router-dom'

const App = () => {

  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App;