import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";

function App() {
  const [info, setInfo] = useState({});

  useEffect(() => {}, [info]);

  return (
    <div className="App">
      <Navigation />
      <div id="dashboard">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
