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
        <h5 className="text-center text-danger py-3">Month Wise Sell</h5>
        <LineChart
          width={350}
          height={250}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#e33636" strokeWidth={2}/>
          
        </LineChart>
      </div>
    </div>
  );
};

export default LineGraph;
