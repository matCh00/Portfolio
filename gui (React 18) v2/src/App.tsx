import React, {useEffect} from 'react';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Experience from './sections/experience/Experience';
import Footer from './components/footer/Footer';
import Hero from './sections/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Portfolio from './sections/portfolio/Portfolio';
import Services from './sections/services/Services';
import {HashRouter as Router} from 'react-router-dom'

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        else {
          entry.target.classList.remove('show');
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }, [])

  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
