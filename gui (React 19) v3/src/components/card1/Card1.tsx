import React from "react";
import "./card1.css";


type Props = {
  children: any,
};

const Card1 = ({children}: Props) => {

  return (
    <div className="glass-card1">

      {children}

    </div>
  );
}

export default Card1;
