import React, { useEffect, useState } from "react";
import "../styles.css";
import server from "../server";

const DataHead = props => {
  const { key, data } = props;
  console.log(data);

  let th = () => {
    return data.data.map((d, i) => {
      console.log(i);
      console.log(d);
      return <th>{d}</th>;
    });
  };

  return <tr>{th()}</tr>;
};

export default DataHead;
