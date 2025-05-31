import React from 'react';
import './hero.css';
import Actions from '../../components/actions/Actions';
import ME from '@portfolio/shared/assets/personal/me2.jpg';
import Socials from '../../components/socials/Socials';


const Hero = () => {
  
  return (
    <header id='header'>
      <div className="container header-container">

        <div className="me">
          <img src={ME} alt="me" className='me-img'/>
        </div>

        <div className='header-content'>
          <h4 className="text-light">Cześć! Nazywam się</h4>
          <h1>Mateusz</h1>
          <h4>Jestem frontend developerem</h4>

          <Actions />
        </div>
        
        <Socials />

      </div>
    </header>
  )
}

export default Hero;