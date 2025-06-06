import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Experience from './sections/experience/Experience';
import Portfolio from './sections/portfolio/Portfolio';
import Services from './sections/services/Services';
import Contact from './sections/contact/Contact';

function App() {

  return (
    <Router>
      <div className="app">

        <Header />

        <main>
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Services />
          <Contact />
        </main>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
