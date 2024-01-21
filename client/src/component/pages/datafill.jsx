import React, { useState } from 'react';
import '../styles/senddata.css';
import Nvbr from './navbar';
import Message from '../messages/Mesg'

function Datafill() {

const[formData, setFormData] = useState({
    sunject_strem: '',
    course: '',
    university: '',
    zscore: '',
    district:'',
    subject_one: '',
    subject_two:'',
    subject_tree: '',
})

const [isPopupOpen, setIsPopupOpen] = useState(false);

const districts = [
   "Colombo",
   "Gampaha",
   "Kalutara",
   "Kandy",
   "Matale",
   "Nuwara Eliya",
   "Galle",
   "Matara",
   "Hambantota",
   "Jaffna",
   "Kilinochchi",
   "Mannaram",
   "Vavuniya",
   "Mullaitivu",
   "Batticaloa",
   "Ampara",
   "Trincomalee",
   "Kurunegala",
   "Puttalam",
   "Anuradhapura",
   "Polonnaruwa",
   "Badulla",
   "Monaragala",
   "Ratnapura",
   "Kegalle"
 ];
 
 const university = [
   "University of Colombo",
   "University of Peradeniya",
   "University of Sri Jayewardenepura",
   "University of Kelaniya",
   "University of Moratuwa",
   "University of Jaffna",
   "University of Ruhuna",
   "Eastern University of Sri Lanka",
   "South Eastern University of Sri Lanka",
   "Rajarata University of Sri Lanka",
   "Sabaragamuwa University of Sri Lanka",
   "Wayamba University of Sri Lanka",
   "Uva Wellassa University of Sri Lanka",
   "University of the Visual & Performing Arts",
   "Gampaha Wickramarachchi University of Indigenous Medicine",
   "University of Vavuniya",
 ]

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
     const response = await fetch('http://localhost:4000/datafill', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
     });

     if (response.ok) {
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
               <div className="rows">
                  <select className='subStreem'  
                    name="sunject_strem" 
                    value={formData.sunject_strem}
                    onChange={handleInputChange}>

                     <option value="selet stream">Streem</option>
                     <option value="Maths">Maths</option>
                     <option value="Biology">Biology</option>
                     <option value="Maths">Maths</option>
                     <option value="Art">Arts</option>
                     <option value="Commerce">Commerce</option>
                  </select>
               </div>
               <div className="rows">
                  <select className='subjects' 
                     name="subject_one" 
                     value={formData.subject_one}
                     onChange={handleInputChange}
                  >
                     <option value="someOption">Some option</option>
                     <option value="ICT">ICT</option>
                  </select>

                  <select className='subjects'
                     name="subject_two" 
                     value={formData.subject_two}
                     onChange={handleInputChange}
                  >
                     <option value="someOption">Some option</option>
                     <option value="ET">ET</option>
                  </select>

                  <select className='subjects'
                     name="subject_tree" 
                     value={formData.subject_tree}
                     onChange={handleInputChange}
                  >
                     <option value="someOption">Some option</option>
                     <option value="SFT">SFT</option>
                  </select>

               </div>
               <div className="rows">
                  <select className='Districts'
                     name="district" 
                     value={formData.district}
                     onChange={handleInputChange}
                  >
                        <option value="District">District</option>
                        {districts.map((distr)=>(
                        <option value={distr}>{distr}</option>
                    ))}
                  </select>
               </div>
               <div className="inputbox">
                  <input type="number"  required placeholder='zscore' name='zscore' value={formData.zscore}  onChange={handleInputChange}/>
               </div>
               <div className="inputbox">
                  <input type="text" required placeholder='course' name='course' value={formData.course}  onChange={handleInputChange}/><br />
               </div>
               <div className="rows">
                  <select className='University'
                       name="university"
                       value={formData.university}
                       onChange={handleInputChange}
                  >
                        <option value="someOption">Some option</option>
                        {university.map((univer)=>(
                        <option value={univer}>{univer}</option>
                    ))}
                  </select>
               </div>
               <div className="rows">
                  <div className="btn-class">
                     <button className='submit' id='btnHover'>Submit</button>
                  </div>
                  <div className="btn-class">
                     <button type="reset" className='resit' onClick={handleReset} id='btnHover'>Clear</button>
                  </div>
               </div>
           </form>
        </div>
     </div>
     
  )
}
export default Datafill