import React from 'react';
import Card2 from '../../components/card-2/Card2';
import './experience.css';
import {SlGraduation} from 'react-icons/sl';
import {experienceFront, experienceBackend, experienceOthers} from '@portfolio/shared/sections/experience'


const Experience = () => {

  return (
    <section id='experience' className='hidden'>
      
      <div className="container">

        <div className="section-header">
          <h4>Co potrafię</h4>
          <h1>Doświadczenie</h1>
        </div>

        <div className="experience-content">

          <Card2 header={'Frontend'} lightHeader={false}>
            <div className="experience-content-card">
              {experienceFront.map(e => {
                return (
                  <p key={e.key}>
                    <SlGraduation className='color-secondary'/> {e.key} &nbsp;&nbsp; 
                  </p>
                )
              })}
            </div>
          </Card2>

          <Card2 header={'Backend'} lightHeader={false}>
            <div className="experience-content-card">
              {experienceBackend.map(e => {
                return (
                  <p key={e.key}>
                    <SlGraduation className='color-secondary'/> {e.key} &nbsp;&nbsp; 
                  </p>
                )
              })}
            </div>          
          </Card2>
          
          <Card2 header={'Inne'} lightHeader={false}>
            <div className="experience-content-card">
              {experienceOthers.map(e => {
                return (
                  <p key={e.key}>
                    <SlGraduation className='color-secondary'/> {e.key} &nbsp;&nbsp; 
                  </p>
                )
              })}
            </div> 
          </Card2>

        </div>
  
      </div>  

    </section>
  )
};

export default Experience;