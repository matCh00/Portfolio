import React from 'react';
import './heroPhoto.css';
const ME = require("@portfolio/shared/assets/personal/me3.png");


const HeroPhoto = () => {

  return (
    <div className="image-container">

      <img src={ME} alt="me" className='hero-img'/>
      
    </div>
  )
};

export default HeroPhoto;