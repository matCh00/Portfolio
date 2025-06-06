import React, { useEffect, useState, useLayoutEffect } from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineStar, AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {BsChatQuote} from 'react-icons/bs';
import {RiServiceLine} from 'react-icons/ri';


const Nav = () => {

  const [heroRect, setHeroRect] = useState({top: 0, height: 0});
  const [aboutRect, setAboutRect] = useState({top: 0, height: 0});
  const [experienceRect, setExperienceRect] = useState({top: 0, height: 0});
  const [servicesRect, setServicesRect] = useState({top: 0, height: 0});
  const [portfolioRect, setPortfolioRect] = useState({top: 0, height: 0});
  const [testimonialsRect, setTestimonialsRect] = useState({top: 0, height: 0});
  const [contactRect, setContactRect] = useState({top: 0, height: 0});


  const [activeNav, setActiveNav] = useState('#');

  const highlight = (key) => {
    setActiveNav(key);
  }

  const checkIsActive = (key) => {
    if (activeNav === key)
      return 'active';
    return '';
  }


  const handleScroll = () => {
    let s = window.scrollY;
    let aboutTop = heroRect.height;
    let experienceTop = aboutTop + aboutRect.height;
    let servicesTop = experienceTop + experienceRect.height;
    let portfolioTop = servicesTop + servicesRect.height;
    let contactTop = portfolioTop + portfolioRect.height;

    if (s + aboutRect.height/2 >= aboutTop && s + aboutRect.height/2 < experienceTop) 
      highlight('#about');
    else if (s + experienceRect.height/2 >= experienceTop && s + experienceRect.height/2 < servicesTop) 
      highlight('#experience');
    else if (s + servicesRect.height/2 >= servicesTop && s + servicesRect.height/2 < portfolioTop) 
      highlight('#services');
    else if (s + portfolioRect.height/2 >= portfolioTop && s + portfolioRect.height/2 < contactTop) 
      highlight('#portfolio');
    else if (s + contactRect.height >= contactTop) 
      highlight('#contact');
    else if (s + heroRect.height < experienceTop)
      highlight('#');
    else 
      highlight('');
  }


  const setPos = () => {
    setHeroRect({top: document.getElementById('hero').getBoundingClientRect().top, height: document.getElementById('hero').getBoundingClientRect().height});
    setAboutRect({top: document.getElementById('about').getBoundingClientRect().top, height: document.getElementById('about').getBoundingClientRect().height});
    setExperienceRect({top: document.getElementById('experience').getBoundingClientRect().top, height: document.getElementById('experience').getBoundingClientRect().height});
    setServicesRect({top: document.getElementById('services').getBoundingClientRect().top, height: document.getElementById('services').getBoundingClientRect().height});
    setPortfolioRect({top: document.getElementById('portfolio').getBoundingClientRect().top, height: document.getElementById('portfolio').getBoundingClientRect().height});
    setContactRect({top: document.getElementById('contact').getBoundingClientRect().top, height: document.getElementById('contact').getBoundingClientRect().height});
  }


  useLayoutEffect(() => {
    setPos();
  }, []);


  useEffect(() => {
    const onScroll = () => {
      handleScroll();
    }
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [window.scrollY]);


  useEffect(() => {
    const handleResize = () => {
      setPos();
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window]);


  return (
    <nav>

      <a href="#" 
        className={checkIsActive('#')}
      ><AiOutlineHome/></a>

      <a href="#about" 
        className={checkIsActive('#about')}
      ><AiOutlineUser/></a>

      <a href="#experience" 
        className={checkIsActive('#experience')}
      ><AiOutlineStar/></a>

      <a href="#services" 
        className={checkIsActive('#services')}
      ><RiServiceLine/></a>

      <a href="#portfolio" 
        className={checkIsActive('#portfolio')}
      ><AiOutlineFundProjectionScreen/></a>

      <a href="#contact" 
        className={checkIsActive('#contact')}
      ><BsChatQuote/></a>

    </nav>
  )
}

export default Nav;