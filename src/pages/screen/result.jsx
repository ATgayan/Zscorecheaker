import React from 'react';
import Mnavbar from "./homepageComponents/navbar";

export const result = () => {
  return (
    <div>
        <Mnavbar></Mnavbar>
        <div class="header">
            <div className="body">
                <div className="streem">
                    <select name="subjectstreem" id="subjectstreem">
                        <option value="select">Select Youe Subject Streem</option>
                        <option value="saab">Arts</option>
                        <option value="mercedes">Commerce</option>
                        <option value="audi">Bio Science</option>
                        <option value="audi">Physical Science (Maths)</option>
                        <option value="audi">Technology</option>
                    </select>
                </div>
                <div className="subjects">
                    <input type="text" readOnly id='subname'/>
                    <input type="text"  id='results'/>
                    <input type="text" readOnly id='subname'/>
                    <input type="text"  id='results'/>
                    <input type="text" readOnly id='subname'/>
                    <input type="text"  id='results'/>
                </div>
                <div className="zscoreanddistic">
                    <input type="text"  id='zscore' placeholder='Your Z-Score'/>
                    <input type="text" id='distric' placeholder='distric'  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default result;
