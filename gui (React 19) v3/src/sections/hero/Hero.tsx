import React from "react";
import './hero.css';
import Actions from "src/components/actions/Actions";


const Hero = () => {
  
  return (
    <section id='hero'>

      <div className="section-header">
        <h4 className="color-primary-text">Cześć! Nazywam się</h4>
        <h1 className="color-secondary">Mateusz</h1>
        <h3 className="color-primary-text-dark">Jestem frontend developerem</h3>

        <Actions />
      </div>

    </section>
  )
}

export default Hero;