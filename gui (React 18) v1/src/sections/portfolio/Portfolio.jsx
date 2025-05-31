import React from 'react';
import './portfolio.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {projects} from '@portfolio/shared/sections/portfolio';


const Portfolio = () => {

  const portfolioTitles = ['JustTravel', 'MovieReviewer', 'GymApp'];

  return (
    <section id='portfolio'>

      <h5>Moje projekty</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">

        {projects.filter(p => portfolioTitles.includes(p.title+'')).map(project => {
          return (

            <article key={project.title} className={project.desktop ? 'portfolio-item portfolio-item-desktop' : 'portfolio-item'}>

              <div className="portfolio-description">
                <h3>
                  <strong>{project.title}</strong> 
                  <br/>
                  <small>{project.subtitle}</small>
                </h3>
                <h4>{project.technology}</h4>
              </div>

              <div className="carousel">
                <Carousel 
                  className={project.desktop ? 'portfolio-carousel-desktop' : 'portfolio-carousel-mobile'}
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
                      <div key={i} className='portfolio-image-container'>
                        <img src={i} className='portfolio-image' />
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