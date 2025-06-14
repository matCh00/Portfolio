import React from 'react';
import './footer.css';
import {FaFacebook} from 'react-icons/fa'


const Footer = () => {
  
  return (
    <footer>
      
      <ul className='permalinks'>
        <li><a href="#">Streszczenie</a></li>
        <li><a href="#about">O mnie</a></li>
        <li><a href="#experience">Doświadczenie</a></li>
        <li><a href="#services">Usługi</a></li>
        <li><a href="#portfolio">Projekty</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>

      <div className="footer-copyright">
        <small>&copy; Mateusz Chalik. Wszelkie prawa zastrzeżone.</small>
      </div>

    </footer>
  )
}

export default Footer;