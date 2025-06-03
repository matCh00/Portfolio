import React from 'react';
import './about.css';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
import {CgCodeSlash} from 'react-icons/cg';
import {FaAngular, FaReact} from 'react-icons/fa';
import {DiCss3} from 'react-icons/di';
import {AiFillHtml5} from 'react-icons/ai';
import calculatYearsMonth from '@portfolio/shared/sections/about';


const About = () => {

  return (
    <section id='about'>

      <h5>Dowiedz się więcej</h5>
      <h2>O mnie</h2>

      <div className="container about-container">
        <div className="about-cards">

          <article className='about-card'>
            <FaAward className='about-icon'/>
            <h5>Doświadczenie</h5>
            <small>{calculatYearsMonth()} doświadczenia na stanowisku frontend developera</small>
          </article>

          <article className='about-card'>
            <CgCodeSlash className='about-icon'/>
            <h5>Najczęściej używane technologie</h5>
            <p className='technologies'><FaAngular/> <FaReact/> <DiCss3/> <AiFillHtml5/></p>
          </article>

          <article className='about-card'>
            <VscFolderLibrary className='about-icon'/>
            <h5>Projekty</h5>
            <small>Wiele projektów komercyjnych oraz własnych</small>
          </article>

        </div>

      </div>

    </section>
  )
}

export default About;