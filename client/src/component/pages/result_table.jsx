import React, { useState, useEffect } from 'react';
import '../styles/result_table.css';
import  Loading from '../messages/Loadingm'
import ErrorLoading from '../messages/Errorloading'

const ResultTable = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await fetch("http://localhost:4000/Resultpage");
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        setError(true);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  const [isErrorModalOpen, setIsErrorModalOpen] = useState(true);

  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  return (
    <div className="table_div">
      {isLoading ? (
        <Loading />
      ) : error ? (
        isErrorModalOpen ? (
          <ErrorLoading onClose={handleCloseErrorModal} />
        ) : (
          <div>
          </div>
        )
      ) : (
        <table className="tabales">
          <thead className="t_head">
            <tr className="table_tr">
              <th>Course</th>
              <th>University</th>
              <th>Zscore</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((row) => (
              <tr key={row.course}>
                <td>{row.course}</td>
                <td>{row.university}</td>
                <td>{row.zscore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResultTable;
