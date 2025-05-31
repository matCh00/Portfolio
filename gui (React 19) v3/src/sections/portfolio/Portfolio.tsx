import React from "react";
import './portfolio.css';
import {projects} from '@portfolio/shared/sections/portfolio';
import Card3 from "src/components/card3/Card3";
import {HiOutlineExternalLink} from "react-icons/hi";


const Portfolio = () => {

  const portfolioTitles = ['JustTravel', 'MovieReviewer', 'GymApp', 'Portfolio v1', 'Portfolio v2'];
  
  return (
    <section id='portfolio'>

      <div className="section-header">
        <h5 className="color-primary-text-dark">Moje projekty</h5>
        <h2 className="color-secondary">Portfolio</h2>
      </div>

      <div className="portfolio-cards">

        {projects.filter(p => portfolioTitles.includes(p.title+'')).map(project => {
          return (

            <Card3 images={project.images} key={Math.random()+project.title}>
              <h2 className="text-gradient">
                {project.title} &nbsp;
                {project?.link && 
                  <a href={project?.link} target='_blank' rel="noreferrer" className='link'><HiOutlineExternalLink/></a>
                }
              </h2>
              <p className="color-primary-text-dark">{project.subtitle}</p>
              <h4 className="color-primary-text">{project.technology}</h4>
            </Card3>
          )
        })}

      </div>

    </section>
  )
}

export default Portfolio;