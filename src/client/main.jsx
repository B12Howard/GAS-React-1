import React from "react";
import ReactDOM from "react-dom";
// import SheetEditor from "./components/sheet-editor";
import Header from "./components/header";
//import Home from "./components/home";
import Routes from "./components/routes";
import { BrowserRouter } from "react-router-dom";
//ReactDOM.render(<FormInput2 />, document.getElementById("index"));

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </div>,
  document.getElementById("index")
);
/*
import SheetEditor from "./components/sheet-editor";

ReactDOM.render(<SheetEditor />, document.getElementById("index"));
*/
