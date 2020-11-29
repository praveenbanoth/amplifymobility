import React from 'react';
import  './HomeImageoriginal.css' 
import homeimage from './HomeImage.jpeg'

function HomeImageoriginal() {
  return (
      <div >
     <img src={homeimage} alt="Dashboard" className="photo"  /> 
     <text >
     Dashboard
     </text>
     </div>
  )
}

export default HomeImageoriginal;