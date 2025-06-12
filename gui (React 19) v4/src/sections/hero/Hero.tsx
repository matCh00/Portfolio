import React from "react";
import './hero.css';
import Socials from "src/components/socials/Socials";
import Actions from "src/components/actions/Actions";
import HeroPhoto from "src/components/hero-photo/HeroPhoto";


const Hero = () => {
  
  return (
    <section id="hero">

      <div className="hero-container">
        <h1>Cześć! Nazywam się <span>Mateusz</span></h1>
        <h3>Jestem <span className="animated-text"></span></h3>

        <Socials />

        <Actions />
      </div>

      <HeroPhoto />

    </section>
  )
}

export default Hero;