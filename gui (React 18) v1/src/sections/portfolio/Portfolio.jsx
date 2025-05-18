import React from 'react';
import './portfolio.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from '../../assets/GymApp';
import { jt1_18, jt2_18, jt3_18, jt4_18, jt5_18, jt6_18, jt7_18 } from '../../assets/JustTravel18';
import { jt1_10, jt2_10, jt3_10, jt4_10, jt5_10, jt6_10, jt7_10 } from '../../assets/JustTravel10';
import { mr1_19, mr2_19, mr3_19, mr4_19, mr5_19, mr6_19 } from '../../assets/MovieReviewer19';
import { mr1_10, mr2_10, mr3_10, mr4_10, mr5_10, mr6_10 } from '../../assets/MovieReviewer10';


const Portfolio = () => {

  const projects = [
    {
      titleHtml: '<strong>JustTravel</strong> <br> Aplikacja do tworzenia podrózy',
      technology: 'Angular 18 + TypeScript',
      images: [jt1_18, jt2_18, jt3_18, jt4_18, jt5_18, jt6_18, jt7_18],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: false
    },
    {
      titleHtml: '<strong>JustTravel</strong> <br> Aplikacja do tworzenia podrózy',
      technology: 'Angular 10 + TypeScript',
      images: [jt1_10, jt2_10, jt3_10, jt4_10, jt5_10, jt6_10, jt7_10],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: false
    },
    {
      titleHtml: '<strong>MovieReviewer</strong> <br> Aplikacja do oceniania filmów i seriali',
      technology: 'Angular 19 + TypeScript',
      images: [mr1_19, mr2_19, mr3_19, mr4_19, mr5_19, mr6_19],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: false
    },
    {
      titleHtml: '<strong>MovieReviewer</strong> <br> Aplikacja do oceniania filmów i seriali',
      technology: 'Angular 10 + TypeScript',
      images: [mr1_10, mr2_10, mr3_10, mr4_10, mr5_10, mr6_10],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: false
    },
    {
      titleHtml: '<strong>GymApp</strong> <br> Aplikacja mobilna do zarządzania oraz monitorowania treningów',
      technology: 'React Native + TypeScript',
      images: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
      carouselClass: 'portfolio__carousel-mobile',
      desktop: false
    },
  ]

  return (
    <section id='portfolio'>

      <h5>Moje projekty</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {projects.map(project => {
          return (

            <article key={project.titleHtml} className={project.desktop ? 'portfolio__item portfolio__item-desktop' : 'portfolio__item'}>

              <div className="portfolio__description">
                <h3 dangerouslySetInnerHTML={{__html: project.titleHtml}}></h3>
                <h4>{project.technology}</h4>
              </div>

              <div className="carousel">
                <Carousel 
                  className={project.carouselClass}
                  showStatus={false} 
                  showThumbs={false} 
                  autoPlay={true} 
                  infiniteLoop={true}
                  interval={3000}
                  transitionTime={1000}
                  stopOnHover={true}
                  swipeable={true}
                  emulateTouch={true}
                >
                  {project.images.map(i => {
                    return (
                      <div key={i} className='portfolio__image-container'>
                        <img src={i} className='portfolio__image' />
                      </div>
                    )
                  })}
                </Carousel>
              </div>

            </article>
            
          )
        })}
        
      </div>
    </section>
  )
}

export default Portfolio;