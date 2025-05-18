import React from 'react';
import Card2 from '../../components/card-2/Card2';
import './services.css';
import {AiOutlineCheck} from 'react-icons/ai';

const Services = () => {

  const services = [
    {key: 'Implementacja GUI', values: [
      {key: 'Najnowsze wersje Angular'},
      {key: 'Starsze wersje Angular'},
      {key: 'Najnowsze wersje React'},
      {key: 'Najnowsze wersje Vue'},
      {key: 'Znajomość PrimeFaces'},
    ]},
    {key: 'Dobre praktyki programowania', values: [
      {key: 'Tworzenie czystego kodu'},
      {key: 'Dobre praktyki UI/UX'},
      {key: 'Implementacja animacji'},
      {key: 'Responsywność aplikacji'},
    ]},
    {key: 'Zarządzanie aplikacją', values: [
      {key: 'Dobre praktyki Git'},
      {key: 'Znajomość Docker'},
    ]}
  ]

  return (
    <section id='services' className='hidden'>

      <div className="container">

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
                        <AiOutlineCheck className='clr-secondary'/> {v.key}
                      </p>
                    )
                  })}
                </div>
              </Card2>
          
            )
          })}

        </div>

      </div> 
            
    </section>
  )
};

export default Services;