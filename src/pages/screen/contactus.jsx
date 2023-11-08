import React from 'react';
import './homepageComponents/contactus.css';

import ContactUsImg from '../screen/images/ContactUsImg.png'



const Contactus = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
            <p>X</p>
        </span>
        <div className='sections'>
        <div className='section1-img'>
            <img src={ContactUsImg} alt='Cimg'/>
        </div>
        <div className='section2-form'>
        <h1 className='Heding'>Contact Us</h1>
        <p className='SubHeading'>contact us and get answer</p>
       
        <form>
            <label>Name</label>
            <input></input><br/>
            <label>Email</label>
            <input ></input><br/>
            <label>Subject</label>
            <input ></input><br/>
            <label>Message</label>
            <textarea></textarea>
            <button type='submit' className='from-Button'>Submit</button>
        </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contactus;
