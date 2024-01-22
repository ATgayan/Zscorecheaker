import React, { useState, useEffect } from "react";
import '../styles/result_table.css';

export const ResutlTable = ({ props }) => {
  const [data, Datafun] = useState([]);
  const [isLoading, isLoadingfun] = useState(true);
  const [Erro, Errofun] = useState(false);

  useEffect(() => {
    if (Array.isArray(props) && props.length > 0) {
      Datafun(props); 
      isLoadingfun(false);
    } else {
      Errofun(true);
    }
  }, [props]);

  return (
    <div className="table_div">
      {isLoading ? (
        <p>Loading</p>
      ) : Erro ? (
        <p>Error</p>
      ) : (
        <table className="tabales">
          <thead className="t_head">
            <tr className="table_tr">
              <th>University</th>
              <th>Course</th>
              <th>Zscore</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.university}</td>
                <td>{row.course}</td>
                <td>{row.zscore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResutlTable;
