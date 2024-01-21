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
  const Maths = ["Chemistry", "Combined Mathematics", "Physics","Information and Communication Technology (ICT)"];
  const Commerce = ["cemesry", "ll", "bb"];
  const Art = ["cemesry", "ll", "bb"];

  let selectSub = ["select subject"];

 
  const [subjectstream, subjectstreamfun] = useState("select subject");

  const [subject2, subjectfun2] = useState("select subject");
  const [subject3, subjectfun3] = useState("select subject");
  const [subject4, subjectfun4] = useState("select subject");
  const [District, subjectfun5] = useState("select subject");
  const [Zscore, subjectfun6] = useState("select subject");

  const UserInpulist={
    subjectstream,
    subject2,
    subject3,
    subject4,
    District,
    Zscore,
  }

  const SubmitRisult=async(e)=>{
        e.preventDefault();
        try {

        const response = await fetch('http://localhost:4000/User-Submited', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(UserInpulist),
      });

    
      if (response.ok) {
        console.log('data send...');

      } else {
        console.error('Request failed:', response.statusText);
      }
        } catch (error) {
          console.log(`all sending operation faild... ${error}`)
        }
}

      if (subjectstream == "Technology") {
        selectSub = technologysubject;
      } else if (subjectstream == "Bio Sience") {
        selectSub = bio;
      }
      else if(subjectstream=="Maths"){
        selectSub = Maths;
      }
      else if(subjectstream=="Commerce"){
          
        selectSub=Commerce;
      }
      else{
        selectSub=Art;
      }
  const [subject5, subjectfun5] = useState("select subject");
  const [subject6, subjectfun6] = useState("select subject");
  
  const UserInpulist={subjectstream,subject2,subject3,subject4,subject5,subject6};

  const SubmitRisult=async(e)=>{
    e.preventDefault();
    try {
      
     
   

    const response = await fetch('http://localhost:4000/User-Submited', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(UserInpulist),
  });

  if (response.ok) {
    console.log('data send...');
  } else {
    console.error('Request failed:', response.statusText);
  }
    } catch (error) {
      console.log(`all sending operation faild... ${error}`)
    }

  }




 
  if (subjectstream == "Technology") {
    selectSub = technologysubject;
  } else if (subjectstream == "Bio Sience") {
    selectSub = bio;
  }
  else if(subjectstream=="Maths"){
    selectSub = Maths;
  }
  else if(subjectstream=="Commerce"){
       
    selectSub=Commerce;
  }
  else{
    selectSub=Art;
  }

  return (
    <div>
      <Mnavbar></Mnavbar>
      <div class="header">
        <h1>Find Your Course</h1>
        <p>Lorem ipsum dolor sit amet </p>
        <div className="body">
          <form  onSubmit={SubmitRisult}>
          <form >
            <div className="rows">
              <div className="subject">
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
        
                <br />
                <select className="selectsubject" aria-required onChange={(e)=>subjectfun2(e.target.value)}>
                  <option id="option">Subjects</option>
                  {selectSub.map((subjects) => (
                    <option key={subjects} option={subjects}>{subjects}</option>
                  ))}
                </select>
              </div>
              <div className="results">
                <br />
                <select className="selectsubject" aria-required onChange={(e)=>subjectfun3(e.target.value)}>
                    <option aria-readonly>Subjects</option>
                    {selectSub.filter((subjects)=>subjects !==subject2).map((subjects)=>(
                       <option key={subjects} option={subjects}>{subjects}</option>
                    ))}
                </select>
              </div>
              <div className="results">
                <br/>
                <select className="selectsubject" aria-required onChange={(e)=>subjectfun4(e.target.value)}>
                    <option>Subject</option>
                    {selectSub.filter((subjects)=>subjects !==subject3 && subjects !==subject2).map((subjects)=>(
                       <option key={subjects} option={subjects}>{subjects}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className="rows">
              <div className="distric">
                <br />
                <select className="selectsubject" aria-required onChange={(e)=>subjectfun5(e.target.value)}>
                    <option>Select Distric</option>
                    {districts.map((distr)=>(
                        <option value={distr}>{distr}</option>
                    ))}
                </select>
              </div>
              <div className="z_score">
                <br />
                <input type="text" required placeholder="Your Z-score" onChange={(e)=>subjectfun6(e.target.value)}/>
              </div>
              <div className="buttons">
                <button type="submit" onClick={SubmitRisult}>Show Resul</button>
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
