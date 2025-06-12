import React from "react";
import './timeline.css';


type Props = {
  children: any[],
};

const Timeline = ({children}: Props) => {

  return (
    <div className="timeline">

      {children?.map((child, idx) => (
        <div className="timeline-item" key={idx}>
          <div className="timeline-dot"></div>
          {child}
        </div>
      ))}

    </div>
  );
}


export default Timeline;