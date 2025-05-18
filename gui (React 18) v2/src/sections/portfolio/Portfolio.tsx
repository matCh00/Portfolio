import React from 'react';
import Card3 from '../../components/card-3/Card3';
import './portfolio.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { img1, img2, img3, img4, img5 } from '../../assets/GymApp';
import { p1_1, p1_2, p1_3, p1_4 } from '../../assets/Portfolio_v1';
import { jt1_18, jt2_18, jt3_18, jt4_18, jt5_18, jt6_18, jt7_18 } from '../../assets/JustTravel18';
import { jt1_10, jt2_10, jt3_10, jt4_10, jt5_10, jt6_10, jt7_10 } from '../../assets/JustTravel10';
import { mr1_19, mr2_19, mr3_19, mr4_19, mr5_19, mr6_19 } from '../../assets/MovieReviewer19';
import { mr1_10, mr2_10, mr3_10, mr4_10, mr5_10, mr6_10 } from '../../assets/MovieReviewer10';


const Portfolio = () => {

  let mobile = window.matchMedia("(width <= 62rem)").matches;

  const projects = [
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">JustTravel</strong> <p>Aplikacja do tworzenia podrózy</p> </div>',
      technology: 'Angular 18 + TypeScript',
      images: [jt1_18, jt2_18, jt3_18, jt4_18, jt5_18, jt6_18, jt7_18],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: false
    },
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">JustTravel</strong> <p>Aplikacja do tworzenia podrózy</p> </div>',
      technology: 'Angular 10 + TypeScript',
      images: [jt1_10, jt2_10, jt3_10, jt4_10, jt5_10, jt6_10, jt7_10],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: false
    },
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">MovieReviewer</strong> <p>Aplikacja do oceniania filmów i seriali</p> </div>',
      technology: 'Angular 19 + TypeScript',
      images: [mr1_19, mr2_19, mr3_19, mr4_19, mr5_19, mr6_19],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: false
    },
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">MovieReviewer</strong> <p>Aplikacja do oceniania filmów i seriali</p> </div>',
      technology: 'Angular 10 + TypeScript',
      images: [mr1_10, mr2_10, mr3_10, mr4_10, mr5_10, mr6_10],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: false
    },
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">GymApp</strong> <p>Aplikacja mobilna do zarządzania oraz monitorowania treningów</p> </div>',
      technology: 'React Native + TypeScript',
      images: [img1, img2, img3, img4, img5],
      carouselClass: 'portfolio__carousel-mobile',
      desktop: false
    },
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">Portfolio v1</strong> <p>Strona internetowa</p> </div>',
      technology: 'React + JavaScript',
      images: [p1_1, p1_2, p1_3, p1_4],
      carouselClass: 'portfolio__carousel-mobile',
      desktop: false
    },
  ]
  
  return (
    <section id='portfolio' className='hidden'>
      
      <div className="container portfolio-container">

        <div className="section-header">
          <h4>Moje projekty</h4>
          <h1>Portfolio</h1>
        </div>

        <div className="portfolio-content">

          {projects.map(project => {
            return (

              <Card3 
                key={project.titleHtml}
                padding='3rem 3rem 1rem 3rem' 
                gap={mobile ? '1rem' : '5rem'}
                headerPos={mobile ? 'top' : 'left'}
                header={
                  <div className='portfolio-header-content'>
                    <h3 dangerouslySetInnerHTML={{__html: project.titleHtml}}></h3>
                    <h4>{project.technology}</h4>
                  </div>
                } 
              >
                <div className="carousel">

                  <Carousel 
                    showStatus={false} 
                    showThumbs={false} 
                    autoPlay={true} 
                    infiniteLoop={true}
                    interval={4000}
                    transitionTime={1000}
                    stopOnHover={true}
                    swipeable={true}
                    emulateTouch={true}
                  >
                    {project.images.map(i => {
                      return (
                        <div className="portfolio-img-container" key={i}>
                          <img src={i} className='portfolio-img'/>
                        </div>
                      )
                    })}
                  </Carousel>

                </div>
              </Card3>
            )
          })}

        </div>
        
      </div>  

    </section>
  )
};

export default Portfolio;