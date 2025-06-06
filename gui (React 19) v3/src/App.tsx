import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Experience from './sections/experience/Experience';
import Portfolio from './sections/portfolio/Portfolio';
import Services from './sections/services/Services';
import Contact from './sections/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';


function App() {

  return (
    <Router>
      <main>

        <video autoPlay loop muted className='background-video'>
          <source src='background.mp4' type='video/mp4' />
        </video>

        <div className="backdrop-blur"></div>

        <article className="content">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Services />
          <Contact />
          <Footer />
        </article>

      </main>
    </Router>
  );
}

export default App;
