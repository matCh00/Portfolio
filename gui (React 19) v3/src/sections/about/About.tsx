import React from "react";
import './about.css';
import calculatYearsMonth from "@portfolio/shared/sections/about"
import Card1 from "src/components/card1/Card1";
import {BiTimeFive} from "react-icons/bi";
import {CgCodeSlash} from "react-icons/cg";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import {FaAngular, FaReact} from "react-icons/fa";
import {TbFileTypeCss, TbFileTypeHtml} from "react-icons/tb";


const About = () => {
  
  return (
    <section id='about'>

      <div className="section-header">
        <h5 className="color-primary-text-dark">Dowiedz się więcej</h5>
        <h2 className="color-secondary">O mnie</h2>
      </div>

      <div className="about-cards">

        <Card1>
          <BiTimeFive className='bigger-icon color-secondary'/>
          <h5 className='color-primary-text-dark'>Doświadczenie</h5>
          <p className='color-primary-text'>{calculatYearsMonth()} doświadczenia na stanowisku frontend developera</p>
        </Card1>

        <Card1>
          <CgCodeSlash className='bigger-icon color-secondary'/>
          <h5 className='color-primary-text-dark'>Najczęściej używane technologie</h5>
          <p className='color-primary-text technologies'><FaAngular/><FaReact/><TbFileTypeCss/><TbFileTypeHtml/></p>
        </Card1>

        <Card1>
          <AiOutlineFundProjectionScreen className='bigger-icon color-secondary'/>
          <h5 className='color-primary-text-dark'>Projekty</h5>
          <p className='color-primary-text'>Wiele projektów komercyjnych oraz własnych</p>
        </Card1>
        
      </div>

    </section>
  )
}

export default About;