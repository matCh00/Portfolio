import React from 'react';
import './contact.css';
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

          <article className="contact-option">
            <MdOutlineEmail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>mateusz.chalik</h5>
            <a href="mailto:mateusz.chalik@gmail.com">Wyślij wiadomość</a>
          </article>

          <article className="contact-option">
            <RiMessengerLine className='contact-option-icon'/>
            <h4>Messenger</h4>
            <h5>Mateusz Chalik</h5>
            <a href="https://m.me/mateusz.chalik">Wyślij wiadomość</a>
          </article>

          <article className="contact-option">
            <BsLinkedin className='contact-option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Mateusz Chalik</h5>
            <a href="https://www.linkedin.com/in/mateusz-chalik-559813233/" target='_blank'>Zobacz profil</a>
          </article>

          <article className="contact-option">
            <BsGithub className='contact-option-icon'/>
            <h4>GitHub</h4>
            <h5>matCh00</h5>
            <a href="https://github.com/matCh00" target='_blank'>Zobacz profil</a>
          </article>

        </div>
      </div>

    </section>
  )
}

export default Contact;