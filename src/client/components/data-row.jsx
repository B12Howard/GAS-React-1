import React, { useEffect, useState } from "react";
import "../styles.css";
import server from "../server";

const DataRow = props => {
  const { key, data } = props;
  console.log(data);

  let td = () => {
    return data.data.map((d, i) => {
      return <td>{d}</td>;
    });
  };

  return <tr>{td()}</tr>;
};

export default DataRow;
