import React from 'react';
import './socials.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs';


const Socials = () => {
  
  return (
    <div className='socials'>

      <a href="https://www.linkedin.com/in/mateusz-chalik/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/matCh00" target='_blank' rel="noreferrer"><BsGithub/></a>

    </div>
  )
}

export default Socials;