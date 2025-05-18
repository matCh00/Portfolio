import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';


const Experience = () => {

  const experienceFront = [
    {key: 'Angular', value: ''},
    {key: 'TypeScript', value: ''},
    {key: 'React', value: ''},
    {key: 'Vue', value: ''},
    {key: 'HTML', value: ''},
    {key: 'CSS/SCSS', value: ''},
    {key: 'PrimeFaces', value: ''},
  ]

  const experienceBackend = [
    {key: 'Python', value: ''},
    {key: 'Firebase', value: ''},
  ]

  const experienceOthers = [
    {key: 'React Native', value: ''},
    {key: 'Docker', value: ''},
  ]

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