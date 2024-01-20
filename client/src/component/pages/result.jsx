import React, { useState } from "react";
import Mnavbar from "./navbar";
import ResutlTable from "./result_table";

export const Result = () => {

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
        "Mannar",
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
      

  const technologysubject = ["ICT", "BST", "ET", "SFT","Agri"];
  const bio = ["cemesry", "ll", "bb"];
  const Maths = ["cemesry", "ll", "bb"];
  const Commerce = ["cemesry", "ll", "bb"];
  const Art = ["cemesry", "ll", "bb"];

  let selectSub = ["select subject"];

 
  const [subjectstream, subjectstreamfun] = useState("select subject");

  const [subject2, subjectfun2] = useState("select subject");
  const [subject3, subjectfun3] = useState("select subject");
 
  if (subjectstream == "Technology") {
    selectSub = technologysubject;
  } else if (subjectstream == "Bio Sience") {
    selectSub = bio;
  }
  else if(subjectstream=="Maths"){
    selectSub = Maths;
  }
  else if(subjectstream=="Commerce"){
       
    selectSub=bio;
  }
  else{
    selectSub=bio;
  }

  return (
    <div>
      <Mnavbar></Mnavbar>
      <div class="header">
        <h1>Find Your Course</h1>
        <p>Lorem ipsum dolor sit amet </p>
        <div className="body">
          <form action="" method="post">
            <div className="rows">
              <div className="subject">
                <label htmlFor="">Subject Streem</label>
                <br />
                <select
                  className="selectsubject"
                  aria-required
                  onChange={(e) => subjectstreamfun(e.target.value)}
                >
                  <option id="option">Select Subject Streem</option>
                  <option id="Maths">Maths</option>
                  <option id="Bio">Bio Sience</option>
                  <option id="Technology">Technology</option>
                  <option id="Art">Art</option>
                  <option id="Commerce">Commerce</option>
                </select>
              </div>
              <div className="results">
                <label htmlFor="">Subject One</label>
                <br />

                <select className="selectsubject" aria-required onChange={(e)=>subjectfun2(e.target.value)}>
                  <option id="option">Select 1 Sub</option>
                  {selectSub.map((subjects) => (
                    <option key={subjects} option={subjects}>{subjects}</option>
                  ))}
                </select>
              </div>
              <div className="results">
                <label htmlFor="">Subject Two</label>
                <br />
                <select className="selectsubject" aria-required onChange={(e)=>subjectfun3(e.target.value)}>
                    <option>Select 2 sub</option>
                    {selectSub.filter((subjects)=>subjects !==subject2).map((subjects)=>(
                       <option key={subjects} option={subjects}>{subjects}</option>
                    ))}
                </select>
              </div>
              <div className="results">
                <label htmlFor="">Subject Three</label>
                <br/>
                <select className="selectsubject" aria-required>
                    <option>Subject 3 sub</option>
                    {selectSub.filter((subjects)=>subjects !==subject3 && subjects !==subject2).map((subjects)=>(
                       <option key={subjects} option={subjects}>{subjects}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className="rows">
              <div className="distric">
                <label htmlFor="">Distric</label>
                <br />
                <select className="selectsubject" aria-required>
                    <option>Select Distric</option>
                    {districts.map((distr)=>(
                        <option value={distr}>{distr}</option>
                    ))}
                </select>
              </div>
              <div className="z_score">
                <label htmlFor="">Z-Score</label>
                <br />
                <input type="text" required />
              </div>
              <div className="buttons">
                <button type="submit" onClick={null}>
                  Show Result
                </button>
                <button type="reset" id="reset">
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="result_table">
        <ResutlTable></ResutlTable>
      </div>
      
    </div>
  );
};

export default Result;
