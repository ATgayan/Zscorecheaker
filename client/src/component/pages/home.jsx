import React from "react";
import Mnavbar from "./navbar";
import image from '../images/image2.png';
import "../styles/homepage.css";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/Resultpage');
    }, 1000);
  };

  return (
    <div>
      <Mnavbar />
      <div className="container">
        <div className="Text">
          <h1>
            Find Your Best <span>Course</span>
            <br /> On your Z-Score
          </h1>
          <div className="subtext">
            <p>
              Minimum "Z" Scores for selection to various Courses of Study of
              Universities under the Normal Intake, in respect of each district
            </p>
          </div>
          <button onClick={handleLoading} className="homebtn">
            {loading ? "Loading..." : "Find Course"}
          </button>
        </div>

        <div className="imgclass">
          <img src={image} alt="Logo" />;
        </div>
      </div>
    </div>
  );
}

export default Homepage;
