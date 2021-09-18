import React from "react";
import { Link } from "react-router-dom";
import data from "./data/userAssets.data";

function UserAssets() {
  const tableBody = data.map((row) => {
    return (
      <tr>
        <th scope="row">{`${row.symbol}`}</th>
        <td>{`$${row.price}`}</td>
        <td>{`${row.holdings} ${row.symbol}`}</td>
        <td>{`$${row.price * row.holdings}`}</td>
        <td>{`+${row.percentChange}%`}</td>
      </tr>
    );
  });

  const assetTable = (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Holdings</th>
          <th scope="col">Fiat</th>
          <th scope="col">+/-</th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );

  return (
    <div className="container bg-grey">
      <div className="row">
        <div className="col p-0">
          <Link to="/assets">
            <h2 className="px-3 pt-3">Your Assets</h2>
          </Link>
          <div className="container px-3">{assetTable}</div>
        </div>
      </div>
    </div>
  );
}

export default UserAssets;
