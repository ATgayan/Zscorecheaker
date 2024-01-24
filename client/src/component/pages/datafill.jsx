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

const streams=[
   "Technology",
   "Maths",
   "Science",
   "Commerce",
   "Arts"
]

const technologysubject = ["Engineering Tech","Bio Systems Tech","Science for Tech (SFT)","Information and communication Technolog","Economics","Geography","Home Economics", "English Language" , "Accountancy" ,  "Communication and Media Study" ,"Arts","Business Studies","Agriculture"];
const bio = ["cemesry", "ll", "bb"];
const Maths = ["Chemistry", "Combined Mathematics", "Physics","Information and Communication Technology (ICT)"];
const Commerce = ["Accountancy", "Business Studies (BS)", "Economics","Business Statistics","Geography","Political Science","History","The logic and the scientific method","English","German","French","Agricultural Sciences","Combined Mathematics","Information and Communication Technology (ICT)"];
const Art = ["sinhala", "english", "tamil", "pali", "sanskrit","logic and scientific method", "political science","media and communication" ,"studies,economics","geography","history","dancing","music"];

let selectSub = ["select subject"];


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

 const uni_corses=[
   "Bachelor of Arts (General)", "Bachelor of Arts (Special) in Demography",	"Bachelor of Arts (Special) in Economics","Bachelor of Arts (Special) in English","Bachelor of Arts(Special) in Geography","Bachelor of Arts (Special) in History","Bachelor of Arts (Special) in International R","Bachelor of Arts (Special) in Political Scien","Bachelor of Arts (Special) in Sinhala","Bachelor of Arts (Special) in Sociology",
   "Bachelor of Business Administration (Special)","Bachelor of Business Administration (Special)","Bachelor of Business Administration (Special)","Bachelor of Business Administration (Special)","Bachelor of Business Administration (Special)","Bachelor of Business Administration (Special)","Bachelor of Computer Science (BCSc)", "Bachelor of Education (Special)","Bachelor of Information and Communication Technology (BICT) ","Bachelor of Laws",
   "Bachelor of Science (General)",
  "Bachelor of Science (General) in Industrial Statistics & Mathematical Finance",
  "Bachelor of Science (Special) in Bioinformatics",
  "Bachelor of Science (Special) in Chemical Biology",
  "Bachelor of Science (Special) in Chemistry",
  "Bachelor of Science (Special) in Computational Chemistry",
  "Bachelor of Science (Special) in Computational Physics",
  "Bachelor of Science (Special) in Engineering Physics",
  "Bachelor of Science (Special) in Environmental Sciences",
  "Bachelor of Science (Special) in Finance, Business and Computational Mathematics",
  "Bachelor of Science (Special) in Financial and Business Mathematics",
  "Bachelor of Science (Special) in Mathematics",
  "Bachelor of Science (Special) in Mathematics and Statistics with Computer Science",
  "Bachelor of Science (Special) in Molecular Biology & Biochemistry",
  "Bachelor of Science (Special) in Nuclear Medical Science",
  "Bachelor of Science (Special) in Pharmacy",
  "Bachelor of Science (Special) in Physics",
  "Bachelor of Science (Special) in Plant Biotechnology",
  "Bachelor of Science (Special) in Plant Science",
  "Bachelor of Science (Special) in Statistics",
  "Bachelor of Science (Special) in Statistics with Computer Science",
  "Bachelor of Science (Special) in Zoology",
  "Bachelor of Science in Computer Science (BSc (Comp.Sc))",
  "Bachelor of Science in Information & Communication Technology (BSc.(ICT))",
  "Master of Arts Regional Development and Planning",
  "Master of Public Management",
  "Postgraduate Diploma / Master of Travel and Tourism",
  "Postgraduate Diploma in Public Administration",
  "Postgraduate Diploma in Public Management",
  "Bachelor of Arts (General)",
  "Bachelor of Arts (Special) in Arabic",
  "Bachelor of Arts (Special) in Archaeology",
  "Bachelor of Arts (Special) in Buddhist Studies",
  "Bachelor of Arts (Special) in Economics",
  "Bachelor of Arts (Special) in English",
  "Bachelor of Arts (Special) in Fine Arts",
  "Bachelor of Arts (Special) in Geography",
  "Bachelor of Arts (Special) in History",
  "Bachelor of Arts (Special) in Islamic Civilization",
  "Bachelor of Arts (Special) in Pali",
  "Bachelor of Arts (Special) in Philosophy",
  "Bachelor of Arts (Special) in Political Science",
  "Bachelor of Arts (Special) in Psychology",
  "Bachelor of Arts (Special) in Sanskrit",
  "Bachelor of Arts (Special) in Sinhala",
  "Bachelor of Arts (Special) in Sociology",
  "Bachelor of Arts (Special) in Tamil",
  "Bachelor of Arts (Special) in Western Classic Culture",
  "Bachelor of Business Administration (Special) in Financial Management",
  "Bachelor of Business Administration (Special) in Human Resource Management",
  "Bachelor of Business Administration (Special) in Marketing Management",
  "Bachelor of Business Administration (Special) in Operations Management",
  "Bachelor of Commerce",
  "Bachelor of Dental Surgery",
  "Bachelor of Law",
  "Bachelor of Pharmacy (B.Pharm)",
  "Bachelor of Science (Applied Sciences)",
  "Bachelor of Science (General)",
  "Bachelor of Science (Special) in Agricultural",
  "Bachelor of Science (Special) in Animal Science & Fisheries",
  "Bachelor of Science (Special) in Biology",
  "Bachelor of Science (Special) in Botany",
  "Bachelor of Science (Special) in Chemical & Process Engineering",
  "Bachelor of Science (Special) in Chemistry",
  "Bachelor of Science (Special) in Civil Engineering",
  "Bachelor of Science (Special) in Computer Engineering",
  "Bachelor of Science (Special) in Computer Science",
  "Bachelor of Science (Special) in Electrical & Electronic Engineering",
  "Bachelor of Science (Special) in Engineering",
  "Bachelor of Science (Special) in Geology",
  "Bachelor of Science (Special) in Mathematics",
  "Bachelor of Science (Special) in Mechanical Engineering",
  "Bachelor of Science (Special) in Molecular Biology & Biotechnology",
  "Bachelor of Science (Special) in Physics",
  "Bachelor of Science (Special) in Production Engineering",
  "Bachelor of Science (Special) in Statistics",
  "Bachelor of Science (Special) in Zoology",
  "Bachelor of Science in Animals Sciences & Fisheries",
  "Bachelor of Science in Computation & Management",
  "Bachelor of Science in Food Science & Technology",
  "Bachelor of Science in Medical Laboratory Science",
  "Bachelor of Science in Nursing",
  "Bachelor of Science in Physiotherapy",
  "Bachelor of Science in Radiography / Radiotherapy",
  "Bachelor of Science in Statistics & Operations Research",
  "Bachelor of Veterinary Science",
  "Master of Arts in Applied Economics",
  "Master of Development Practice",
  "Master of Science in Exercise and Sport Sciences",
  "Bachelor of Applied Science in Food Technology",
  "Bachelor of Arts (General)",
  "Bachelor of Arts (Special) in Anthropology",
  "Bachelor of Arts (Special) in Archaeology",
  "Bachelor of Arts (Special) in Buddhist Civilization",
  "Bachelor of Arts (Special) in Buddhist Philosophy",
  "Bachelor of Arts (Special) in Criminology",
  "Bachelor of Arts (Special) in Cultural and Aesthetic Studies",
  "Bachelor of Arts (Special) in Economics",
  "Bachelor of Arts (Special) in English",
  "Bachelor of Arts (Special) in French",
  "Bachelor of Arts (Special) in Geography",
  "Bachelor of Arts (Special) in Hindi",
  "Bachelor of Arts (Special) in History",
  "Bachelor of Arts (Special) in Management Information Technology",
  "Bachelor of Arts (Special) in Mass Communication",
  "Bachelor of Arts (Special) in Pali",
  "Bachelor of Arts (Special) in Philosophy and Psychology",
  "Bachelor of Arts (Special) in Political Science",
  "Bachelor of Arts (Special) in Sanskrit",
  "Bachelor of Arts (Special) in Sinhala",
  "Bachelor of Arts (Special) in Social Statistics",
  "Bachelor of Arts (Special) in Sociology",
  "Bachelor of Commerce (Special)",
  "Bachelor of Pharmacy",
  "Bachelor of Science (General)",
  "Bachelor of Science (Special)",
  "Bachelor of Science (Special) in Accounting",
  "Bachelor of Science (Special) in Botany",
  "Bachelor of Science (Special) in Business Administration",
  "Bachelor of Science (Special) in Business Administration (Business Economics)",
  "Bachelor of Science (Special) in Business Information Systems",
  "Bachelor of Science (Special) in Chemistry",
  "Bachelor of Science (Special) in Computer Science",
  "Bachelor of Science (Special) in Estate Management and Valuation",
  "Bachelor of Science (Special) in Finance",
  "Bachelor of Science (Special) in Forestry & Environmental Science",
  "Bachelor of Science (Special) in Marketing Management",
  "Bachelor of Science (Special) in Mathematics",
  "Bachelor of Science (Special) in Operations and Technology Management",
  "Bachelor of Science (Special) in Physics",
  "Bachelor of Science (Special) in Plant Biotechnology",
  "Bachelor of Science (Special) in Public Management",
  "Bachelor of Science (Special) in Statistics",
  "Bachelor of Science (Special) in Zoology",
  "Bachelor of Science in Business Administration (HRM) (Special)",
  "Bachelor of Science in Medical Laboratory Sciences",
  "Bachelor of Science in Nursing",
  "Doctor of Philosophy in Management",
  "MBBS",
  "Bachelor of Arts (General)",
  "Bachelor of Arts (Special)",
  "Bachelor of Arts in Peace & Conflict Resolution",
  "Bachelor of Business Management (Accountancy) Special Degree Programme",
  "Bachelor of Business Management (Finance) Special Degree Programme",
  "Bachelor of Business Management (Human Resource) Special Degree Programme",
  "Bachelor of Business Management (Marketing) Special Degree Programme",
  "Bachelor of Commerce (Special) Degree Programme",
  "Bachelor of Commerce Special Degree in Business Technology",
  "Bachelor of Commerce Special Degree in Entrepreneurship",
  "Bachelor of Science (General)",
  "Bachelor of Science (General) in Environmental Conservation & Management",
  "Bachelor of Science (General) in Management & Information Technology",
  "Bachelor of Science (Special) in Botany",
  "Bachelor of Science (Special) in Chemistry",
  "Bachelor of Science (Special) in Computer Science",
  "Bachelor of Science (Special) in Environmental Conservation & Management",
  "Bachelor of Science (Special) in Management & Information Technology",
  "Bachelor of Science (Special) in Mathematical Physics",
  "Bachelor of Science (Special) in Mathematics",
  "Bachelor of Science (Special) in Microbiology",
  "Bachelor of Science (Special) in Molecular Biology and Plant Biotechnology",
  "Bachelor of Science (Special) in Physics",
  "Bachelor of Science (Special) in Statistics",
  "Bachelor of Science (Special) in Zoology",
  "Bachelor of Science in Speech & Hearing Sciences",
  "Master of Arts in Literary Criticism",
  "Master of Public Health in Epidemiology",
  "MBBS",
  "Degree of Bachelor of Science in Information Technology",
  "Honours Degree of Bachelor of Architecture",
  "Honours Degree of Bachelor of Design",
  "Honours Degree of Bachelor of Design (Fashion Design & Product Development)",
  "Honours Degree of Bachelor of Science in Facilities Management",
  "Honours Degree of Bachelor of Science in Information Technology",
  "Honours Degree of Bachelor of Science in Information Technology & Management",
  "Honours Degree of Bachelor of Science in Quantity Surveying",
  "Honours Degree of Bachelor of Science in Town & Country Planning",
  "Honours Degree of Bachelor of Science in Transport & Logistics Management",
  "Honours Degree of Bachelor of Science of Engineering - Specialisation: Chemical & Process Engineering",
  "Honours Degree of Bachelor of Science of Engineering - Specialisation: Civil Engineering",
  "Honours Degree of Bachelor of Science of Engineering - Specialisation: Computer Science & Engineering",
  "Honours Degree of Bachelor of Science of Engineering - Specialisation: Earth Resources Engineering",
  "Honours Degree of Bachelor of Science of Engineering - Specialisation: Electrical Engineering",
  "Honours Degree of Bachelor of Science of Engineering - Specialisation: Electronic & Telecommunication Engineering",
  "Honours Degree of Bachelor of Science of Engineering - Specialisation: Material Science & Engineering",
  "Honours Degree of Bachelor of Science of Engineering - Specialisation: Mechanical Engineering",
  "Honours Degree of Bachelor of Science of Engineering - Specialisation: Textile & Clothing Engineering",
  "Master of Science",
  "Master of Science / Postgraduate Diploma in Building Economics & Quantity Surveying",
  "Master of Science / Postgraduate Diploma in Business Statistics",
  "Master of Science in Construction Law and Dispute Resolution",
  "Master of Science in Gemmology/Postgraduate Diploma in Gemmology/Master of Gemmology",
  "Master of Urban Design",
  "Postgraduate Diploma in Material Science",
  "Bachelor of Arts (General)",
  "Bachelor of Arts (Special)",
  "Bachelor of Business Administration (Accounting Special) (Special)",
  "Bachelor of Business Administration (Financial Management Special) (Special)",
  "Bachelor of Business Administration (Human Resource Management Special) (Special)",
  "Bachelor of Business Administration (Marketing Special) (Special)",
  "Bachelor of Business Management (Online)",
  "Bachelor of Commerce",
  "Bachelor of Fine Arts (Art & Design)",
  "Bachelor of Fine Arts (Dance)",
  "Bachelor of Fine Arts (Music)",
  "Bachelor of Law",
  "Bachelor of Medicine and Bachelor of Surgery",
  "Bachelor of Pharmacy in Pharmacy",
  "Bachelor of Science",
  "Bachelor of Science (Agriculture)",
  "Bachelor of Science in Medical Laboratory Sciences",
  "Bachelor of Science in Nursing",
  "Master of Arts in Cultural Studies",
  "Master of Arts in Tamil",
  "Master of Education",
  "Master of Saiva Siddhanta",
  "Master of Science in Environmental Management",
  "Master of Science in Health Management",
  "Postgraduate Diploma in Education",
  "Postgraduate Diploma in Library and Information Science",
  "Bachelor of Arts (General)",
  "Bachelor of Arts (Special)",
  "Bachelor of Arts (Special) in Economics",
  "Bachelor of Arts (Special) in Geography",
  "Bachelor of Arts (Special) in History",
  "Bachelor of Arts (Special) in Pali & Buddhist",
  "Bachelor of Arts (Special) in Sociology",
  "Bachelor of Business Administration (Special) in Accounting & Finance",
  "Bachelor of Business Administration (Special) in Entrepreneurship",
  "Bachelor of Business Administration (Special) in Human Resource Management",
  "Bachelor of Business Administration (Special) in Marketing Management",
  "Bachelor of Science (Fisheries and Marine Sciences) Special Degree in Aquaculture",
  "Bachelor of Science (Fisheries and Marine Sciences) Special Degree in Fisheries",
  "Bachelor of Science (Fisheries and Marine Sciences) Special Degree in Limnology",
  "Bachelor of Science (Fisheries and Marine Sciences) Special Degree in Oceanography & Marine Geology",
  "Bachelor of Science (General)",
  "Bachelor of Science (Special) in Botany",
  "Bachelor of Science (Special) in Chemisitry",
  "Bachelor of Science (Special) in Mathematics",
  "Bachelor of Science (Special) in Physics",
  "Bachelor of Science (Special) in Zoology",
  "Bachelor of Science in Agriculture",
  "Bachelor of Science in Medical Laboratory Sciences",
  "Bachelor of Science in Nursing",
  "Bachelor of Science of Engineering specializing in Civil & Environmental Engineering",
  "Bachelor of Science of Engineering specializing in Electrical & Information Engineering",
  "Bachelor of Science of Engineering specializing in Mechanical & Manufacturing Engineering",
  "Master of Arts in Economics",
  "Master of Engineering in Civil Engineering",
  "Master of Science",
  "Master of Science in Animal Science",
  "Master of Science in Green Technology",
  "MBBS",
  "Bachelor of Science in Nursing ",
  "Degree of Bachelor of Arts (General)",
  "Degree of Bachelor of Arts Special in Drama & Theatre ",
  "Degree of Bachelor of Arts Special in Economics",
  "Degree of Bachelor of Arts Special in Education",
  "Degree of Bachelor of Arts Special in Fine Arts",
  "Degree of Bachelor of Arts Special in Geography",
  "Degree of Bachelor of Arts Special in Hindu Culture",
  "Degree of Bachelor of Arts Special in Philosophy",
  "Degree of Bachelor of Arts Special in Political Science",
  "Degree of Bachelor of Arts Special in Sociology",
  "Degree of Bachelor of Arts Special in Tamil",
  "Degree of Bachelor of Business Administration Specialization in Human Resource Management",
  "Degree of Bachelor of Business Administration Specialization in Marketing Management",
  "Degree of Bachelor of Commerce Specialization in Accounting & Finance",
  "Degree of Bachelor of Commerce Specialization in Enterprise Development",
  "Degree of Bachelor of Science (General)",
  "Degree of Bachelor of Science Special in Botany",
  "Degree of Bachelor of Science Special in Chemistry",
  "Degree of Bachelor of Science Special in Computer Science & Mathematics",
  "Degree of Bachelor of Science Special in Phsyics",
  "Degree of Bachelor of Science Special in Zoology",
  "Degree of Bachelor of the Science of Agriculture",
  "Master of Science in Educatio",
  "MBBS",
  "Bachelor of Arts (General) -",
  "Bachelor of Arts (General) in Arabic Language ",
  "Bachelor of Arts (General) in Islamic Studies ",
  "Bachelor of Arts (Special)",
  "Bachelor of Arts (Special) in Arabic Foreign Language & Translation",
  "Bachelor of Arts (Special) in Arabic Language ",
  "Bachelor of Arts (Special) in Arabic Linguistic & Translation ",
  "Bachelor of Arts (Special) in Arabic Literature",
  "Bachelor of Arts (Special) in Economics",
  "Bachelor of Arts (Special) in Geography",
  "Bachelor of Arts (Special) in Hindu Civilization",
  "Bachelor of Arts (Special) in Islamic Banking & Finance",
  "Bachelor of Arts (Special) in Islamic Law  ",
  "Bachelor of Arts (Special) in Philosophye",
  "Bachelor of Arts (Special) in Political Science ",
  "Bachelor of Arts (Special) in Sociology ",
  "Bachelor of Arts (Special) in Tamil ",
  "Bachelor of Business Administration (BBA Special)",
  "Bachelor of Commerce (B.Com Special)",
  "Bachelor of Science (General) ",
  "Bachelor of Science (Management Information Technology)",
"Bachelor of Science (Special) in Computer Science",
"BBA / B.Com (Accounting Special)",
"BBA / B.Com (Finance Special)",
"BBA / B.Com (Human Resource Management Special)",
"BBA / B.Com (Information System Special)",
"BBA / B.Com (Marketing Special)",
"Master of Business Administration",
"Postgraduate Diploma in Management",




 ]

 const [subjectstream, subjectstreamfun] = useState("select subject");

  const [subject1, subjectfun2] = useState("select subject");
  const [subject2, subjectfun3] = useState("select subject");
  const [subject3, subjectfun4] = useState("select subject");
  const [Distric, subjectfun5] = useState("select subject");
  const [Zscore, subjectfun6] = useState("select subject");
  const [Corse, subjectfun7] = useState("select subject");
  const [univercity, subjectfun8] = useState("select subject");

  const UserInpulist={subjectstream,subject1,subject2,subject3,Distric,Zscore,Corse,univercity};


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
 else if(subjectstream==="select subject"){

   selectSub=selectSub;

 }
 else{
   selectSub=Art;
 }

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
        body: JSON.stringify(UserInpulist),
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
                  <select className='subStreem'  name="sunject_strem"   onChange={(e) => subjectstreamfun(e.target.value)}>
                  <option >Stream</option>
                      {streams.map((stream)=>(
                         <option value={stream} option={stream}>{stream}</option>
                      ))}  
                  </select>
               </div>
               <div className="rows">
                  <select className='subjects' name="subject_one"  onChange={(e)=>subjectfun2(e.target.value)}>
                     <option >Subjects</option>
                     {selectSub.map((subject)=>(
                       <option value={subject}>{subject}</option>
                     ))}
                     
                  </select>

                  <select className='subjects'name="subject_two" onChange={(e)=>subjectfun3(e.target.value) }>
                     <option >Subjects</option>
                     {selectSub.filter((subjects)=>subjects !==subject1).map((subject)=>(
                       <option value={subject}>{subject}</option>
                     ))}
                  </select>

                  <select className='subjects'name="subject_tree" onChange={(e)=>subjectfun4(e.target.value)}>
                     <option >Subjects</option>
                     {selectSub.filter((subjects)=>subjects !==subject2 && subjects !==subject1).map((subject)=>(
                       <option value={subject}>{subject}</option>
                     ))}
                  </select>

               </div>
               <div className="rows">
                  <select className='Districts' name="district" onChange={(e)=>subjectfun5(e.target.value)}>
                        <option >Districts</option>
                        {districts.map((distr)=>(
                        <option value={distr}>{distr}</option>
                    ))}
                  </select>
               </div>
               <div className="inputbox">
                  <input type="number"  required placeholder='zscore' name='zscore' onChange={(e)=>subjectfun6(e.target.value)}/>
               </div>
               <div className="rows">
               <select className='University' name="course" onChange={(e)=>subjectfun7(e.target.value)}> <option value="someOption">Course</option>
                        {uni_corses.map((Ucourse)=>(
                        <option value={Ucourse}>{Ucourse}</option>
                    ))}
                  </select>               </div>
               <div className="rows">
                  <select className='University' name="university" onChange={(e)=>subjectfun8(e.target.value)}> <option value="someOption">University</option>
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