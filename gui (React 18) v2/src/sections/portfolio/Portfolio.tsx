import React from 'react';
import Card3 from '../../components/card-3/Card3';
import './portfolio.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {projects} from '@portfolio/shared/sections/portfolio'
import {HiOutlineExternalLink} from "react-icons/hi";


const Portfolio = () => {

  let mobile = window.matchMedia("(width <= 768px)").matches;

  const portfolioTitles = ['JustTravel', 'MovieReviewer', 'GymApp', 'Portfolio v1'];
  
  return (
    <section id='portfolio' className='hidden portfolio-container'>
      
      <div className="section-header">
        <h4>Moje projekty</h4>
        <h1>Portfolio</h1>
      </div>

      <div className="portfolio-content">

        {projects.filter((p, index, self) => portfolioTitles.includes(p.title+'') && index === self.findIndex((t) => (t.title === p.title))).map(project => {
          return (
            <Card3 
              key={Math.random()+project.title}
              padding='2rem 2rem 1rem 2rem' 
              gap={mobile ? '1rem' : '5rem'}
              headerPos={mobile ? 'top' : 'left'}
              header={
                <div className='portfolio-header-content'>
                  <h3>
                    <div className="html-title"> 
                      <strong className="color-secondary">
                        {project.title}
                        {project?.link && 
                          <a href={project?.link} target='_blank' className='link'><HiOutlineExternalLink/></a>
                        }
                      </strong> 
                      <p>{project.subtitle}</p> 
                    </div>
                  </h3>
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
      
    </section>
  )
};

export default Portfolio;