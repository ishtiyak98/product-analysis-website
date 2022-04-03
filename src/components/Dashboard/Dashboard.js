import React from "react";
import BarGraph from "../BarGraph/BarGraph";
import LineGraph from "../LineGraph/LineGraph";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center">Our Statistics</h2>
      <div className="row">
        <div className="col-lg-6">
          <LineGraph data={data}></LineGraph>
        </div>
        <div className="col-lg-6">
          <BarGraph data={data}></BarGraph>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
