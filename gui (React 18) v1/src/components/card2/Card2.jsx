import React from "react";
import "./card2.css";


const Card2 = ({header, children}) => {

  return (
    <div className="card2">

      <div className="card2-head">
        <h3>{header}</h3>
      </div>

      {children}

    </div>
  );
}

export default Card2;
