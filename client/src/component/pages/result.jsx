import React, { useState} from 'react';
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
  const Art = ["sinhala", "english", "tamil", "pali", "sanskrit","logic and scientific method", "political science","media and communication" ,"studies,economics","geography","history","dancing","music"];

  let selectSub = ["select subject"];

 
  const [subjectstream, subjectstreamfun] = useState("select subject");

  const [subject1, subjectfun2] = useState("select subject");
  const [subject2, subjectfun3] = useState("select subject");
  const [subject3, subjectfun4] = useState("select subject");
  const [Distric, subjectfun5] = useState("select subject");
  const [Zscore, subjectfun6] = useState("select subject");
  const [fetchdata,setFetchdata]=useState(null);
  const UserInpulist={subjectstream,subject1,subject2,subject3,Distric,Zscore};

  const SubmitRisult=async(e)=>{
    e.preventDefault();
    if(!validField(e)){
       return
    }
    try {
    setFetchdata(null);
    const response = await fetch('http://localhost:4000/User-Submited', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(UserInpulist),
  });

  if (response.ok) {
    console.log('data send...');
    const datas=await response.json();
    setFetchdata(datas); 
    console.log(datas)
    
  } else {
    console.error('Request failed:', response.statusText);
  }
    } catch (error) {
      console.log(`all sending operation faild... ${error}`)
    }
  }

  if (subjectstream ==="Technology") {
    selectSub = technologysubject;
  } else if (subjectstream === "Bio Sience") {
    selectSub = bio;
  }
  else if(subjectstream==="Maths"){
    selectSub = Maths;
  }
  else if(subjectstream==="Commerce"){
    selectSub=Commerce;
  }
  else{
    selectSub=Art;
  }

  const [validateError, setValidateError] = useState(false);
  const[zscorevalid,setzscorevalid] = useState('');
  const[error,setError] = useState(false)

  const validField = () => {
    if (zscorevalid.length === 0) {
      setValidateError(true);
      setError(false);
    } else if (zscorevalid.length > 6) {
      setValidateError(false);
      setError(true);
    } else if (!zscorevalid.includes('.')) {
      setValidateError(false);
      setError(true);
    } else {
      setValidateError(false);
      setError(false);
      return true
    }
  };



  return (
    <div>
      <Mnavbar ></Mnavbar>
      <div class="header">
        <h1>Find Your Course</h1>
        <p>fill the from bellow to find result</p>
        <div className="body">
          <form className='formbody' >
            <div className="rows">
              <div className="subject">
                <p id='errors'>*</p>
                <select
                  className="selectsubject"
                  onChange={(e) => subjectstreamfun(e.target.value)}
                >
                  <option id="option" value="default" disable hidden>Select Subject Streem</option>
                  <option id="Maths">Maths</option>
                  <option id="Bio">Bio Sience</option>
                  <option id="Technology">Technology</option>
                  <option id="Art">Art</option>
                  <option id="Commerce">Commerce</option>
                </select>
              </div>

              <div className="results">
                <p id='errors'>*</p>
                <select className="selectsubject" onChange={(e)=>subjectfun2(e.target.value)}>
                  <option id="option" value="default" disable hidden>Subjects</option>
                  {selectSub.map((subjects) => (
                    <option key={subjects} option={subjects}>{subjects}</option>
                  ))}
                </select>
              </div>

              <div className="results">
                <p id='errors'>*</p>
                <select className="selectsubject"  onChange={(e)=>subjectfun3(e.target.value)}>
                    <option value="default" disable hidden>Subjects</option>
                    {selectSub.filter((subjects)=>subjects !==subject1).map((subjects)=>(
                       <option key={subjects} option={subjects}>{subjects}</option>
                    ))}
                </select>
              </div>

              <div className="results">

                <p id='errors'>*</p>
                <select className="selectsubject"  onChange={(e)=>subjectfun4(e.target.value)}>
                    <option value="default" disable hidden>Subject</option>
                    {selectSub.filter((subjects)=>subjects !==subject2 && subjects !==subject1).map((subjects)=>(
                       <option key={subjects} option={subjects}>{subjects}</option>
                    ))}
                </select>
              </div>
            </div>

            <div className="rows">
              <div className="distric">
                <p id='errors'>*</p>
                <select className="selectsubject"  aria-expanded='false' onChange={(e)=>subjectfun5(e.target.value)}>
                    <option value="default" disable hidden>Select Distric</option>
                    {districts.map((distr)=>(
                        <option  value={distr}>{distr}</option>
                    ))}
                </select>
              </div>
              <div className="z_score">
                <br />
                <input
                  type="text"
                  step="0.01"
                  maxLength="6"
                  placeholder="Your Z-score"
                  onChange={(e) => {
                    subjectfun6(e.target.value);
                    setzscorevalid(e.target.value);
                    setValidateError(false);
                    setError(false)
                  }}
                  value={zscorevalid}
                />
                {validateError ? (
                    <p id='error'>*This field can not be empty </p>
                  ) : error ? (
                    <p id='error'>*must contain a decimal point</p>
                  ) : null}
              </div>
              <div className="buttons">
                  <button type="submit" onClick={SubmitRisult}>
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
      {fetchdata !== null && <ResutlTable props={fetchdata} />}
      </div>
      
    </div>
  );
};

export default Result;
