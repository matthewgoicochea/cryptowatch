import React from "react";
import DailyCloseTimer from "./DailyCloseTimer";
import UserAssets from "./UserAssets";
import CryptoInfo from "./CryptoInfo";

function Dashboard() {
  return (
    <div className="container p-0">
      <h1 className="px-3">Dashboard</h1>
      <div className="container">
        <DailyCloseTimer />
      </div>
      <div className="container bg-grey">
        <UserAssets />
      </div>
      <div className="container">
        <CryptoInfo />
      </div>
    </div>
  );
}

export default Dashboard;
