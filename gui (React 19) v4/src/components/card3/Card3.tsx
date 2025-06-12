import React from "react";
import "./card3.css";


type Props = {
  header?: string,
  children: any,
};

const Card3 = ({header, children}: Props) => {

  return (
    <>
      <div className="card3">

        {header &&  <h1 className="card3-header">{header}</h1>}

        {children}

      </div>
    </>
  );
}

export default Card3;
