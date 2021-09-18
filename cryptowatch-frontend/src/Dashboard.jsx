import React from "react";
import DailyCloseTimer from "./DailyCloseTimer";
import UserAssets from "./UserAssets";
import CryptoInfo from "./CryptoInfo";

function Dashboard() {
  return (
    <div className="container p-0" id="dashboard">
      <h1 className="px-3">Dashboard</h1>
      <DailyCloseTimer />
      <UserAssets />
      <CryptoInfo />
    </div>
  );
}

export default Dashboard;
