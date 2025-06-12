import React from "react";
import './portfolio.css';
import {projects} from '@portfolio/shared/sections/portfolio';
import {HiOutlineExternalLink} from "react-icons/hi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Timeline from "src/components/timeline/Timeline";
import Card1 from "src/components/card1/Card1";


const Portfolio = () => {

  const portfolioTitles = ['JustTravel', 'MovieReviewer', 'GymApp', 'Portfolio v1', 'Portfolio v2', 'Portfolio v3'];
  
  return (
    <section id="portfolio">

      <div className="section-header">
        <h5 className="color-primary-text-dark">Moje projekty</h5>
        <h2 className="color-secondary">Portfolio</h2>
      </div>

      <Timeline>

        {projects.filter((p, index, self) => portfolioTitles.includes(p.title+'') && index === self.findIndex((t) => (t.title === p.title))).map(project => {
          return (

            <Card1>
              <h2 className="color-secondary">
                {project.title} &nbsp;
                {project?.link && 
                  <a className="color-secondary" href={project?.link} target='_blank' rel="noreferrer"><HiOutlineExternalLink/></a>
                }
              </h2>
              <p className="color-primary-text-dark">{project.subtitle}</p>
              <h4 className="color-primary-text">{project.technology}</h4>

              <div className="carousel-container">

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
                      <div className="portfolio-image-container">
                        <img src={i} alt={i} className='portfolio-image' key={i}/>
                      </div>
                    )
                  })}
                </Carousel>

              </div>
            </Card1>
          )
        })}

      </Timeline>
      
    </section>
  )
}

export default Portfolio;