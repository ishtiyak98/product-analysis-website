import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const PieGraph = ({ data }) => {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h5 className="text-center text-danger py-3">Investment VS Revenue</h5>
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            dataKey="investment"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#e33636"
          />
          <Pie
            data={data}
            dataKey="revenue"
            nameKey="month"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#27ae60"
            label
          />

          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default PieGraph;
