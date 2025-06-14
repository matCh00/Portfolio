import React from 'react';
import './contact.css';
import Card1 from '../../components/card-1/Card1';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsLinkedin, BsGithub} from 'react-icons/bs';


const Contact = () => {
  
  return (
    <section id='contact' className='hidden'>

      <div className="section-header">
        <h4>Skontaktujmy się</h4>
        <h1>Kontakt</h1>
      </div>

      <div className="contact-content">

        <Card1>
          <div className="contact-content-card">
            <MdOutlineEmail className='bigger-icon'/>
            <h5>mateusz.chalik</h5>
            <a href="mailto:mateusz.chalik@gmail.com">Wyślij wiadomość</a>
          </div>
        </Card1>

        <Card1>
          <div className="contact-content-card">
            <RiMessengerLine className='bigger-icon'/>
            <h5>Mateusz Chalik</h5>
            <a href="https://m.me/mateusz.chalik">Wyślij wiadomość</a>
          </div>
        </Card1>

        <Card1>
          <div className="contact-content-card">
            <BsLinkedin className='bigger-icon'/>
            <h5>Mateusz Chalik</h5>
            <a href="https://www.linkedin.com/in/mateusz-chalik-559813233/" target='_blank'>Zobacz profil</a>
          </div>
        </Card1>

        <Card1>
          <div className="contact-content-card">
            <BsGithub className='bigger-icon'/>
            <h5>matCh00</h5>
            <a href="https://github.com/matCh00" target='_blank'>Zobacz profil</a>
          </div>
        </Card1>

      </div>
      
    </section>
  )
};

export default Contact;