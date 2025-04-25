import React from 'react';
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Experience from './sections/experience/Experience';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App;