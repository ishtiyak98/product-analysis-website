import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarGraph = ({ data }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="">
        <h5 className="text-center text-primary py-2">Investment vs Revenue</h5>
        <BarChart
          width={400}
          height={280}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default BarGraph;
