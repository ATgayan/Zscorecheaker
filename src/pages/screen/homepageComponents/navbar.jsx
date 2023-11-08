import React from "react";
import logo from "../images/logo.png";
import "../homepageComponents/navbar.css";
import { Link } from "react-router-dom";
import Contactus from "../contactus";
import { useState } from "react";

function Mnavbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="header">
      <div class="nav">
        <div class="logo">
          <img src={logo} alt="Logo" id="logo1" />;
        </div>
        <ul class="menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Resultpage"}>About</Link>
          </li>

          <li>
            <Link onClick={openPopup}>Contact Us</Link>
            {isPopupOpen && <Contactus onClose={closePopup} />}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Mnavbar;
