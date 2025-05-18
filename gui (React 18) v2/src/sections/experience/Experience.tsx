import React from 'react';
import Card2 from '../../components/card-2/Card2';
import './experience.css';
import {SlGraduation} from 'react-icons/sl';


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
                    <SlGraduation className='clr-secondary'/> {e.key} &nbsp;&nbsp; 
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
                    <SlGraduation className='clr-secondary'/> {e.key} &nbsp;&nbsp; 
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
                    <SlGraduation className='clr-secondary'/> {e.key} &nbsp;&nbsp; 
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