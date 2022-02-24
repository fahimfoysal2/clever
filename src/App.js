import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import AuthMiddleware from "./Routes/Middleware/AuthMiddleware";
import { openRoute, PrivetRoute } from "./Routes/Routes";

const App = () => {
  return (
    <Router>
      <Switch>
        {openRoute.map((route, idx) => (
          <AuthMiddleware
            path={route.path}
            component={route.component}
            key={idx}
            isAuthProtected={false}
            exact
          />
        ))}

        {PrivetRoute.map((route, idx) => (
          <AuthMiddleware
            path={route.path}
            component={route.component}
            key={idx}
            isAuthProtected={true}
            exact
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
