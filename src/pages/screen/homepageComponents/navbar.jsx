import React from 'react';
import LoGo from '../images/logo.png';

import '../homepageComponents/navbar.css'

function Mnavbar(){

    return(
        <div>
        <div className='navbar'>
             <div >
             <img src={LoGo} alt="Logo" className='logo' />

    </div>
     <div className='navitem'>
     <a href="#about">About</a>
    <a href="#contact">Contact Us</a>

     </div>
    
        </div>
        </div>
    )
}

export default Mnavbar