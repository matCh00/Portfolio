import React from 'react';
import './about.css';
import Card1 from '../../components/card1/Card1';
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

          <Card1>
            <FaAward className='about-icon'/>
            <h5>Doświadczenie</h5>
            <small>{calculatYearsMonth()} doświadczenia na stanowisku frontend developera</small>
          </Card1>

          <Card1>
            <CgCodeSlash className='about-icon'/>
            <h5>Najczęściej używane technologie</h5>
            <p className='technologies'><FaAngular/> <FaReact/> <DiCss3/> <AiFillHtml5/></p>
          </Card1>

          <Card1>
            <VscFolderLibrary className='about-icon'/>
            <h5>Projekty</h5>
            <small>Wiele projektów komercyjnych oraz własnych</small>
          </Card1>

        </div>
      </div>

    </section>
  )
}

export default About;