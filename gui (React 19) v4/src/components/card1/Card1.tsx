import React from "react";
import "./card1.css";


type Props = {
  header?: string,
  children: any,
};

const Card1 = ({header, children}: Props) => {

  return (
    <>
      {header &&  <h1 className="card1-header">{header}</h1>}
      
      <div className="card1">

        {children}

      </div>
    </>
  );
}

export default Card1;
