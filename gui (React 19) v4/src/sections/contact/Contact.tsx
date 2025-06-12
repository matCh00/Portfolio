import React from "react";
import './contact.css';
import Card1 from "src/components/card1/Card1";
import {BsLinkedin, BsGithub} from "react-icons/bs";
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import Button from "src/components/button/Button";


const Contact = () => {
  
  return (
    <section id="contact">

      <div className="section-header">
        <h5 className="color-primary-text-dark">Skontaktujmy się</h5>
        <h2 className="color-secondary">Kontakt</h2>
      </div>

      <div className="contact-cards">

        <Card1>
          <MdOutlineEmail className='color-secondary bigger-icon'/>
          <h5 className="color-primary-text-dark mb-3">mateusz.chalik</h5>
          <a href="mailto:mateusz.chalik@gmail.com"><Button>Wyślij wiadomość</Button></a>
        </Card1>

        <Card1>
          <RiMessengerLine className='color-secondary bigger-icon'/>
          <h5 className="color-primary-text-dark mb-3">Mateusz Chalik</h5>
          <a href="https://m.me/mateusz.chalik"><Button>Wyślij wiadomość</Button></a>
        </Card1>

        <Card1>
          <BsLinkedin className='color-secondary bigger-icon'/>
          <h5 className="color-primary-text-dark mb-3">Mateusz Chalik</h5>
          <a href="https://www.linkedin.com/in/mateusz-chalik-559813233/" target='_blank'><Button>Zobacz profil</Button></a>
        </Card1>

        <Card1>
          <BsGithub className='color-secondary bigger-icon'/>
          <h5 className="color-primary-text-dark mb-3">matCh00</h5>
          <a href="https://github.com/matCh00" target='_blank'><Button>Zobacz profil</Button></a>
        </Card1>

      </div>
      
    </section>
  )
}

export default Contact;