import React from "react";
import { VictoryPie } from "victory";
import { PieChartData } from "../data/piechart-data";

const PieChart1 = () => {
  return (
    <div>
      <div className="md:border-r-2 md:pr-16">
        <VictoryPie
          padAngle={({ datum }) => 2}
          innerRadius={100}
          responsive
          labelRadius={({ innerRadius }) => innerRadius + 10 }
          data={PieChartData}
          colorScale={["#19CD50", "#CACDD0", "#F4B667", "blue"]}
          labelComponent={undefined}
          style={{ labels: { fill: "black", fontSize: 20, fontWeight: "bold" } }}
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-2 lg:w-84 pl-12 md:pl-2">
        <div className="w-30 inline-flex">
          <div className="w-6 h-6 bg-blue-700 rounded-md"></div>
          <p className="text-xm font-semibold ml-2">Active</p>
        </div>
        <div className="w-30 inline-flex">
          <div className="w-6 h-6 bg-orange-300 rounded-md"></div>
          <p className="text-xm font-semibold ml-2">Advertisor</p>
        </div>
        <div className="w-30 inline-flex">
          <div className="w-6 h-6 bg-emerald-500 rounded-md"></div>
          <p className="text-xm font-semibold ml-2">Patrion</p>
        </div>
        <div className="w-30 inline-flex">
          <div className="w-6 h-6 bg-gray-300 rounded-md"></div>
          <p className="text-xm font-semibold ml-2">Inactive</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart1;
