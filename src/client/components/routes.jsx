import React from "react";
import { Switch, Route } from "react-router-dom";
import FormInput2 from "./form-input2";
import Home from "./home";
import CRMTable from "./data-table";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/form" component={FormInput2} />
    <Route path="/data" component={CRMTable} />
    <Route path="*" component={Home} />
  </Switch>
);

export default Routes;
