import React, { useState } from 'react';
import { FaEnvelope,FaFacebookF } from 'react-icons/fa6';
import '../styles/contactus.css';
import { FaPhone } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Message from '../messages/Cusmsg'
import { useNavigate } from 'react-router-dom';

function Contact_us({onClose}) {


   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const navigate = useNavigate()

   const openPopup = () => {
     setIsPopupOpen(true);
   };
 
   const closePopup = () => {
     setIsPopupOpen(false);
     onClose(); 
     navigate('/')
   };


 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
     });

     const clear =()=>{
       setFormData({
         name: '',
         email: '',
         message: '',
       })
     }
    
     const handleInputChange = (e) => {
        setFormData({
           ...formData,
           [e.target.name]: e.target.value,
        });
     };
    
     const handleSubmit = async (e) => {
       e.preventDefault();
    
       try {
          const response = await fetch('http://localhost:4000/api/Contactus', {
             method: 'POST',
             headers: {
                'Content-Type': 'application/json',
             },
             body: JSON.stringify(formData),
          });
    
          if (response.ok) {
             console.log('Form data submitted successfully');
             openPopup();
             clear();

          } else {
             console.error('Failed to submit form data');
          }
       } catch (error) {
          console.error('Error submitting form:', error);
       }
    };

    
      return (
        <div className="popup">
                {isPopupOpen && (
                  <Message onClose={closePopup}/>
               )}
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
                <form  className='fromtop' onSubmit={handleSubmit}>
                  <div className="input-boxes">
                     <input required name='name' placeholder='Your name'  value={formData.name} onChange={handleInputChange}></input>
                  </div>
    
                  <div className="input-boxes">
                    <input type='email'  name='email' required placeholder='Email'  value={formData.email} onChange={handleInputChange}></input>
                  </div>
    
                  <div className="input-boxes-text">
                    <textarea required   name='message'  placeholder='Your problem'  value={formData.message} onChange={handleInputChange}></textarea>
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
}

export default Contact_us