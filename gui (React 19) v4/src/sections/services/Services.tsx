import React from "react";
import './services.css';
import {services} from '@portfolio/shared/sections/services';
import Card2 from "src/components/card2/Card2";
import {IoCheckboxOutline} from "react-icons/io5";


const Services = () => {
  
  return (
    <section id="services">

      <div className="section-header">
        <h5 className="color-primary-text-dark">Co oferuję</h5>
        <h2 className="color-secondary">Usługi</h2>
      </div>

      <div className="services-cards">

        {services.map(s => {
            return (
              <Card2 key={Math.random()}>
                <h2 className='color-primary-text'>{s.key}</h2>

                {s.values.map(v => {
                  return (
                    <p key={v.key}>
                      <IoCheckboxOutline className='color-primary-text'/> &nbsp;
                      <span className="color-primary-text">{v.key}</span>
                    </p>
                  )
                })}
              </Card2>
            )
          })}

      </div>

    </section>
  )
}

export default Services;