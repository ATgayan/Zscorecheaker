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
           <img src={Image} alt="" srcset="" className='SuccessImage'/>
            <h3>Result Not Found !!</h3>
           <p>Opps something went wrong<br/>try again.</p>
           <button onClick={handleContinue} className='btn-ok'>OK</button>
        </div>
    </div>
  )
}

export default Errorloading