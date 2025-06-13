import React from 'react';
import './experience.css';
import Card1 from '../../components/card1/Card1';
import {BsPatchCheckFill} from 'react-icons/bs';
import {experienceFront, experienceBackend, experienceOthers} from '@portfolio/shared/sections/experience';


const Experience = () => {

  return (
    <section id='experience'>

      <h5>Co potrafię</h5>
      <h2>Doświadczenie</h2>

      <div className="container experience-container">

        <Card1>
          <h3>Frontend</h3>
          <div className="experience-content">
            {experienceFront.map(e => {
              return(
                <article key={e.key} className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                    <h4>{e.key}</h4>
                    <small className='color-primary-text-dark'>{e.value}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </Card1>

        <Card1>
          <h3>Backend</h3>
          <div className="experience-content">
            {experienceBackend.map(e => {
              return(
                <article key={e.key} className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                    <h4>{e.key}</h4>
                    <small className='color-primary-text-dark'>{e.value}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </Card1>

        <Card1>
          <h3>Inne</h3>
          <div className="experience-content">
            {experienceOthers.map(e => {
              return(
                <article key={e.key} className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                    <h4>{e.key}</h4>
                    <small className='color-primary-text-dark'>{e.value}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </Card1>

      </div>

    </section>
  )
}

export default Experience;