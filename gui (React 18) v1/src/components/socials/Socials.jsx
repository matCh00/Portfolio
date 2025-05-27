import React from 'react';
import './socials.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {FaFigma} from 'react-icons/fa';


const Socials = () => {
  
  return (
    <div className='socials'>

      <a href="https://www.linkedin.com/in/mateusz-chalik/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/matCh00" target='_blank'><BsGithub/></a>

    </div>
  )
}

export default Socials;