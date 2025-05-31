import React from 'react';
import './actions.css';
const CV = require('@portfolio/shared/assets/personal/cv.pdf');


const Actions = () => {
  
  return (
    <div className='actions'>

      <a href={CV} download='CV Mateusz Chalik' className='button button-primary'>Pobierz CV</a>

    </div>
  )
}

export default Actions;