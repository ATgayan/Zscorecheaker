import React from 'react';
import Nvbar from "../component/navbar";
import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';




const About_us = () => {
  return (
    <div>
       <Nvbar />
       <div className="main">
           <h1>Our Team</h1>
          <div className="content">
              <div className="cart">
                <div className="circle1"></div>
                  <h3>Dilshan T Madusanka</h3>
                  <p>Software Engineer at DtX <br />international</p>
                  <div className="icons">
                    <p><FaEnvelope  id='iconimg'/>dilshan.official12@gmail.com</p>
                    <p><FaFacebook id='iconimg'/><a href="http://">Dishan Thathsara</a></p>
                    <p><FaLinkedin  id='iconimg'/><a href="https://www.linkedin.com/in/dilshan-thathsara-a36592259/">Dilshan T Madusanka</a></p>
                  </div>
              </div>

              <div className="cart">
              <div className="circle2"></div>
                  <h3>Thusitha Gayan</h3>
                  <p>Software Engineer at DtX <br />international</p>
                  <div className="icons">
                    <p><FaEnvelope  id='iconimg'/>dilshan.official12@gmail.com</p>
                    <p><FaFacebook id='iconimg'/><a href="http://">Dishan Thathsara</a></p>
                    <p><FaLinkedin  id='iconimg'/><a href="http://">Dilshan T Madusanka</a></p>
                  </div>
              </div>

              <div className="cart">
              <div className="circle3"></div>
                  <h3>Ravindu Hasith</h3>
                  <p>Bsc Undergraguate at <br />Uwa wellassa university</p>
                  <div className="icons">
                    <p><FaEnvelope  id='iconimg'/>dilshan.official12@gmail.com</p>
                    <p><FaFacebook id='iconimg'/><a href="http://">Dishan Thathsara</a></p>
                    <p><FaLinkedin  id='iconimg'/><a href="http://">Dilshan T Madusanka</a></p>
                  </div>
              </div>
          </div>
       </div>
    </div>
  )
}

export default About_us