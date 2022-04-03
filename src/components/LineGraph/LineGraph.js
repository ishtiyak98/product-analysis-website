import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const LineGraph = ({ data }) => {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h5 className="text-center text-primary py-2">Monthwise Sell :</h5>
        <LineChart width={400} height={280} data={data}>
          <Line dataKey={"sell"}></Line>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
          <Legend />
          <CartesianGrid></CartesianGrid>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
    </div>
  );
};

export default LineGraph;
