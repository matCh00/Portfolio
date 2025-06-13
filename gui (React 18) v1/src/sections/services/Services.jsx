import React from 'react';
import './services.css';
import Card2 from '../../components/card2/Card2';
import {BiCheck} from 'react-icons/bi';
import {services} from '@portfolio/shared/sections/services';


const Services = () => {

  return (
    <section id='services'>

      <h5>Co oferuję</h5>
      <h2>Usługi</h2>

      <div className="container services-container">

        {services.map(s => {
          return (
            <Card2 key={s.key} header={s.key}>
              <ul className="service-list">
                {s.values.map(v => {
                  return (
                    <li key={v.key}>
                      <BiCheck className='service-list-icon' />
                      <p>{v.key}</p>
                    </li>
                  )
                })}
              </ul>
            </Card2>
          )
        })}
        
      </div>

    </section>
  )
}

export default Services;