import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//components
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
