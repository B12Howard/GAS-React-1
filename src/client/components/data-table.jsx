import React, { useEffect, useState } from "react";
import "../styles.css";
import server from "../server";
//import FormInput from "./form-input";
import DataRow from "./data-row";
import DataHead from "./data-head";

const CRMTable = () => {
  const [apiValues, setApivalues] = useState([]);
  const { getSheetsData, getSheetData, addSheet, getSheetByNameData } = server;
  const tabName = "Sheet1";
  const sheetID = "1MWuBH9AZbmWS8BNbQp_xCLeI153c6hopFHjM1-VY3Is";

  useEffect(() => {
    getSheetByNameData(tabName)
      .then(setApivalues)
      .catch(alert);
    console.log(apiValues);
  }, []);

  return (
    <div>
      <table className="highlight responsive-table">
        <thead>
          {apiValues.length
            ? apiValues.map((item, idx) => {
                if (idx === 0) return <DataHead key={idx} data={item} />;
              })
            : "Loading"}
        </thead>

        <tbody>
          {apiValues.length
            ? apiValues.map((item, idx) => {
                if (idx !== 0) return <DataRow key={idx} data={item} />;
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default CRMTable;
