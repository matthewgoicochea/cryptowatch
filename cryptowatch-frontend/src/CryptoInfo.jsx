import React from "react";
import { Link } from "react-router-dom";

function CryptoInfo() {
  const info = (
    <div className="card border-0">
      <div className="card-header bg-transparent">
        <Link to="/ranking">Coins By Market Cap</Link>
      </div>
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Symbol</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Market Cap</th>
              <th scope="col">Percent Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>BTC</td>
              <td>Bitcoin</td>
              <td>$43,000.00</td>
              <td>1 trillion</td>
              <td>+200%</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>ETH</td>
              <td>Ethereum</td>
              <td>$3,000.00</td>
              <td>400 billion</td>
              <td>+200%</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>USDT</td>
              <td>Tether</td>
              <td>$1.00</td>
              <td>60 billion</td>
              <td>+200%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col px-3">{info}</div>
      </div>
    </div>
  );
}

export default CryptoInfo;
