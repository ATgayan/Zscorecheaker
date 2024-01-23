import React, { useState, useEffect } from "react";
import '../styles/result_table.css';
import  Loading from '../messages/Loadingm'
import ErrorLoading from '../messages/Errorloading'

export const ResutlTable = ({ props }) => {
  const [data, Datafun] = useState([]);
  const [isLoading, isLoadingfun] = useState(true);
  const [Error, Errofun] = useState(false);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleCloseErrorModal = (e) => {
    setIsErrorModalOpen(e);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Array.isArray(props) && props.length !== 0) {
          await new Promise(resolve => setTimeout(resolve, 2000));
          Datafun(props);
          isLoadingfun(false);
        } else {
          isLoadingfun(false);
          Errofun(true);
          handleCloseErrorModal(true)
        }
      } catch (error) {
        isLoadingfun(false);
        Errofun(true);
        handleCloseErrorModal(true)
      }
    };

    fetchData();
  }, [props])

    if (Array.isArray(props) && props.length > 0) {
      Datafun(props); 
      isLoadingfun(false);
      Errofun(false);
    } else {
      Errofun(true);
    }
  }, [props]);


  return (
    <div className="table_div">
      {isLoading ? (

        <Loading />
      ) : Error ? (
        isErrorModalOpen ? (
          <ErrorLoading onClose={handleCloseErrorModal} />
        ) : (
          <div>
          </div>
        )

        <p>Loading</p>
      ) : Erro ? (
        <p>not found</p>

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
