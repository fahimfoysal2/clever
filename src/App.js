import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./Common/Login/Login";
import Registration from "./Common/Registration/Registration";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/registration">
          <Registration />
        </Route>{" "}
        {/* <Route exact path="/">
          <Login />
        </Route> */}
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
