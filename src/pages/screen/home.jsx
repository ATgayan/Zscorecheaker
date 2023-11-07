import React from "react";
import Mnavbar from "./homepageComponents/navbar";
import image from './images/image.png'
import "./homepageComponents/homepage.css"
import { Link } from "react-router-dom";


function Homepage() {
  
  return (
    <div>
      <Mnavbar></Mnavbar>
      <div className="container">
      <div className="Text">
        <h1>Find Your Best <span>Course</span><br/> On your Z-Score</h1>
         <div className="subtext">
           <p>Lorazepam, sold under the brand name Ativan among others, is a benzodiazepine medication. It is used to treat anxiety, trouble sleeping, severe agitation</p>
         </div>
          <Link to={'/Resultpage'} ><button className="homebtn">Find Course</button></Link>
      </div>

      <div className="imgclass">
        <img src={image} alt="Logo"/>;
      </div>

    </div>
    </div>
  );
}

export default Homepage;
