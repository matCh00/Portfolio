import React from "react";
import './about.css';
import calculatYearsMonth from "@portfolio/shared/sections/about"
import {BiTimeFive} from "react-icons/bi";
import {CgCodeSlash} from "react-icons/cg";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import {FaAngular, FaReact} from "react-icons/fa";
import {TbFileTypeCss, TbFileTypeHtml} from "react-icons/tb";
import Card2 from "src/components/card2/Card2";


const About = () => {
  
  return (
    <section id="about">

      <div className="section-header">
        <h5 className="color-primary-text-dark">Dowiedz się więcej</h5>
        <h2 className="color-secondary">O mnie</h2>
      </div>

      <div className="about-cards">

        <Card2>
          <BiTimeFive className='bigger-icon color-secondary'/>
          <h5 className='color-primary-text-dark'>Doświadczenie</h5>
          <p className='color-primary-text'>{calculatYearsMonth()} doświadczenia na stanowisku frontend developera</p>
        </Card2>

        <Card2>
          <CgCodeSlash className='bigger-icon color-secondary'/>
          <h5 className='color-primary-text-dark'>Najczęściej używane technologie</h5>
          <p className='color-primary-text technologies'><FaAngular/><FaReact/><TbFileTypeCss/><TbFileTypeHtml/></p>
        </Card2>

        <Card2>
          <AiOutlineFundProjectionScreen className='bigger-icon color-secondary'/>
          <h5 className='color-primary-text-dark'>Projekty</h5>
          <p className='color-primary-text'>Wiele projektów komercyjnych oraz własnych</p>
        </Card2>
        
      </div>
      
    </section>
  )
}

export default About;