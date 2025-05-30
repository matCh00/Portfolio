import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Experience from './sections/experience/Experience';
import Portfolio from './sections/portfolio/Portfolio';
import Services from './sections/services/Services';
import Contact from './sections/contact/Contact';

function App() {

  return (
    <Router>
      <main className='app-container'>

        <video autoPlay loop muted className='background-video'>
          <source src='background.mp4' type='video/mp4' />
        </video>

        <div className="backdrop-blur"></div>

        <article className="content">
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Services />
          <Contact />
        </article>

      </main>
    </Router>
  );
}

export default App;
