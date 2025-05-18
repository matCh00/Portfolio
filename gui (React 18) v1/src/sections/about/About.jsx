import React from 'react';
import './about.css';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
import {CgCodeSlash} from 'react-icons/cg';
import {FaAngular, FaReact} from 'react-icons/fa';
import {DiCss3} from 'react-icons/di';
import {AiFillHtml5} from 'react-icons/ai';


const About = () => {

  function calculateMonthsFromJuly2022() {
    const startDate = new Date(2022, 6, 1);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    if (months === 0) {
      return `${years} ${(years === 2 || years === 3 || years === 4) ? 'lata' : 'lat'}`;
    }
    return `${years} ${(years === 2 || years === 3 || years === 4) ? 'lata' : 'lat'}` + ` i ${months} miesięcy`;
  }

  return (
    <section id='about'>

      <h5>Dowiedz się więcej</h5>
      <h2>O mnie</h2>

      <div className="container about__container">
        <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Doświadczenie</h5>
            <small>{calculateMonthsFromJuly2022()} doświadczenia na stanowisku frontend developera</small>
          </article>

          <article className='about__card'>
            <CgCodeSlash className='about__icon'/>
            <h5>Najczęściej używane technologie</h5>
            <p><FaAngular/> &nbsp; <FaReact/> &nbsp; <DiCss3/> &nbsp; <AiFillHtml5/></p>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projekty</h5>
            <small>Wiele projektów komercyjnych oraz własnych</small>
          </article>

        </div>

      </div>

    </section>
  )
}

export default About;