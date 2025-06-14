import React from 'react';
import './card2.css';


type Props = {
  width?: string,
  padding?: string,
  lightHeader?: boolean,
  highlight?: boolean,
  header: any,
  children: any,
};

const Card2 = ({
  width='100%', 
  padding='1.5rem', 
  lightHeader=true, 
  highlight=false, 
  header, 
  children
}: Props) => {

  return (
    <div className={`card2 ${highlight ? "highlight" : ""}`} style={{width: width}}>

      <div className="card2-header" style={{padding: padding, background: lightHeader ? 'var(--color-primary-dark)' : 'var(--color-primary-dark)'}}>
        {header}
      </div>
      
      <div className="card2-content" style={{padding: padding}}>
        {children}
      </div>

    </div>
  )
};

export default Card2;