import React from 'react';
import './actions.css';
const CV = require('../../assets/personal/cv.pdf');


const Actions = () => {
  return (
    <div className='actions'>

      <a href={CV} download='CV Mateusz Chalik' className='btn'>Pobierz CV</a>
      
    </div>
  )
}

export default Actions;