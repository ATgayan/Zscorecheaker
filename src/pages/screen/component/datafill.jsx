import React, { useState } from 'react';
import '../styles/senddata.css';
import Nvbr from './navbar';
import Message from './Mesg'

function Datafill() {

const[formData, setFormData] = useState({
    sunject_strem: '',
    course: '',
    university: '',
    zscore: '',
})

const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
     const response = await fetch('http://localhost:5000/datafill', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
     });

     if (response.ok) {
        console.log('Form submitted successfully');
        openPopup();
        handleReset();
        
     } else {
        console.error('Error submitting form');
     }
  } catch (error) {
     console.error('Network error:', error);
  }
};

const handleReset = () => {
  setFormData({
    sunject_strem: '',
    course: '',
    university: '',
    zscore: '',
  });
};



const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
}; 

  return (
     <div className="mainf">
        <Nvbr/>
        {isPopupOpen && (
           <Message onClose={closePopup}/>
        )}
        <div className="from">
           <form  className='from1' onSubmit={handleSubmit}>
            <div className="text">
            <h5>Send Data to Form</h5>
              <p>send to from data</p>
            </div>
              <input type="text" required  placeholder='subject streem' name='sunject_strem' value={formData.sunject_strem}   onChange={handleInputChange}/><br />
              <input type="text" required placeholder='course' name='course' value={formData.course}  onChange={handleInputChange}/><br />
              <input type="text" required placeholder='university' name='university' value={formData.university}  onChange={handleInputChange}/>
              <input type="number"  required placeholder='zscore' name='zscore' value={formData.zscore}  onChange={handleInputChange}/>
              <div className="btn-class">
                  <button className='submit' id='btnHover'>Submit</button>
                  <button type="reset" className='resit' onClick={handleReset} id='btnHover'>Clear</button>
              </div>
           </form>
        </div>
     </div>
     
  )
}
export default Datafill