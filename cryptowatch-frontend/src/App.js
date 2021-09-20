import React from "react";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import UserAssets from "./UserAssets";
import CryptoInfo from "./CryptoInfo";

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
				<Route path="/ranking">
					<CryptoInfo />
				</Route>
      </Switch>
    </div>
  );
}

export default App;
