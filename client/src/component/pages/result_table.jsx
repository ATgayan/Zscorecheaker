import { useEffect, useState } from "react";

import '../styles/result_table.css';

export const ResutlTable = () => {
  const [data, Datafun] = useState("Emty");
  const [isLoading, isLoadingfun] = useState(true);
  const [Erro, Errofun] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/Resultpage");
        const fetchedData = await response.json();
        Datafun(fetchedData);
      } catch (error) {
        Errofun(true);
      } finally {
        isLoadingfun(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="table_div">
      {isLoading ? (
        <p>loading</p>
      ) : Erro ? (
        <p>Err</p>
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
            {data.map((row) => (
              <tr>
                <td>{row.university}</td>
                <td>{row.course}</td>
                <td>{row.zscore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      ;
    </div>
  );
};

export default ResutlTable;
