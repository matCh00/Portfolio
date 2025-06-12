import React from "react";
import './experience.css';
import {experienceFront, experienceBackend, experienceOthers} from '@portfolio/shared/sections/experience'
import Card3 from "src/components/card3/Card3";
import {IoSettingsOutline} from "react-icons/io5";
import {MdOutlineDesktopWindows} from "react-icons/md";
import {SlGraduation} from "react-icons/sl";


const Experience = () => {
  
  return (
    <section id="experience">

      <div className="section-header">
        <h5 className="color-primary-text-dark">Co potrafię</h5>
        <h2 className="color-secondary">Doświadczenie</h2>
      </div>

      <div className="experience-cards">
        
        <Card3 header="Frontend">
          {experienceFront.map(e => {
            return (
              <p key={e.key}>
                <MdOutlineDesktopWindows className='color-secondary'/> {e.key}
              </p>
            )
          })}
        </Card3>

        <Card3 header="Backend">
          {experienceBackend.map(e => {
            return (
              <p key={e.key}>
                <IoSettingsOutline className='color-secondary'/> {e.key}
              </p>
            )
          })}
        </Card3>

        <Card3 header="Inne">
          {experienceOthers.map(e => {
            return (
              <p key={e.key}>
                <SlGraduation className='color-secondary'/> {e.key}
              </p>
            )
          })}
        </Card3>

      </div>
      
    </section>
  )
}

export default Experience;