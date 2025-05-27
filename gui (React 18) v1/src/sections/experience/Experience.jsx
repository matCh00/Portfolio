import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import {experienceFront, experienceBackend, experienceOthers} from '@portfolio/shared/sections/experience';


const Experience = () => {

  return (
    <section id='experience'>

      <h5>Co potrafię</h5>
      <h2>Doświadczenie</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">

            {experienceFront.map(e => {
              return(
                <article key={e.key} className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4 style={{whiteSpace: 'nowrap'}}>{e.key}</h4>
                    <small className='text-light'>{e.value}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">

            {experienceBackend.map(e => {
              return(
                <article key={e.key} className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4 style={{whiteSpace: 'nowrap'}}>{e.key}</h4>
                    <small className='text-light'>{e.value}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="experience__mobile">
          <h3>Inne</h3>
          <div className="experience__content">

            {experienceOthers.map(e => {
              return(
                <article key={e.key} className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4 style={{whiteSpace: 'nowrap'}}>{e.key}</h4>
                    <small className='text-light'>{e.value}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience;