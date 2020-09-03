import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "Components/Layout/Header";
import Main from "Components/Main";
import Profile from "Components/Profile";
import Settings from "Components/Settings";
import Error404 from "Components/Layout/Error404";

import "App.css";
import "Styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Main} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
