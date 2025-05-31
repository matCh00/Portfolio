import React from 'react';
import './navbar.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineStar, AiOutlineFundProjectionScreen, AiOutlineCustomerService} from 'react-icons/ai';
import {BsChatQuote} from 'react-icons/bs';


const Navbar = () => {

  return (
    <>
      <nav className='desktop'>
      
        <a href="#about">O mnie</a>

        <a href="#experience">Doświadczenie</a>

        <a href="#portfolio">Portfolio</a>

        <a href="#services">Usługi</a>

        <a href="#contact">Kontakt</a>

      </nav>


      <nav className='mobile'>
              
        <a href="#about"><AiOutlineUser/></a>

        <a href="#experience"><AiOutlineStar/></a>

        <a href="#portfolio"><AiOutlineFundProjectionScreen/></a>

        <a href="#services"><AiOutlineCustomerService/></a>

        <a href="#contact"><BsChatQuote/></a>
        
      </nav>
    
    </>
  )
};

export default Navbar;