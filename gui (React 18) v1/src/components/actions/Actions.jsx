import React from 'react';
import CV from '../../assets/personal/cv.pdf';
import './actions.css';


const Actions = () => {
  return (
    <div className='actions'>

      <a href={CV} download='CV Mateusz Chalik' className='btn btn-primary'>Pobierz CV</a>

    </div>
  )
}

export default Actions;