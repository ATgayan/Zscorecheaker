import React from 'react';
import '../styles/loadingerror.css'
import Image from '../images/errorloading.png'

function Errorloading({onClose}) {

    const handleContinue = () => {
        onClose()
      };

  return (
    <div className='modalbox'>
       <div className="boxinner">
         <img src={Image} alt="Logo" className='SuccessImage'/>
          <h2>Error!</h2>
          <p>Opps something went wrong<br/>try again.</p>
           <button onClick={handleContinue} className='btn-ok'>ok</button>
       </div>
    </div>
  )
}

export default Errorloading