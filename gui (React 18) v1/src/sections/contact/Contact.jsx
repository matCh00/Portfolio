import React from 'react';
import './contact.css';
import Card1 from '../../components/card1/Card1';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsLinkedin, BsGithub} from 'react-icons/bs';


const Contact = () => {
  
  return (
    <section id='contact'>

      <h5>Skontaktujmy się</h5>
      <h2>Kontakt</h2>

      <div className="container contact-container">
        <div className="contact-options">

          <Card1>
            <MdOutlineEmail className='contact-option-icon'/>
            <h5>mateusz.chalik</h5>
            <a href="mailto:mateusz.chalik@gmail.com">Wyślij wiadomość</a>
          </Card1>

          <Card1>
            <RiMessengerLine className='contact-option-icon'/>
            <h5>Mateusz Chalik</h5>
            <a href="https://m.me/mateusz.chalik">Wyślij wiadomość</a>
          </Card1>

          <Card1>
            <BsLinkedin className='contact-option-icon'/>
            <h5>Mateusz Chalik</h5>
            <a href="https://www.linkedin.com/in/mateusz-chalik-559813233/" target='_blank'>Zobacz profil</a>
          </Card1>

          <Card1>
            <BsGithub className='contact-option-icon'/>
            <h5>matCh00</h5>
            <a href="https://github.com/matCh00" target='_blank'>Zobacz profil</a>
          </Card1>

        </div>
      </div>

    </section>
  )
}

export default Contact;