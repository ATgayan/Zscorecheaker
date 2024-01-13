import React from 'react';
import Mnavbar from "./navbar";

export const result = () => {
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
                            <label htmlFor="">Subject Streem</label><br />
                            <select className='selectsubject' aria-required>
                                <option id='option' aria-readonly>Select Subject Streem</option>
                                <option id='option'>Maths</option>
                                <option id='option'>Bio Sience</option>
                                <option id='option'>Technology</option>
                                <option id='option'>Art</option>
                                <option id='option'>Commerce</option>
                            </select>
                        </div>
                        <div className="results">
                            <label htmlFor="">Subject One</label><br />
                            <input type="text" required/>
                        </div>
                        <div className="results">
                            <label htmlFor="">Subject Two</label><br />
                            <input type="text" required/>
                        </div>
                        <div className="results">
                            <label htmlFor="">Subject Three</label><br />
                            <input type="text" required/>
                        </div>
                    </div>
                    <div className="rows">
                        <div className="distric">
                                <label htmlFor="">Distric</label><br />
                                <input type="text"required />
                        </div>
                        <div className="z_score">
                                <label htmlFor="">Z-Score</label><br />
                                <input type="text" required/>
                        </div>
                        <div className="buttons">
                            <button type='submit'>Show Result</button>
                            <button type='reset' id='reset'>Clear</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default result;
