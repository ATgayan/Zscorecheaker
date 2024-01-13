import React, { useState } from 'react';
import axios from 'axios';
import '../styles/contactus.css';
import { FaEnvelope,FaFacebookF } from 'react-icons/fa6';
import { FaPhone } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";



const Contactus = ({ onClose }) => {
 const[value,setvalue] = useState({
  name: '',
  email: '',
  message: '',
 })


 const handlechange = (event) => {
  setvalue({ ...value, [event.target.name]: event.target.value });
}


 const handlesubmit =(event)=>{
  event.preventDefault();
  axios.post('http://localhost:8081', {value})
  .then(res => console.log("sucess full data send"))
  .catch(err => console.log(err))
  
 }

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
                   <p><FaEnvelope/><span>ascorechaek@edu.com</span></p>
                </div>
                <div className="social">
                   <p id='borderHigh'><FaPhone/><span>ascorechaek@edu.com</span></p>
                </div>
                <div className="social">
                   <p><FaFacebookF/><span>ascorechaek@edu.com</span></p>
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
            <form  className='fromtop' onSubmit={handlesubmit}>
              <div className="input-boxes">
                 <input required name='name' placeholder='Your name' onChange={handlechange}></input>
              </div>

              <div className="input-boxes">
                <input type='email'  name='email' required placeholder='Email' onChange={handlechange}></input>
              </div>

              <div className="input-boxes-text">
                <textarea required maxLength={250}  name='message' placeholder='Your problem' onChange={handlechange}></textarea>
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
