import React from "react";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import UserAssets from "./UserAssets";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact={true} path="/">
          <Dashboard />
        </Route>
        <Route path="/assets">
          <UserAssets />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
