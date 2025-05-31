import React from "react";
import './contact.css';
import Card2 from "src/components/card2/Card2";
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import Button from "src/components/button/Button";


const Contact = () => {
  
  return (
    <section id='contact'>

      <div className="section-header">
        <h5 className="color-primary-text-dark">Skontaktujmy się</h5>
        <h2 className="color-secondary">Kontakt</h2>
      </div>

      <div className="contact-cards">

        <Card2>
          <MdOutlineEmail className='color-secondary bigger-icon'/>
          <h5 className="color-primary-text-dark">mateusz.chalik</h5>
          <a href="mailto:mateusz.chalik@gmail.com"><Button>Wyślij wiadomość</Button></a>
        </Card2>

        <Card2>
          <RiMessengerLine className='color-secondary bigger-icon'/>
          <h5 className="color-primary-text-dark">Mateusz Chalik</h5>
          <a href="https://m.me/mateusz.chalik"><Button>Wyślij wiadomość</Button></a>
        </Card2>

        <Card2>
          <BsLinkedin className='color-secondary bigger-icon'/>
          <h5 className="color-primary-text-dark">Mateusz Chalik</h5>
          <a href="https://www.linkedin.com/in/mateusz-chalik-559813233/" target='_blank'><Button>Zobacz profil</Button></a>
        </Card2>

        <Card2>
          <BsGithub className='color-secondary bigger-icon'/>
          <h5 className="color-primary-text-dark">matCh00</h5>
          <a href="https://github.com/matCh00" target='_blank'><Button>Zobacz profil</Button></a>
        </Card2>

      </div>

    </section>
  )
}

export default Contact;