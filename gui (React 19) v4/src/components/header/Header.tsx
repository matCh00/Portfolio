import React, {useEffect, useState} from "react";
import './header.css';
import {IoMenu} from "react-icons/io5";
import {IoIosClose} from "react-icons/io";


const Header = () => {

  const [menuActive, setMenuActive] = useState(false);

  const handleMenuclick = () => {
    setMenuActive(prev => !prev);
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("#navbar a");

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  
  return (
    <header>

      <a href="#hero" className="logo">Mateusz <span>Chalik</span></a>

      <i id="menu" onClick={handleMenuclick} className={menuActive ? 'active' : ''}>
        {menuActive ? <IoIosClose /> : <IoMenu />}
      </i>

      <nav id="navbar" className={menuActive ? 'active' : ''}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
  )
}

export default Header;