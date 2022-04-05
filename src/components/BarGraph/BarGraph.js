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
        <h5 className="text-center text-primary py-2 text-danger">Investment VS Revenue</h5>
        <BarChart
          width={350}
          height={280}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#e33636" />
          <Bar dataKey="revenue" stackId="a" fill="#27ae60" />
        </BarChart>
      </div>
    </div>
  );
};

export default BarGraph;
