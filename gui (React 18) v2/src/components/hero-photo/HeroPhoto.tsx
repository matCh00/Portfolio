import React from 'react';
import './heroPhoto.css';
const ME = require("@portfolio/shared/assets/personal/me.png");


const HeroPhoto = () => {

  return (
    <div className="image-cropper">

      <img src={ME} alt="me" className='hero-img'/>
      
    </div>
  )
};

export default HeroPhoto;