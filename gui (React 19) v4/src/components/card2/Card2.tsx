import React from "react";
import "./card2.css";


type Props = {
  children: any,
};

const Card2 = ({children}: Props) => {

  return (
    <>
      <div className="card2">

        {children}

      </div>
    </>
  );
}

export default Card2;
