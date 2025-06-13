import React from 'react';
import Card2 from '../../components/card-2/Card2';
import './services.css';
import {AiOutlineCheck} from 'react-icons/ai';
import {services} from '@portfolio/shared/sections/services'


const Services = () => {

  return (
    <section id='services' className='hidden'>

      <div className="section-header">
        <h4>Co oferuję</h4>
        <h1>Usługi</h1>
      </div>

      <div className="services-content">

        {services.map(s => {
          return (
            <Card2 header={s.key} lightHeader={false} key={s.key}>
              <div className="services-content-card">
                {s.values.map(v => {
                  return (
                    <p key={v.key}>
                      <AiOutlineCheck className='color-secondary'/> {v.key}
                    </p>
                  )
                })}
              </div>
            </Card2>
          )
        })}

      </div>
            
    </section>
  )
};

export default Services;