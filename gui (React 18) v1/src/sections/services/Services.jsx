import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';
import {services} from '@portfolio/shared/sections/services';


const Services = () => {

  return (
    <section id='services'>

      <h5>Co oferuję</h5>
      <h2>Usługi</h2>

      <div className="container services__container">

        {services.map(s => {
          return (
            <article className="service" key={s.key}>
              <div className="service__head">
                <h3>{s.key}</h3>
              </div>

              <ul className="service__list">
                {s.values.map(v => {
                  return (
                    <li key={v.key}>
                      <BiCheck className='service__list-icon' />
                      <p>{v.key}</p>
                    </li>
                  )
                })}
                
              </ul>
            </article>
          )
        })}
        
      </div>

    </section>
  )
}

export default Services;