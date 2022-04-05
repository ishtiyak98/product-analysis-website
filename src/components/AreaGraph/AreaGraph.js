import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AreaGraph = ({ data }) => {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h5 className="text-center text-danger py-3">Investment VS Revenue</h5>

        <AreaChart
          width={350}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#27ae60" stopOpacity={1} />
              <stop offset="95%" stopColor="#27ae60" stopOpacity={0.6} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e33636" stopOpacity={1} />
              <stop offset="95%" stopColor="#e33636" stopOpacity={0.6} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="investment"
            stackId="1"
            stroke="#27ae60"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stackId="1"
            stroke="#e33636"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          <Legend />
        </AreaChart>
      </div>
    </div>
  );
};

export default AreaGraph;
