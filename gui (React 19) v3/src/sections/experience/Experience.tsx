import React from "react";
import './experience.css';
import {experienceFront, experienceBackend, experienceOthers} from '@portfolio/shared/sections/experience'
import Card2 from "src/components/card2/Card2";
import {SlGraduation} from "react-icons/sl";
import {IoSettingsOutline} from "react-icons/io5";
import {MdOutlineDesktopWindows} from "react-icons/md";


const Experience = () => {
  
  return (
    <section id='experience'>

      <div className="section-header">
        <h5 className="color-primary-text-dark">Co potrafię</h5>
        <h2 className="color-secondary">Doświadczenie</h2>
      </div>

      <div className="experience-cards">
        
        <Card2>
          <h3 className='color-primary-text-dark'>Frontend</h3>
          {experienceFront.map(e => {
            return (
              <p key={e.key}>
                <MdOutlineDesktopWindows className='color-secondary'/> {e.key}
              </p>
            )
          })}
        </Card2>

        <Card2>
          <h3 className='color-primary-text-dark'>Backend</h3>
          {experienceBackend.map(e => {
            return (
              <p key={e.key}>
                <IoSettingsOutline className='color-secondary'/> {e.key}
              </p>
            )
          })}
        </Card2>

        <Card2>
          <h3 className='color-primary-text-dark'>Inne</h3>
          {experienceOthers.map(e => {
            return (
              <p key={e.key}>
                <SlGraduation className='color-secondary'/> {e.key}
              </p>
            )
          })}
        </Card2>

      </div>

    </section>
  )
}

export default Experience;