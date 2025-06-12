import React from 'react';
import './actions.css';
import Button from '../button/Button';
const CV = require('@portfolio/shared/assets/personal/cv.pdf');


const Actions = () => {
  
  return (
    <div className='actions'>

      <a href={CV} download='CV Mateusz Chalik'>
        <Button variant='secondary'>Pobierz CV</Button>
      </a>
      
    </div>
  )
}

export default Actions;