import React from "react";
import "./card3.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";


type Props = {
  images: any[],
  children: any,
};

const Card3 = ({images, children}: Props) => {

  return (
    <div className="glass-card3">

      {children}

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
          {images.map(i => {
            return (
              <div className="image-container">
                <img src={i} alt={i} className='image' key={i}/>
              </div>
            )
          })}
        </Carousel>
      </div>

    </div>
  );
}

export default Card3;
