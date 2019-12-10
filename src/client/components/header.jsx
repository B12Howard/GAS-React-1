import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="indigo.darken-1">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/data">Data</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
