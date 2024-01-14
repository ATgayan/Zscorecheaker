import React from 'react';
import '../styles/modal.css';
import Image from '../images/success.png'


export default function Mesg({onClose}) {
  return (
    <div className='modal'>
       <div className="box">
         <img src={Image} alt="Logo" className='SuccessImage'/>;
          <h2>Success !</h2>
          <p>Record Saved</p>
           <button onClick={onClose} className='btn-ok'>Continue</button>
       </div>
    </div>
  )
}
