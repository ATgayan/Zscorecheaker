import React, { useState } from 'react';
import axios from 'axios';
import '../styles/contactus.css';
import { FaEnvelope,FaFacebookF } from 'react-icons/fa6';
import { FaPhone } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";



const Contactus = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
            <IoMdClose id='close'/>
        </span>
        <div className='sections'>
        <div className='section1'>
             <div className="textside">
                 <h2>Let's discuss<br/>on somethong cool<br/><span>together</span></h2>
             </div>

            <div className="topmargin">
                <div className="social">
                   <p id='borderHigh'><FaEnvelope/><span>ascorechaek@edu.com</span></p>
                </div>
                <div className="social">
                   <p id='borderHigh'><FaPhone/><span>ascorechaek@edu.com</span></p>
                </div>
                <div className="social">
                   <p id='borderHigh'><FaFacebookF/><span>ascorechaek@edu.com</span></p>
                </div>
            </div>

          <div className="bottomicon">
             <FaPhone id='bottomIcon'/>
             <FaFacebookF id='bottomIcon'/>
             <FaEnvelope id='bottomIcon'/>
          </div>

        </div>
        <div className='section2-form'>   
          <h2>Tell us Your Problem!</h2>     
            <form  className='fromtop' >
              <div className="input-boxes">
                 <input required name='name' placeholder='Your name' ></input>
              </div>

              <div className="input-boxes">
                <input type='email'  name='email' required placeholder='Email' ></input>
              </div>

              <div className="input-boxes-text">
                <textarea required maxLength={250}  name='message' placeholder='Your problem'></textarea>
              </div>

              <div className="btn-boxes">
                <button type='submit' id='submit'>Submit</button><span><BsFillSendFill id='sendIcon'/></span>
              </div>
            </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contactus;
