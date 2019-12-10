import React from "react";
import "../styles.css";

const MoreData = () => {
  // Select a user and be able to edit the data point and see more detailed information
  return (
    <div className="row">
      <div className="medium-12 columns">
        <h2 id="welcomeText">Make people fall in love with your ideas</h2>

        <a href="/login" className="button">
          Login
        </a>
        <a href="/signup" className="button success">
          Signup
        </a>
      </div>
    </div>
  );
};

export default MoreData;
