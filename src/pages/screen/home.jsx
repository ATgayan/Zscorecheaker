import React from "react";
import { useNavigate } from 'react-router-dom';

import Mnavbar from "./homepageComponents/navbar";
import "./homepageComponents/navbar.css";
import "./homepageComponents/homepage.css"


import MainImg from "../screen/images/main/education-illustrations-10.png"

function Homepage() {

  
  return (
    <div>
      <Mnavbar></Mnavbar>
      <div className="container">
      <div className="Text">
        <h1>Find Your Best<span style={{color:'#3483EE'}}> Course</span><br/> On your Z-Score</h1>
        <p className="SubText">It is a long established fact that a reader will be<br/> distracted by the readable content of a page when<br/> looking at its layout</p>
        <button  >Find Course</button>
      </div>
      <div className="imgclass">
      <img src={MainImg} alt="Main image"/>
      </div>
    </div>
    </div>
  );
}

export default Homepage;
