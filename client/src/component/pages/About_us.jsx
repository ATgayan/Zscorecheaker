import React from 'react';
import Nvbar from "./navbar";
import Images2 from '../images/coverImg.jpg'

const About_us = () => {
  return (
    <div>
       <Nvbar />
       <div className="main">
            <div className="imgbox">
                <img src={Images2} alt="" srcset="" className='imegs2' />
            </div>
            <div className="textbox">
               <h2>About us </h2>
               <div className="downtext">
                  <p>We are a small software engineering team <br/>in Sri Lanka. 
                    We are pioneers in finding new solutions<br/> to real world 
                    problems using new technologies and knowledge.</p>

                    <h3>Heare is our team</h3>
                    <div className="carts">
                       <div className="cartbox">
                           
                       </div>
                       <div className="cartbox">
                           
                       </div>
                    </div>
               </div>
            </div>
       </div>
    </div>
  )
}

export default About_us