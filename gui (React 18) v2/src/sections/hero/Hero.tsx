import React from 'react';
import Actions from '../../components/actions/Actions';
import HeroPhoto from '../../components/hero-photo/HeroPhoto';
import Socials from '../../components/socials/Socials';
import './hero.css';


const Hero = () => {
  
  return (
    <section id='hero' className='hidden container-hero'>

      <HeroPhoto />

      <div>
        <div className="section-header">
          <h4>Cześć! Nazywam się</h4>
          <h1>Mateusz</h1>
          <h3>Jestem frontend developerem</h3>
        </div>
        
        <Actions />
      </div>
      
      <Socials />
         
    </section>
  )
};

export default Hero;